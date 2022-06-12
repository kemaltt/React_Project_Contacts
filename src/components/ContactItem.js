import React from "react";

export default function ContactItem({
  i,
  img,
  name,
  popularity,
  deleteContact,
}) {
  return (
    <div className="contact_item">
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>{popularity}</p>
      <button id={i} onClick={(e) => deleteContact(e.target.id)}>
        Delete
      </button>
    </div>
  );
}
