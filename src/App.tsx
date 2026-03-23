import "./App.css";
import ChatBot from "./components/ChatBot";
import LeftSidebar from "./components/LeftSidebar";
import RightContainer from "./components/RightContainer";

function App() {
  return (
    <>
      <div className="main-container">
        <LeftSidebar />
        <RightContainer />
      </div>
      <ChatBot />
    </>
  );
}

export default App;
