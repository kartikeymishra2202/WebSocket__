import { useEffect, useRef, useState } from "react";
import "./index.css";

function App() {
  const [ws, setWs] = useState();
  const inputRef = useRef();

  function sendMessage() {
    if (!ws) return;
    const message = inputRef.current.value;
    ws.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setWs(ws);
    //methods available on ws object->
    // ws.onerror=()=>{

    // }
    // ws.close=()=>{

    // }
    // ws.onopen=()=>{

    // }
    ws.onmessage = (ev) => {
      alert(ev.data);
    };
  }, []);

  return (
    <>
      <div>
        <div>
          <div className="flex justify-center p-3 gap-4">
            <input
              ref={inputRef}
              type="text"
              placeholder="Message"
              className="border  outline-cyan-950 rounded-xl shadow-md text-center"
            />

            <button
              onClick={sendMessage}
              className="text-black border shadow-md p-3 bg-orange-300 rounded-2xl"
            >
              Send
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default App;
