import "./App.css";
import axios from "axios"; //llamar un api.
import React, { useEffect, useState } from "react";

/* defining a function to fetch orders from backend, so define this async function and set the name to
fetch orders inside that call axios.get list orders  and then set orders 
 */

function App() {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(false);
  const [orders, setOrders] = useState([]);

  return <div className="App"></div>;
}

export default App;
