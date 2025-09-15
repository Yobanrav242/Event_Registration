import React, { useState } from "react";
import "../css/EventCard.css";

function EventCard({ event }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="event-card">
      <h2 className="event-title">{event.title}</h2>
      <p className="event-date">📅 {event.date}</p>

      <p className="event-details">
        {expanded ? event.details : `${event.details.substring(0, 120)}...`}
        <span
          className="read-more-link"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? " Show Less ▲" : " Read More ▼"}
        </span>
      </p>

      <div className="event-footer">
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
}

export default EventCard;
