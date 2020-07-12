import React, { useState, useEffect } from 'react';

import Contacts from './components/contacts/Contacts';
import Form from './components/form/Form';
import Edit from './components/form/Edit';

import './App.css';

function App() {
  const [addNewContact, setAddNewContact] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('contacts')) {
      localStorage.setItem('contacts', []);
    } else {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);

  const showContacts = () => {
    setAddNewContact(false);
  };

  const showAddForm = () => {
    setAddNewContact(true);
    setEdit(false);
  };

  return (
    <div className="App">
      <h1>
        <span onClick={showContacts}>Contacts</span>
        <span onClick={showAddForm}>+</span>
      </h1>
      {addNewContact ? (
        <Form
          showForm={setAddNewContact}
          contacts={contacts}
          setContacts={setContacts}
        />
      ) : edit ? (
        <Edit
          showForm={setEdit}
          editData={editData}
          contacts={contacts}
          setContacts={setContacts}
        />
      ) : (
        <Contacts
          data={contacts}
          setData={setContacts}
          setEdit={setEdit}
          setEditData={setEditData}
        />
      )}
    </div>
  );
}

export default App;
