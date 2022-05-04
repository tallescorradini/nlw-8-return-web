import { ChatTeardropDots } from "phosphor-react";
import { Widget } from "./components";

function App() {
  return (
    <>
      <Widget button={{ icon: <ChatTeardropDots />, text: "Feedback" }} />
    </>
  );
}

export default App;
