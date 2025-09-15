import React, { useState } from "react";
import Technical from "./Technical";
import NonTechnical from "./NonTechnical";
import "../css/Events.css";

function Events() {
  const [category, setCategory] = useState("technical");

  return (
    <div className="events-section">
      <div className="event-tabs">
        <button 
          className={category === "technical" ? "active" : ""} 
          onClick={() => setCategory("technical")}
        >
          Technical Events
        </button>
        <button 
          className={category === "nontechnical" ? "active" : ""} 
          onClick={() => setCategory("nontechnical")}
        >
          Non-Technical Events
        </button>
      </div>

      <div className="event-list">
        {category === "technical" ? <Technical /> : <NonTechnical />}
      </div>
    </div>
  );
}

export default Events;
