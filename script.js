document.addEventListener("DOMContentLoaded", () => {
    const chatbotHeader = document.getElementById("chatbot-header");
    const chatDisplay = document.getElementById("chat-display");
    const minimizeBtn = document.getElementById("minimize-btn");
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatMessages = document.getElementById("chat-messages");

    // Toggle chatbot visibility
    minimizeBtn.addEventListener("click", () => {
        chatDisplay.classList.toggle("hidden");
    });

    // Send user message and display bot response
    sendBtn.addEventListener("click", () => {
        const userText = userInput.value.trim();
        if (userText === "") return;

        // Display user message
        const userMessageDiv = document.createElement("div");
        userMessageDiv.className = "user-message";
        userMessageDiv.textContent = userText;
        chatMessages.appendChild(userMessageDiv);

        userInput.value = "";

        // Simulate bot response
        const botMessageDiv = document.createElement("div");
        botMessageDiv.className = "bot-message";
        botMessageDiv.textContent = "Let me check that for you...";
        chatMessages.appendChild(botMessageDiv);

        // Scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Mocking an AI response
        setTimeout(() => {
            botMessageDiv.textContent = generateBotResponse(userText);
        }, 1000);
    });

    // Simulate bot response logic
    function generateBotResponse(userText) {
        const responses = {
            "What is the process for filing a case?": "You can file a case through our online portal or visit the nearest court registry.",
            "How to appeal a court decision?": "You must file an appeal within 30 days of the decision and provide valid grounds for appeal.",
            "Can I represent myself in court?": "Yes, you can represent yourself, but it’s recommended to have legal representation.",
        };

        return responses[userText] || "Sorry, I’m not sure about that. Please consult a legal expert.";
    }
});
