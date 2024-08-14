// client/src/App.js
import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem1, setNewItem1] = useState('');
  const [newItem2, setNewItem2] = useState('');
  const [newItem3, setNewItem3] = useState('');
  const [newItem4, setNewItem4] = useState('');
  const [newItem5, setNewItem5] = useState('');
  const [newItem6, setNewItem6] = useState('');
  const [newItem7, setNewItem7] = useState('');
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
      cmid: newItem1,
      cmname: newItem2,
      cmdob: newItem3,
      mstatus: newItem4,
      cmsalary: newItem5,
      email: newItem6,
      address : newItem7
    });
    setItems([...items, response.data]);
    setNewItem1(''); // Reset all fields after adding
    setNewItem2('');
    setNewItem3('');
    setNewItem4('');
    setNewItem5('');
    setNewItem6('');
    setNewItem7('');
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, {
      cmid: item.cmid,
      cmname: item.cmname,
      cmdob: item.cmdob,
      mstatus: item.mstatus,
      cmsalary: item.cmsalary,
      email: item.email,
      address: item.address
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
        placeholder="Enter mstatus"
      />
      <input
        type="text"
        value={newItem5}
        onChange={(e) => setNewItem5(e.target.value)}
        placeholder="Enter salary"
      />
      <input
        type="text"
        value={newItem6}
        onChange={(e) => setNewItem6(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        type="text"
        value={newItem7}
        onChange={(e) => setNewItem7(e.target.value)}
        placeholder="Enter address"
      />
      <button onClick={handleAddItem}>Add</button>

      <table>
        <thead>
          <tr>
            <th>cmid</th>
            <th>mname</th>
            <th>cmdob</th>
            <th>mstatus</th>
            <th>cmsalary</th>
            <th>email</th>
            <th>address</th>
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
                  value={item.cmid}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, cmid: e.target.value } : i
                    ))
                  }
                  placeholder="Enter ID"
                />
                </td>
                
                <td>
                <input
                  type="text"
                  value={item.cmname}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, cmname: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Name"
                />
                </td>
                <td>
                <input
                  type="text"
                  value={item.cmdob}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, cmdob: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Age"
                />
                </td>
                <td>
                <input
                  type="text"
                  value={item.mstatus}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, mstatus: e.target.value } : i
                    ))
                  }
                  placeholder="Enter "
                />
                </td>
                <td>
                <input
                  type="text"
                  value={item.cmsalary}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, cmsalary: e.target.value } : i
                    ))
                  }
                  placeholder="Enter salary"
                />
                </td>
                <td>
                <input
                  type="text"
                  value={item.email}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, email: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Email"
                />
                </td>
                <td>
                <input
                  type="text"
                  value={item.address}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, address: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Address"
                />
                </td>
                <td>
                    <button onClick={() => handleUpdateItem(item)}>Save</button>
                    <button onClick={() => setEditingItem(null)}>Cancel</button>
                  </td>
              </>
             
            ) : (
              <>
              <td>{item.cmid}</td>
              <td>{item.cmname}</td>
              <td>{item.cmdob}</td>
              <td>{item.mstatus}</td>
              <td>{item.cmsalary}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
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
