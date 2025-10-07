import pb from "../../utils/pb";
import { Collections } from "../../utils/pocketbase-types";

export const POST = async ({ request }) => {
    const { name, email, password, passwordConfirm } = await request.json();
    
    try {
        // Créer un nouvel utilisateur dans PocketBase
        const user = await pb.collection(Collections.Users).create({
            name,
            email,
            password,
            passwordConfirm,
            emailVisibility: true,
        });

        console.log("Utilisateur créé avec succès:", user.id);
        
        return new Response(JSON.stringify({ 
            success: true, 
            message: "Utilisateur créé avec succès" 
        }), { 
            status: 201 
        });
    } catch (err) {
        console.error("Erreur lors de l'inscription :", err);
        
        // Gestion des erreurs spécifiques
        let errorMessage = "Erreur lors de l'inscription";
        
        if (err.data?.data) {
            // Extraction des messages d'erreur de PocketBase
            const errors = err.data.data;
            if (errors.email) {
                errorMessage = "Cet email est déjà utilisé";
            } else if (errors.password) {
                errorMessage = "Le mot de passe ne respecte pas les critères";
            }
        }
        
        return new Response(JSON.stringify({ error: errorMessage }), { 
            status: 400 
        });
    }
};