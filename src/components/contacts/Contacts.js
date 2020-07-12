import React from 'react';

const Contacts = ({ data, setData, setEdit, setEditData }) => {
  const handleEdit = (num) => {
    setEdit(true);
    setEditData(data.filter((el) => el.phoneNum === num));
    handleDelete(num);
  };
  const handleDelete = (num) => {
    const filteredArr = data.filter((el) => el.phoneNum !== num);
    setData(filteredArr);
    localStorage.setItem('contacts', JSON.stringify(filteredArr));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Date of birth</th>
          <th>Phone number</th>
          <th>E-mail</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.length !== 0 ? (
          data.map((contact) => (
            <tr key={contact.phoneNum}>
              <td className="cell">{contact.firstName}</td>
              <td className="cell">{contact.lastName}</td>
              <td className="cell">{contact.dateOfBirth}</td>
              <td className="cell">{contact.phoneNum}</td>
              <td className="cell">{contact.email}</td>
              <td className="cell">{contact.address}</td>
              <td>
                <i
                  className="far fa-edit"
                  onClick={() => handleEdit(contact.phoneNum)}
                ></i>
              </td>
              <td>
                <i
                  className="far fa-trash-alt"
                  onClick={() => handleDelete(contact.phoneNum)}
                ></i>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No contacts yet</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Contacts;
