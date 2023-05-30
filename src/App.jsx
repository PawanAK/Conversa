import { useRef, useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState("");

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div className="container">
        <div className="app">
          <h1 className="app-name">Conversa</h1>
          <Auth setIsAuth={setIsAuth} />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="app">
        {room ? (
          <Chat room={room} />
        ) : (
          <div className="room">
            <label className="room-label">Enter Room Name</label>
            <input className="room-input" ref={roomInputRef} />
            <button
              className="enter-button"
              onClick={() => setRoom(roomInputRef.current.value)}>
              Enter Chat
            </button>
          </div>
        )}
        <div className="sign-out">
          <button className="sign-out-button" onClick={signUserOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
