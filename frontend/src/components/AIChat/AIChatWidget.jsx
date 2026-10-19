import { useEffect, useRef, useState } from "react";
import api from "../../services/api.js";
import "./AIChatWidget.css";

const WELCOME_MESSAGE = {
  role: "assistant",
  content:
    "Hello! I'm Ask Zidora AI. I can help you explore our digital marketing, website solutions, AI automation, and technology coaching services. What would you like help with?",
};

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const openChat = () => {
      setIsOpen(true);
      setError("");
    };

    window.addEventListener("open-zidora-ai-chat", openChat);

    return () => {
      window.removeEventListener("open-zidora-ai-chat", openChat);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isSending]);

  const handleClose = () => {
    setIsOpen(false);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userMessage = message.trim();

    if (!userMessage || isSending) {
      return;
    }

    if (userMessage.length > 2000) {
      setError("Please keep your message under 2,000 characters.");
      return;
    }

    setMessage("");
    setError("");
    setIsSending(true);

    setMessages((current) => [
      ...current,
      { role: "user", content: userMessage },
    ]);

    try {
      const response = await api.post("/ai/chat", {
        message: userMessage,
      });

      const answer = response?.data?.answer;

      if (!response?.success || typeof answer !== "string" || !answer.trim()) {
        throw new Error("We couldn't get a response. Please try again.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: answer.trim() },
      ]);
    } catch (requestError) {
      setError(
        requestError.message ||
          "The assistant is temporarily unavailable. Please try again."
      );
    } finally {
      setIsSending(false);
      inputRef.current?.focus();
    }
  };

  return (
    <>
      {isOpen && (
        <section
          className="ai-chat"
          role="dialog"
          aria-modal="false"
          aria-labelledby="ai-chat-title"
        >
          <header className="ai-chat__header">
            <div className="ai-chat__brand">
              <span className="ai-chat__brand-icon" aria-hidden="true">
                ✦
              </span>

              <div>
                <h2 id="ai-chat-title">Ask Zidora AI</h2>
                <p>Your Zidora Growth assistant</p>
              </div>
            </div>

            <button
              type="button"
              className="ai-chat__close"
              onClick={handleClose}
              aria-label="Close Ask Zidora AI"
            >
              ×
            </button>
          </header>

          <div
            className="ai-chat__messages"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.map((item, index) => (
              <div
                className={`ai-chat__message ai-chat__message--${item.role}`}
                key={`${item.role}-${index}`}
              >
                <p>{item.content}</p>
              </div>
            ))}

            {isSending && (
              <div className="ai-chat__message ai-chat__message--assistant">
                <p className="ai-chat__typing">Zidora AI is thinking…</p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {error && (
            <p className="ai-chat__error" role="alert">
              {error}
            </p>
          )}

          <form className="ai-chat__form" onSubmit={handleSubmit}>
            <label className="ai-chat__sr-only" htmlFor="ai-chat-input">
              Your message
            </label>

            <textarea
              id="ai-chat-input"
              ref={inputRef}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask us anything..."
              rows={2}
              maxLength={2000}
              disabled={isSending}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" &&
                  !event.shiftKey &&
                  !event.nativeEvent.isComposing
                ) {
                  event.preventDefault();
                  event.currentTarget.form?.requestSubmit();
                }
              }}
            />

            <button
              type="submit"
              className="ai-chat__send"
              disabled={isSending || !message.trim()}
              aria-label="Send message"
            >
              {isSending ? "…" : "Send"}
            </button>
          </form>

          <p className="ai-chat__disclaimer">
            AI responses may not always be accurate. Please don't share
            passwords or sensitive personal information.
          </p>
        </section>
      )}
    </>
  );
};

export default AIChatWidget;
