# AI Chatbot with ChatGPT and React

## Introduction

This is a powerful AI-powered chatbot application built using ChatGPT and React. The chatbot is designed to engage users in natural and meaningful conversations, making it an excellent tool for improving user interactions and customer service.

## Features

- Real-time chat with AI-powered responses.
- Customizable user interface for a seamless user experience.
- Easy-to-use and user-friendly chat interface.
- Integration with OpenAI's ChatGPT API for intelligent responses.

## Getting Started

Follow these steps to get the application up and running on your local machine:

1. Clone the repository:

```
git clone https://github.com/yourusername/ai-chatbot-react.git
```

2. Install dependencies:

```
cd ai-chatbot-react
npm install
```

3. Set up your OpenAI API key:

   - Go to the OpenAI website (https://openai.com) and sign up for an account.
   - Generate an API key and keep it handy.

4. Add your API key to the application:

   - Open `App.jsx` in the `src` directory.
   - Locate the variable `OPENAI_API_KEY` and replace `"YOUR_API_KEY"` with your actual OpenAI API key.

5. Start the application:

```
npm run dev
```

6. Open your browser and navigate to `http://127.0.0.1:5173/` to interact with the chatbot.

## How to Use

- Type your message in the message input field and press "Enter" to send it to the chatbot.
- The chatbot will process your message using the ChatGPT model and respond accordingly.
- You can continue the conversation by sending more messages.

## Customize the Chatbot

You can customize the chatbot's behavior and responses by modifying the system message prompt in `App.jsx`. The system message provides instructions or context to the language model before processing user messages.

## Contributing

We welcome contributions to this project! If you find any bugs or want to add new features, please create a pull request.

## Acknowledgments

- This project uses the Chat UI Kit React library for building the chat interface. Find it at [Chat UI Kit React](https://github.com/chatscope/chat-ui-kit-react).
- Thanks to OpenAI for providing the ChatGPT API.

## Contact

For any inquiries or questions, please contact us at onudanielonyebuchi@gmail.com.

---
