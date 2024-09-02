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
  const [itemsList, setItemsList] = useState<string[]>([]);
  const [length, setLength] = useState(0);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    let currentValue = inputValue.trim();
    if (currentValue !== "" && !itemsList.includes(currentValue)) {
      setItems((prevItems) => [
        ...prevItems,
        { title: currentValue, id: crypto.randomUUID() },
      ]);
      setItemsList((prevItems) => [...prevItems, currentValue]);
      setLength(length + 1);
      setInputValue("");
    }
  };


  return (
    <div
      style={{ width: "500px" }}
      className="d-flex align-items-start flex-column mx-auto"
    >
      <h1 className="mx-auto">Todo</h1>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      ></Form>
      {/* <p>{length}</p> */}
      <List
        items={items}
        setItems={setItems}
        setItemsList={setItemsList}
        setLength={setLength}
        length={length}
      ></List>
    </div>
  );
};

export default App;
