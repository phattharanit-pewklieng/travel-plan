import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  Button,
} from '@chatscope/chat-ui-kit-react'
import { useState } from 'react'
import PropTypes from 'prop-types'


const API_KEY = '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'

const systemMessage = {
  //  Explain things like you're talking to a software professional with 5 years of experience.
  role: 'system',
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.", // Speak link a pirate, Explain like I am a 10 years of experience software engineer
}

interface ClearMessagesButtonProps {
  onClick: () => void;
}

function ClearMessagesButton({ onClick }: ClearMessagesButtonProps) {
  return (
    <Button
      color="secondary"
      style={{ backgroundColor: 'navy', color: 'white' }}
      onClick={onClick}
    >
      Clear Messages
    </Button>
  )
}

ClearMessagesButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

const Ask = () => {
  const [messages, setMessages] = useState([
    {
      message: 'Hello, I am ChatABC!',
      sender: 'ChatGPT',
      sentTime: 'just now',
    },
  ])
 
  const [typing, setTyping] = useState(false)

  const handleSend = async (message:string) => {
    const newMessage = {
      message: message, //messae,
      direction: 'outgoing',
      sender: 'user',
    }

    const newMessages = [...messages, newMessage] //all the old message, + the new message

    //update our messages state
    setMessages(newMessages)

    //set a typing indictoer (chatgpt is typing)
    setTyping(true)

    //process message to chatGPT (send it over and see the response)
    await processMessageToChatGPT(newMessages)
  }

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    // chatMessages {sender: 'user' or 'ChatGPT', message: 'The message content here'}
    // apiMessages {role: 'user' or 'assistant', content: 'The message connect here'}

    let apiMessages = chatMessages.map((messageObject) => {
      let role = ''
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant'
      } else {
        role = 'user'
      }
      return { role: role, content: messageObject.message }
    })

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act.
    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT // [message1, message2, message3]
      ],
    }

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        console.log(data)
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: 'ChatGPT',
          },
        ])
        setTyping(false)
      })
  }

  const handleClearMessages = () => {
    setMessages([
      {
        message: 'Ask my question ?',
        sender: 'ChatGPT',
        sentTime: 'just now',
      },
    ])
  }

  return (
    <div     style={{
      margin: '1rem',
      marginBottom: '1rem',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{ position: 'relative', height: '700px', width: '700px' }}>
        <MainContainer  style={{
    
      borderRadius:'10px',
    }}>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                typing ? <TypingIndicator content="ChatGPT is typing" /> : null
              }
            >
              <div
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ClearMessagesButton onClick={handleClearMessages} />
              </div>
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>

            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Ask
