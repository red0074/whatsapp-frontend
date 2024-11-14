import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "./axios";
function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);
  useEffect(() => {
    const pusher = new Pusher("7db3f04ba09f612cbcbd", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      // alert(JSON.stringify(data));
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  // console.log(messages);
  return (
    <>
      <div className="app">
        <div className="app__body">
          {/* sidebar */}
          <Sidebar />
          {/* chat  */}
          <Chat messages={messages} />
        </div>
      </div>
    </>
  );
}

export default App;
