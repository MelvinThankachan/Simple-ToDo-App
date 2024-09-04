import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

export type items = {
  title: string;
  id: string;
};

const App = () => {
  const [items, setItems] = useState<items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    let currentValue = inputValue.trim();
    if (currentValue !== "") {
      setItems((prevItems) => [
        ...prevItems,
        { title: currentValue, id: crypto.randomUUID() },
      ]);
      setInputValue("");
    }
  };

  let itemsLength = items.length;

  return (
    <div
      style={{ width: "500px", height: "100%"}}
      className="d-flex align-items-start flex-column mt-5 mx-auto my-auto"
    >
      <h1 className="mx-auto">Todo</h1>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      ></Form>
      <p className="mx-auto">Task Remainig: {itemsLength}</p>
      <List items={items} setItems={setItems} length={length}></List>
    </div>
  );
};

export default App;
