import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/Header";
import BankForm from "./components/BankForm";

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <Header />
        <BankForm />
      </div>
    </div>
  );
}

export default App;
