import { items } from "../App";
import ListItem from "./ListItem";

type ListProps = {
  items: items[];
  setItems: React.Dispatch<React.SetStateAction<items[]>>;
  length: number;
};

const List = ({ items, setItems }: ListProps) => {
  const handleDelete = (id: string) => {
    console.log("Delete");
    setItems((prevItems) => prevItems.filter((data) => data.id !== id));
  };

  return (
    <ul style={{ width: "100%", maxHeight: "50vh", overflowY: "auto" }} className="list-group">
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
