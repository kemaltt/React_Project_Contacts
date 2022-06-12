import React, { useState } from "react";
import ContactItem from "./ContactItem";
import data from "../data";

export default function Contacts() {
  const [contacts, setContacts] = useState(data.slice(0, 5));

  const randomAddContact = () => {
    let random = Math.floor(Math.random() * data.length);

    setContacts([...contacts, data[random]]);
  };

  const sortByName = () => {
    setContacts([...contacts.sort((a, b) => a.name.localeCompare(b.name))]);
  };

  const sortByPopularity = () => {
    setContacts([...contacts.sort((a, b) => b.popularity - a.popularity)]);
  };

  const deleteContact = (e) => {
    setContacts([...contacts.filter((contact, i) => i != Number(e))]);
  };

  return (
    <div className="contacts_container">
      <div className="btn_container">
        <button onClick={randomAddContact}>Add Rondam Contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>
      <div className="title">
        <h2>Picture</h2>
        <h2>Name</h2>
        <h2>Popularity</h2>
        <h2>Delete</h2>
      </div>

      {contacts.map((el, i) => (
        <ContactItem
          key={i}
          i={i}
          img={el.pictureUrl}
          name={el.name}
          popularity={el.popularity.toFixed(2)}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
}
