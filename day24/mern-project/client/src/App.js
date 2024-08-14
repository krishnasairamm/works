// client/src/App.js
import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem({ name: newItem });
    setItems([...items, response.data]);
    setNewItem('');
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, { name: item.name });
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {editingItem === item._id ? (
              <input
                type="text"
                value={item.name}
                onChange={(e) =>
                  setItems(items.map((i) => (i._id === item._id ? { ...i, name: e.target.value } : i)))
                }
              />
            ) : (
              <span>{item.name}</span>
            )}
            {editingItem === item._id ? (
              <button onClick={() => handleUpdateItem(item)}>Save</button>
            ) : (
              <button onClick={() => setEditingItem(item._id)}>Edit</button>
            )}
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;