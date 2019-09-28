import React, { useState } from 'react';
import EventList from './EventList';

export function SearchBar(props){

  const[input, setInput] = useState("");

  function onlySetNumbers(event){
    let baseValue = event.target.value;
    let replacedVal = baseValue.replace(/\D*/g, '')
    console.log(`baseValue: ${baseValue}, replacedVal: ${replacedVal}`);
    setInput(replacedVal)
  }

  function onSubmit(event){
    event.preventDefault();
    props.updateZip(input)
  }

  var eventlist = [];
  console.log(props)
  if (props.locFilt !== null || props.nearby !== null) {
    eventlist = (<EventList events={props.events} locFilt={props.locFilt} updatedHover={(item) => props.updatedHover(item)}/>)
  }

  return(
    <div className={(props.locFilt !== null || props.nearby !== null) ? "searchBar activeList" : "searchBar"}>
      <form onSubmit= {onSubmit} id = "zipForm">
        <input type="text" id="zipInput" value={input} onChange={onlySetNumbers} placeholder="ZIP" required minLength="5" maxLength="5"></input>
      </form>
      { eventlist }
    </div>
  );
}

export default SearchBar;
