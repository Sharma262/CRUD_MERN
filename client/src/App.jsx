import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import FormModal from './components/FormModal';
import axios from 'axios';
import './App.css';

const API = 'http://localhost:5000';

const App = () => {
  const [phones, setPhones] = useState([]);
  const [editingPhone, setEditingPhone] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchPhones = async () => {
    try {
      const res = await axios.get(`${API}/get-phone`);
      setPhones(res.data);
    } catch (err) {
      console.error('Error fetching phones:', err);
    }
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  const handleAdd = async (phone) => {
    await axios.post(`${API}/add-phone`, phone);
    fetchPhones();
  };

  const handleUpdate = async (phone) => {
    await axios.patch(`${API}/update-phone/${phone._id}`, phone);
    fetchPhones();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/delete-phone/${id}`);
    fetchPhones();
  };

  return (
    <div className="app-container">
      <header>
        <h1>📱 Phone Book</h1>
        <button className="add-btn" onClick={() => {
          setEditingPhone(null);
          setModalOpen(true);
        }}>
          + Add Contact
        </button>
      </header>
      <Table
        items={phones}
        onEdit={(phone) => {
          setEditingPhone(phone);
          setModalOpen(true);
        }}
        onDelete={handleDelete}
      />
      {modalOpen && (
        <FormModal
          item={editingPhone}
          onClose={() => setModalOpen(false)}
          onSubmit={(phone) => {
            editingPhone ? handleUpdate(phone) : handleAdd(phone);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
