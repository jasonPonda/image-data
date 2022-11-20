import React from "react";
import images_data from "../../data/image";
import { ServiceCard } from "../card";

const Body = () => {
  return (
    <main className="main">
      <div className="main-header">
        <h1>Bienvenue sur le IMG</h1>
      </div>
      <div className="main-container">
        {images_data().map((item, i) => (
          <ServiceCard
            key={i}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </main>
  );
};

export default Body;
