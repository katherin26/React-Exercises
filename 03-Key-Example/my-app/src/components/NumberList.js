import ListItem from "./ListItem";

export default function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
      <ListItem key={number.toString()} value={number}/>
  ));
  return <ul>{listItems}</ul>
}
