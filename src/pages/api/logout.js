export const POST = async ({ cookies }) => {
    // Supprime le cookie d'authentification
    cookies.delete("pb_auth", { path: "/" });
    
    // Redirige vers la page d'accueil
    return new Response(null, { 
        status: 303, 
        headers: { Location: '/' } 
    });
};