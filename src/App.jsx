import { useState } from "react";
import Form from "./Form";

import { nanoid } from "nanoid";
import DisplayItems from "./DisplayItems";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list") || [])
  );

  const addItem = (itemName) => {
    const newItems = [
      ...items,
      {
        name: itemName,
        completed: false,
        id: nanoid(),
      },
    ];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item added to the list");
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item removed from the list");
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      // console.log(item);
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <DisplayItems items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
