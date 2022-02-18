import "./Button.css";

export default function Button({ name, color, onClickHandler }) {
  let className = "button ";
  if (color === "info") className += "button--info";
  if (color === "warning") className += "button--warning";

  return (
    <button className={className} onClick={onClickHandler}>
      {name}
    </button>
  );
}
