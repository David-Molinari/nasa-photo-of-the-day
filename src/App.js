import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import "./App.css";
import Section from "./components/Section"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([]);

  // const Div = styled.div`
  //   margin: 2%;
  //   border: 2px solid black;
  // `;

  console.log(data);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get("https://swapi.co/api/people/")
      // Which we then set to state
      .then(res => setData(res.data.results))
      // Always include error handling
      .catch(err => console.log(err));
  }, []);


  return (
    <div className="App">
      <h1 className="Header">Nasa Photo of the Day</h1>
      {data.map(element => {
        return < Section name = {element.name} height = {element.height} mass = {element.mass} hair_color = {element.hair_color}/>})}
    </div>
  );
}

export default App;
