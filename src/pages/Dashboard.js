import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import "../css/Dashboard.css";

const Dashboard = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      const docRef = doc(db, "images", "dashboard");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setImageUrl(docSnap.data().url);
        setTimeout(() => setShowImage(true), 2000);
      }
    };
    fetchImage();
  }, []);

  return (
    <div className="dashboard-container">
      {showImage && imageUrl ? (
        <img src={imageUrl} alt="Dashboard" className="dashboard-image" />
      ) : (
        <p className="loading-text">Loading Dashboard Image...</p>
      )}
    </div>
  );
};

export default Dashboard;
