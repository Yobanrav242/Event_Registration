import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import "../css/Dashboard.css";
import DemoImage from "../assets/Dashboard.jpg";  // Local image import

const HEADER_HEIGHT = 72;

const Dashboard = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const docRef = doc(db, "images", "dashboard");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().url?.trim() !== "") {
          setImageUrl(docSnap.data().url);
        } else {
          setImageUrl(DemoImage);  // Use local image fallback
        }
      } catch (error) {
        setImageUrl(DemoImage);    // Use local image fallback on error
      } finally {
        setShowImage(true);
      }
    };
    fetchImage();
  }, []);

  return (
    <div
      className="dashboard-container"
      style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
    >
      {showImage && imageUrl ? (
        <img src={imageUrl} alt="Dashboard" className="dashboard-image" />
      ) : (
        <p className="loading-text">Loading Dashboard Image...</p>
      )}
    </div>
  );
};

export default Dashboard;
