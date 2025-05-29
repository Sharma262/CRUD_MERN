import React, { useState, useEffect } from 'react';
import './FormModal.css';

const FormModal = ({ item, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (item) {
      setName(item.name);
      setPhone(item.phone);
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...item, name, phone };
    onSubmit(newItem);
  };

  return (
    <div className="modal-backdrop">
      <form className="modal-form" onSubmit={handleSubmit}>
        <h2>{item ? 'Edit Contact' : 'Add Contact'}</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">{item ? 'Update' : 'Add'}</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default FormModal;
