// jshint esversion:6
import React from "react";
import roleModels from "../contacts.js";



function Card(props)
{
  return <div>
      <div className="card">

      <div className="top">
        <h2>{props.name}</h2>
        <img className="circle-img"
          src={props.imgURL}
          alt="avatar_img"
        />
      </div>

      <div className="bottom">
        <p>{props.ability}</p>
      </div>
    </div>

  </div>

}

function App() {
  return (
    <div>
      <h1 className="heading">My Best Buddies!</h1>
    <Card name={roleModels[0].name} ability={roleModels[0].ability} imgURL={roleModels[0].imgURL}  />
    <Card name={roleModels[1].name} ability={roleModels[1].ability} imgURL={roleModels[1].imgURL}/>
    <Card name={roleModels[2].name} ability={roleModels[2].ability} imgURL={roleModels[2].imgURL} />

    </div>

  );
}

export default App;
