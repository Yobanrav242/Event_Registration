import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Make sure firebase.js exports db
import EventCard from "./EventCard"; // Component to display each event
import '../css/NonTechnical.css'; // Assuming different CSS file for NonTechnical

function NonTechnical() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "nontechnical_events"));
        
        if (querySnapshot.empty) {
          console.log("No documents found in 'nontechnical_events' collection!");
        } else {
          const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("Fetched data:", data);
          setEvents(data);
        }
      } catch (error) {
        console.error("Error fetching non-technical events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading non-technical events...</p>;
  }

  return (
    <div className="event-grid">
      {events.length > 0 ? (
        events.map(event => <EventCard key={event.id} event={event} />)
      ) : (
        <p>No non-technical events available.</p>
      )}
    </div>
  );
}

export default NonTechnical;
