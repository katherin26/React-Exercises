import React, { useState, useEffect } from "react";

export default function App(props) {
  const [count, setCount] = useState(props.initialCount);
  console.log(props, `this is props`);

  //similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    //Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

/*NOTE: Example with hooks and props.
1. useState works like a bridge between the Dom and the logic, 
and this hook is in charge about the state in the variable in this case
is : setCount and we can see it in the browser with the new count.

2. In this case useState change the initialCount depending on what is set 
 in the component  <App initialCount={5} /> : this is gonna start with 5 
 and in case we have another <App/> component we can set a new number and 
 is completely independent from each other. */
