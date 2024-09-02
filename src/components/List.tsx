import { items } from "../App";
import ListItem from "./ListItem";

type ListProps = {
  items: items[];
  setItems: React.Dispatch<React.SetStateAction<items[]>>;
  setItemsList: React.Dispatch<React.SetStateAction<string[]>>;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  length: number;
};

const List = ({ items, setItems, setLength, length }: ListProps) => {
  const handleDelete = (id: string) => {
    console.log("Delete");
    setItems((prevItems) => prevItems.filter((data) => data.id !== id));
    // setItemsList((prevList) => prevList.filter())
    setLength(length - 1);
  };

  return (
    <ul style={{ width: "100%" }} className="list-group">
      {items.map((item) => (
        <ListItem
          handleDelete={handleDelete}
          key={item.id}
          item={item}
        ></ListItem>
      ))}
    </ul>
  );
};

export default List;
