import "./App.css";
import Header from "./components/Header";
import BankForm from "./components/BankForm";
import { useState, useEffect } from "react";
import { read, create } from "./components/localStorage";
import BankList from "./components/BankList";

function App() {
  const [personDetails, setPersonDetails] = useState(null);
  const [clientsList, setClientsList] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const KEY = "LSSAVE";

  useEffect(() => {
    setClientsList(read(KEY));
  }, [lastUpdate]);

  useEffect(() => {
    if (personDetails === null) {
      return;
    }
    create(KEY, personDetails);
    setLastUpdate(Date.now());
  }, [personDetails]);

  console.log(personDetails);
  console.log(clientsList);
  return (
    <div className="app-container">
      <div className="content">
        <Header />
        <BankForm setPersonDetails={setPersonDetails} />

        <BankList clientsList={clientsList} />
      </div>
    </div>
  );
}

export default App;
