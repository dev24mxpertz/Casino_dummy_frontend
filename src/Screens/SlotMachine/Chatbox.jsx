import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

function Chatbox() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const
     chatContainerRef = useRef(null);
    const ws = useRef(null);
    const user = useSelector((state) => state.auth.user);
    console.log(user)
    useEffect(() => {
        ws.current = new WebSocket('wss://casino-backend-01ek.onrender.com');

        ws.current.onopen = () => {
            console.log('WebSocket connection established');
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'init') {
                setMessages(data.messages);
            } else if (data.type === 'message') {
                setMessages(prevMessages => [...prevMessages, data.message]);
            }
        };

        return () => {
            ws.current.close();
        };
    }, []);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (inputMessage.trim() !== "") {
            const newMessage = {
                sender: user.Email,
                content: inputMessage,
                timestamp: new Date()
            };
            ws.current.send(JSON.stringify(newMessage));
            setInputMessage("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <>
            <div className="chatbox">
                <div style={{ overflow: 'scroll', scrollbarWidth: 'none' }} ref={chatContainerRef}>
                    {messages.map((message, index) => (
                        <div key={index} className="chatbox-message-container">
                            <div className="chatbox-sender">{message.sender}</div>
                            <div className="chatbox-content">{message.content}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <input
                        className="chatbox-input-message"
                        type="text"
                        placeholder="Type your messages here"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="chatbox-send-button" onClick={handleSendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </>
    );
}

export default Chatbox;
