import "./App.css";
import Header from "./components/Header";
import BankForm from "./components/BankForm";
import { useState, useEffect } from "react";
import { read, create, destroy, edit } from "./components/localStorage";
import BankList from "./components/BankList";
import Message from "./components/Message";
import Filter from "./components/Filter";

function App() {
  const [personDetails, setPersonDetails] = useState(null);
  const [clientsList, setClientsList] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [deleteList, setDeleteList] = useState(null);
  const [editData, setEditData] = useState(null);
  const [message, setMessage] = useState(null);

  console.log(deleteList);

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
    if (deleteList.sum > 0) {
      setMessage("Cannot delete bill");
      setInterval(() => {
        setMessage(null);
      }, 2000);
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
        <Filter />
        <BankList
          clientsList={clientsList}
          setDeleteList={setDeleteList}
          setClientsList={setClientsList}
          setEditData={setEditData}
          setMessage={setMessage}
        />
        {message ? <Message message={message}></Message> : null}
      </div>
    </div>
  );
}

export default App;
