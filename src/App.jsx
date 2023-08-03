import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'

const OPENAI_API_KEY = "YOUR API KEY"; //Replace with your generated openai api key
function App() {
  const [isChatbotTyping, setIsChatbotTyping] = useState(false);
  // State to store chat messages
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello World, I am your AI Chatbot!",
      sender: "ChatGPT",
    },
  ]);

  // Function to handle user messages
  const handleUserMessage = async (userMessage) => {
    // Create a new user message object
    const newUserMessage = {
      message: userMessage,
      sender: "user",
      direction: "outgoing",
    };

    // Update chat messages state with the new user message
    const updatedChatMessages = [...chatMessages, newUserMessage];
    setChatMessages(updatedChatMessages);

    
    setIsChatbotTyping(true);
    await processUserMessageToChatGPT(updatedChatMessages);
  };

  async function processUserMessageToChatGPT(messages) {
    // Prepare the messages in the required format for the API
    let apiMessages = messages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // System message for ChatGPT
    const systemMessage = {
      role: "system",
      content: "Explain all concept like a Professor in Biochemistry",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // System message should be in front of user messages
        ...apiMessages,
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + OPENAI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // Update chat messages with ChatGPT's response
        setChatMessages([
          ...messages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },          
        ]);
        setIsChatbotTyping(false);
      });
  }

  return (
    <>
      {/* A container for the chat window */}
      <div style={{ position: "relative", height: "100vh", width: "700px" }}>
        {/* All components are wrapped in the MainContainer */}
        <MainContainer>
          {/* All chat logic would be contained in the ChatContainer */}
          <ChatContainer>
            {/* Shows all our messages */}
            <MessageList
              // Display a typing indicator when the chatbot is processing a response.
              typingIndicator={
                isChatbotTyping ? <TypingIndicator content="ChatGPT is thinking" /> : null
              }
            >
              {/* Map through chat messages and render each message */}
              {chatMessages.map((message, i) => {
                return (
                  // Render each individual chat message as a <Message> component.
                  <Message
                    key={i}
                    model={message}
                    // Add additional styling to align the chatbot's response to the left.
                    style={message.sender === "ChatGPT" ? { textAlign: "left" } : {}}
                  />
                );
              })}
            </MessageList>;
            <MessageInput placeholder='Type Message here' onSend={handleUserMessage}/>
          </ChatContainer>
        </MainContainer>
      </div>
    </>
  );
}

export default App