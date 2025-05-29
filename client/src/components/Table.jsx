import React from "react";
import "./Table.css";

const Table = ({ items, onEdit, onDelete }) => {
  console.log(items,'this is item')
  return (
    <table className="item-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>
              <button className="edit-btn" onClick={() => onEdit(item)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => onDelete(item._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
