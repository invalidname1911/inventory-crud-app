import { useState } from "react";

const Inventory = () => {
  const [inventoryItem, setInventoryItem] = useState([]);
  const addInventoryItem = () => {
    const newInventory = {
      id: Date.now(),
      text: "newText",
    };
    setInventoryItem([...inventoryItem, newInventory]);
  };
  const deleteInventoryItem = (id) => {
    setInventoryItem(inventoryItem.filter((item) => 
      item.id !== id
    ));
  };

  return (
    <>
      <ul>
        {inventoryItem.map((item) => (
          <div>
            <li key={item.id}>{item.text}</li>
            <button
              onClick={() => {
                deleteInventoryItem(item.id);
              }}
            >
              delete
            </button>
          </div>
        ))}
      </ul>
      <button onClick={addInventoryItem}>add</button>
    </>
  );
};
export default Inventory;
