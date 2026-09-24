 "use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

const quickPrompts = [
  "What are the top performing regions?",
  "Explain the biggest sales trend.",
  "What should I investigate next?",
];

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "I’m connected to the Sales Intelligence portal. Ask a question about the dashboard, trends, regions, or performance.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setMessages((current) => [...current, { role: "user", text: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await response.json();

      setMessages((current) => [
        ...current,
        {
          role: "ai",
          text:
            data.answer ||
            "I received the request. Connect your existing AI backend in app/api/chat/route.ts to enable live analysis.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "ai",
          text: "The chat service is not connected yet. Add your existing AI endpoint in app/api/chat/route.ts.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.text}
          </div>
        ))}
        {loading && <div className="message ai">Analyzing…</div>}
      </div>

      <div className="chat-input">
        <form onSubmit={submit} className="chat-input-row">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about your sales data…"
            aria-label="Ask the AI assistant"
          />
          <button className="send" type="submit" disabled={loading}>
            Send
          </button>
        </form>

        <div className="quick-actions">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              className="quick-action"
              type="button"
              onClick={() => sendMessage(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      <div className="note">
        Your existing AI integration can replace the demo API handler without changing the dashboard layout.
      </div>
    </>
  );
}