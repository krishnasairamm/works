import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

//import logo from './logo.svg';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem1, setNewItem1] = useState('');
  const [newItem2, setNewItem2] = useState('');
  const [newItem3, setNewItem3] = useState('');
  const [newItem4, setNewItem4] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem({
      e_id: newItem1,
      e_name: newItem2,
      e_age: newItem3,
      e_email: newItem4
    });
    setItems([...items, response.data]);
    setNewItem1(''); // Reset all fields after adding
    setNewItem2('');
    setNewItem3('');
    setNewItem4('');
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, {
      e_id: item.e_id,
      e_name: item.e_name,
      e_age: item.e_age,
      e_email: item.e_email
    });
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
        value={newItem1}
        onChange={(e) => setNewItem1(e.target.value)}
        placeholder="Enter ID"
      />
      <input
        type="text"
        value={newItem2}
        onChange={(e) => setNewItem2(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        type="text"
        value={newItem3}
        onChange={(e) => setNewItem3(e.target.value)}
        placeholder="Enter Age"
      />
      <input
        type="text"
        value={newItem4}
        onChange={(e) => setNewItem4(e.target.value)}
        placeholder="Enter Email"
      />
      <button onClick={handleAddItem}>Add</button>

      <table>
        <thead>
          <tr>
            <th>Employee_id</th>
            <th>Employee_name</th>
            <th>Employee_age</th>
            <th>Employee_mail</th>
            <th>Action</th>
          </tr>
        </thead>
       

      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            {editingItem === item._id ? (
              <>
              <td>
              <input
                  type="text"
                  value={item.e_id}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, e_id: e.target.value } : i
                    ))
                  }
                  placeholder="Enter ID"
                />
                </td>
                
                <td>
                <input
                  type="text"
                  value={item.e_name}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, e_name: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Name"
                />
                </td>
                <td>
                <input
                  type="text"
                  value={item.e_age}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, e_age: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Age"
                />
                </td>
                <td>
                <input
                  type="text"
                  value={item.e_email}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, e_email: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Email"
                />
                </td>
                <td>
                    <button onClick={() => handleUpdateItem(item)}>Save</button>
                    <button onClick={() => setEditingItem(null)}>Cancel</button>
                  </td>
              </>
             
            ) : (
              <>
              <td>{item.e_id}</td>
              <td>{item.e_name}</td>
              <td>{item.e_age}</td>
              <td>{item.e_email}</td>
              <td>
                    <button onClick={() => setEditingItem(item._id)} class="material-symbols-outlined edit">Edit</button>
                    <button onClick={() => handleDeleteItem(item._id)} class="material-symbols-outlined delete">Delete</button>
                  </td>
              </>
            )}
            
          </tr>
        ))}
       </tbody>
       </table>
    </div>
  );
};

export default App;
