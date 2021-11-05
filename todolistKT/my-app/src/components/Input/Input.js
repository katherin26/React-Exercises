import "./Input.css";

export default function Input(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type="text"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChangeHandler}
      ></input>
    </div>
  );
}
