import { ScrollLimiter } from "./scroll-limiter";
import "./styles.css";

const items: { key: string; text: string }[] = [];

for (let i = 0; i < 1000; i++) {
  items.push({ key: i.toString(), text: "Hello World" });
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ScrollLimiter>
        {items.map((item) => (
          <div key={item.key}>{item.text}</div>
        ))}
      </ScrollLimiter>
    </div>
  );
}
