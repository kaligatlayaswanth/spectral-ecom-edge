import { useState, useRef, useEffect } from "react";

// Unique smart chatbot icon SVG (robot with neon/circuit theme)
const ChatbotSVG = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00FFF0" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#007CF0" stopOpacity="0.1" />
      </radialGradient>
    </defs>
    <circle cx="24" cy="24" r="22" fill="url(#glow)" />
    <rect x="12" y="16" width="24" height="16" rx="8" fill="#101C2C" stroke="#00FFF0" strokeWidth="2.5" />
    <ellipse cx="18.5" cy="24" rx="2.5" ry="3" fill="#00FFF0" />
    <ellipse cx="29.5" cy="24" rx="2.5" ry="3" fill="#00FFF0" />
    <rect x="20" y="28" width="8" height="2" rx="1" fill="#00FFF0" opacity="0.7" />
    <rect x="22" y="12" width="4" height="6" rx="2" fill="#00FFF0" opacity="0.7" />
    <circle cx="24" cy="10" r="2" fill="#00FFF0" />
    {/* Circuit lines */}
    <path d="M12 24H6" stroke="#00FFF0" strokeWidth="2" strokeLinecap="round" />
    <path d="M42 24H36" stroke="#00FFF0" strokeWidth="2" strokeLinecap="round" />
    <circle cx="6" cy="24" r="1.5" fill="#00FFF0" />
    <circle cx="42" cy="24" r="1.5" fill="#00FFF0" />
  </svg>
);

const WEBHOOK_URL = "https://gajala.app.n8n.cloud/webhook/product-chat";

const SmartChatbotIcon = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your smart assistant. How can I help you with IoT products today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
      });
      let botText;
      if (!res.ok) {
        botText = `❌ Error: Server responded with status ${res.status}`;
      } else {
        const text = await res.text();
        if (text) {
          try {
            const data = JSON.parse(text);
            botText = data?.output || "❌ No response from server.";
          } catch {
            botText = text;
          }
        } else {
          botText = "❌ No response from server.";
        }
      }
      setMessages((msgs) => [...msgs, { from: "bot", text: botText }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { from: "bot", text: `❌ Error: ${err.message || err}` }]);
    }
    setLoading(false);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      handleSend();
    }
  };

  return (
    <>
      {/* Call-to-action label above the icon */}
      {!open && (
        <div className="fixed z-50 bottom-24 right-8 bg-white text-black font-semibold px-4 py-2 rounded-full shadow-lg border border-cyan-200 text-sm animate-bounce flex items-center gap-2 select-none">
          <span>💬 Need help? Ask S-IoT SmartBot!</span>
        </div>
      )}
      <button
        className="fixed z-50 bottom-6 right-6 shadow-2xl rounded-full p-0.5 bg-gradient-to-br from-cyan-400 via-blue-600 to-blue-900 hover:scale-105 transition-transform duration-200 focus:outline-none"
        style={{ boxShadow: "0 0 24px 6px #00FFF088" }}
        aria-label="Open Smart Chatbot"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="block bg-black rounded-full p-2">
          <ChatbotSVG />
        </span>
      </button>
      {/* Chat popup */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[90vw] bg-black/90 border border-cyan-400 rounded-2xl shadow-2xl p-6 z-50 animate-fade-in flex flex-col h-[32rem]">
          <div className="flex items-center mb-4">
            <ChatbotSVG />
            <span className="ml-3 text-cyan-300 font-bold text-lg">S-IoT SmartBot</span>
            <button className="ml-auto text-cyan-400 hover:text-white" onClick={() => setOpen(false)}>&#10005;</button>
          </div>
          <div className="flex-1 overflow-y-auto mb-2 bg-black/30 rounded p-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-2 rounded-lg max-w-[80%] text-sm ${msg.from === "user" ? "bg-cyan-600 text-white" : "bg-cyan-900/60 text-cyan-100"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="mb-2 flex justify-start">
                <div className="px-4 py-2 rounded-lg bg-cyan-900/60 text-cyan-100 text-sm opacity-70">Thinking...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="mt-4 flex justify-center">
          <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
            placeholder="Type your message..."
              className="w-full p-2 rounded-lg bg-cyan-900/60 text-cyan-100 border border-cyan-400 focus:outline-none focus:border-cyan-600"
          />
          </div>
        </div>
      )}
    </>
  );
};

export default SmartChatbotIcon; 