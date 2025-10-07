import pb from "../../utils/pb";
import { Collections } from "../../utils/pocketbase-types";

export async function POST({ request, cookies }) {
  console.log('\n=== API SAVE SVG APPELÉE ===');
  
  // Vérifier le cookie
  const cookie = cookies.get("pb_auth")?.value;
  console.log('Cookie pb_auth présent:', !!cookie);
  
  if (cookie) {
    pb.authStore.loadFromCookie(cookie);
    console.log('AuthStore chargé');
    console.log('AuthStore valide:', pb.authStore.isValid);
    console.log('User authentifié:', pb.authStore.record?.email);
    console.log('User ID:', pb.authStore.record?.id);
  } else {
    console.error('❌ PAS DE COOKIE pb_auth !');
  }
  
  const data = await request.json();
  console.log('\n=== DONNÉES REÇUES ===');
  console.log('Data:', JSON.stringify(data, null, 2));
  console.log('User ID dans data:', data.user);
  console.log('Name:', data.name);
  console.log('SVG Code length:', data.code_svg?.length);
  console.log('Chat history length:', data.chat_history?.length);
  
  // Vérifications
  if (!data.user) {
    console.error('❌ ERREUR: user manquant dans data');
    return new Response(JSON.stringify({ 
      success: false, 
      error: "User ID manquant" 
    }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
  
  if (!data.code_svg || data.code_svg.trim() === '') {
    console.error('❌ ERREUR: code_svg vide');
    return new Response(JSON.stringify({ 
      success: false, 
      error: "Code SVG manquant" 
    }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
  
  try {
    console.log('\n=== TENTATIVE DE CRÉATION ===');
    console.log('Collection:', Collections.Save);
    console.log('Data à sauvegarder:', {
      name: data.name,
      user: data.user,
      code_svg_length: data.code_svg?.length,
      chat_history_length: data.chat_history?.length
    });
    
    const record = await pb
      .collection(Collections.Save)
      .create(data);
      
    console.log('✅ SVG SAUVEGARDÉ AVEC SUCCÈS');
    console.log('Record ID:', record.id);
    console.log('Record:', record);

    return new Response(JSON.stringify({ 
      success: true, 
      id: record.id,
      record: record 
    }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error('\n❌ ERREUR LORS DE LA SAUVEGARDE');
    console.error('Error message:', error.message);
    console.error('Error:', error);
    console.error('Error response:', error.response);
    console.error('Error data:', error.response?.data);
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message,
      details: error.response?.data || error.toString()
    }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}