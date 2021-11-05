import "./TodoList.css";
import Button from "../Button/Button";

export default function TodoList(props) {
  return (
    <ol>
      {props.items.map((item, index) => (
        <li key={index}>
          {item.description} ({item.status})
          {item.status !== "Done" && (
            <Button
              name="Done"
              color="info"
              onClickHandler={() => props.onDoneHandler(index)}
            />
          )}
          <Button
            name="Remove"
            color="Warning"
            onClickHandler={() => props.onDoneHandler(index)}
          />
        </li>
      ))}
    </ol>
  );
}
