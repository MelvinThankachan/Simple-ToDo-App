import { items } from "../App";
import Button from "./Button";

type ListItem = {
  item: items;
  handleDelete: (id: string) => void;
};

const ListItem = ({ item, handleDelete }: ListItem) => {
  return (
    <div className="d-flex justify-content-between">
      <li className="list-group-item" style={{ width: "100%" }}>
        {item.title}
      </li>
      <Button
        className="btn"
        type="button"
        onClick={() => handleDelete(item.id)}
      >
        <img src="/cancel-red.svg" alt="delete" />
      </Button>
    </div>
  );
};

export default ListItem;
