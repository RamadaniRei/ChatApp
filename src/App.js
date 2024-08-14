import { ChatEngine } from "react-chat-engine";
import "./App.css";
import "dotenv/config";

console.log(process.env.REACT_APP_PROJECT_ID);

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={process.env.REACT_APP_PROJECT_ID}
        userName={process.env.REACT_APP_USERNAME}
        userSecret={process.env.REACT_APP_SECRET}
      />
    </div>
  );
}

export default App;
