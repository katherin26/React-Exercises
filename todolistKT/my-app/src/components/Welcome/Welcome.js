import "./Welcome.css";

export default function Welcome(props) {
  return (
    <h1 className="welcome">
      Welcome {props.name} {props.lastName}
    </h1>
  );
}
