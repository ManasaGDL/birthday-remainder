
import './App.css';
import List from "./List"
import React,{useState} from "react";
import data from './data';
function App() {
const [people,setPeople]=useState(data);
  return (
   <main>
     <section className="container">
       <h3>{people.length} birthdays today</h3>
       <List list={people}/>
       <button onClick={()=>setPeople([])}>Clear All</button>
     </section>
   </main>
  );
}

export default App;
