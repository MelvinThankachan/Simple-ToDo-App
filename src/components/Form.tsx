import Button from "./Button";

type FormProps = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event: React.FormEvent) => void;
};

const Form = ({ inputValue, setInputValue, handleSubmit }: FormProps) => {
  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Task"
        aria-label="Task"
        aria-describedby="button-addon2"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button onClick={() => {}} className="btn btn-primary" type="submit">
        Add to list
      </Button>
    </form>
  );
};

export default Form;
