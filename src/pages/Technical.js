import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Make sure firebase.js exports db
import EventCard from "./EventCard"; // Component to display each event
import '../css/Technical.css'

function Technical() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "technical_events"));
        
        if (querySnapshot.empty) {
          console.log("No documents found in 'technical_events' collection!");
        } else {
          const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("Fetched data:", data);
          setEvents(data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  return (
    <div className="event-grid">
      {events.length > 0 ? (
        events.map(event => <EventCard key={event.id} event={event} />)
      ) : (
        <p>No technical events available.</p>
      )}
    </div>
  );
}

export default Technical;
