import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";

const App = () => {
  //items = The data to be fetched
  const [items, setItems] = useState([]);

  const [isLoading, setisLoading] = useState(true);

  //useEffect = To make request
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      )
      console.log(result.data); //data = What we get from this endpoint
      setItems(result.data);
      setisLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <CharacterGrid  isLoading={isLoading} items={items} /> 
      {/* passed as props */}
    </div>
  );
};

export default App;
