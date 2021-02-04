import React, { useState } from 'react';
import firebase from '../../firebase.js';


const ContactMeComponent = () => { 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.prevent.default();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapShots: true
    });
    const contactMessage = db.collection("contact")
    .add({
      name : name,
      email : email,
      message : message
    })
    .then(() => {
      alert("Message has been sent.")
    })
    .catch((error) => {
      alert(error.message);
    });

    setName("");
    setEmail("");
    setMessage("")
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="e.g. John Smith" value={name} 
        onChange={(event) => setName(event.target.value)} required />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="e.g. J.Smith@gmail.com" value={email} 
        onChange={(event) => setEmail(event.target.value)} required />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} 
        onChange={(event) => setMessage(event.target.value)} required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactMeComponent;