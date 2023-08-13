document.getElementById("sendButton").addEventListener("click", async function() {
    const userInput = document.getElementById("userInput").value;
    const gptResponseArea = document.getElementById("gptResponse");

    const response = await fetchChatGPT(userInput);
    gptResponseArea.value = response;
});

async function fetchChatGPT(input) {
    // L'URL de l'API et les détails d'authentification dépendent de l'API spécifique que vous utilisez
    const apiUrl = "https://api.openai.com/v2/engines/davinci/completions";
    const apiKey = "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"; // Remplacez par votre clé d'API

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: input,
            max_tokens: 150
        })
    });

    const data = await response.json();

    // Vous pouvez manipuler la réponse ici si vous le souhaitez
    return data.choices[0].text.trim();
}