import "./App.css";
import Header from "./components/Header";
import BankForm from "./components/BankForm";
import { useState, useEffect } from "react";
import { read, create, destroy, edit } from "./components/localStorage";
import BankList from "./components/BankList";

function App() {
  const [personDetails, setPersonDetails] = useState(null);
  const [clientsList, setClientsList] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [deleteList, setDeleteList] = useState(null);
  const [editData, setEditData] = useState(null);

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

  useEffect(() => {
    if (deleteList === null) {
      return;
    }
    destroy(KEY, deleteList.id);
    setLastUpdate(Date.now());
  }, [deleteList]);

  useEffect(() => {
    if (editData === null) {
      return;
    }
    edit(KEY, editData, editData.id);
    setLastUpdate(Date.now());
  }, [editData]);

  return (
    <div className="app-container">
      <div className="content">
        <Header clientsList={clientsList} />
        <BankForm setPersonDetails={setPersonDetails} />
        <BankList
          clientsList={clientsList}
          setDeleteList={setDeleteList}
          setClientsList={setClientsList}
          setEditData={setEditData}
        />
      </div>
    </div>
  );
}

export default App;
