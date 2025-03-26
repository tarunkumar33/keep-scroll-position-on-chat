import "./styles.css";
import useMessages from "./useMessages";
import useKeepScrollPosition from "./useKeepScrollPosition";

export default function App() {
  const { messages, setLastMessageRef } = useMessages();
  const { containerRef } = useKeepScrollPosition([messages]);

  return (
    <div className="App">
      <h1>Keep Scroll Positon On Chat Re-render</h1>
      <div className="chat" ref={containerRef}>
        {messages.map((m, i) => (
          <div
            key={m.id}
            className={`message ${m.in ? "message--in" : "message--out"}`}
          >
            <div ref={(ref) => (i === 0 ? setLastMessageRef(ref) : null)}>
              {m.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
