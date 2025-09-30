import pb from "../../utils/pb";
import { Collections } from "../../utils/pocketbase-types";

export async function POST({ request }) {
  try {
    const data = await request.json();
    console.log("Received data to update:", data);
    console.log("ID:", data.id);
    console.log("SVG Code length:", data.code_svg?.length);
    console.log("Chat history length:", data.chat_history?.length);
    
    // Vérifier que l'ID existe
    if (!data.id) {
      throw new Error("ID is required");
    }

    // Préparer les données à mettre à jour
    // Si chat_history est une string, on la parse pour en faire un objet
    let chatHistory = data.chat_history;
    /**if (typeof chatHistory === 'string') {
      try {
        chatHistory = JSON.parse(chatHistory);
      } catch (e) {
        console.error("Error parsing chat_history:", e);
      }
    }**/
    
    const updateData = {
      code_svg: data.code_svg,
      chat_history: chatHistory
    };

    console.log("Updating record with ID:", data.id);
    console.log("Update data:", updateData);
    
    const record = await pb
      .collection(Collections.Save)
      .update(data.id, updateData);
    
    console.log("SVG updated successfully:", record.id);

    return new Response(JSON.stringify({ success: true, record }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error updating SVG:", error);
    console.error("Error details:", error.message);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message,
        details: error.toString()
      }), 
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}