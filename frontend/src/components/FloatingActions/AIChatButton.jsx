import "./FloatingActions.css";

const AIChatButton = () => {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-zidora-ai-chat"));
  };

  return (
    <button
      type="button"
      className="floating-ai"
      onClick={handleClick}
      aria-label="Open Zidora Growth AI assistant"
    >
      <span className="floating-ai__icon" aria-hidden="true">
        ✦
      </span>

      <span className="floating-ai__text">
        Ask Zidora AI
      </span>
    </button>
  );
};

export default AIChatButton;
