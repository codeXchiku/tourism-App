import React, { useState } from "react";

import "../Styles/Recommendation.css";

import Destination1 from "../assets/Destination1.jpg";
import Destination2 from "../assets/Destination2.jpg";
import Destination3 from "../assets/Destination3.jpg";
import Destination4 from "../assets/Destination4.jpg";
import Destination5 from "../assets/Destination5.jpg";
import Destination6 from "../assets/Destination6.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function Recommendation() {
  const [active, setActive] = useState();

  const data = [
    {
      image: Destination1,
      title: "The Golden Triangle",
      subTitle: "Begin your journey in the heart of India's cultural heritage with the Golden Triangle tour covering Delhi, Agra, and Jaipur. Explore the majestic forts of Jaipur, the timeless beauty of the Taj Mahal in Agra, and the bustling markets of Delhi.",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Kerala Backwaters",
      subTitle: "Experience tranquility as you cruise through Kerala's backwaters on a traditional houseboat. Witness lush greenery, serene waters, and vibrant local life along the banks.",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Goa's Beaches",
      subTitle: "Indulge in sun, sand, and sea on Goa's pristine beaches. From lively beach parties to peaceful sunsets, Goa offers a perfect blend of relaxation and excitement.",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Ladakh's Adventure",
      subTitle: "For adventure enthusiasts, Ladakh beckons with its rugged landscapes,high-altitude treks, and Buddhist monasteries perched on cliffs.",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Rajasthan's Royalty",
      subTitle: "Step into the royal era of Rajasthan with its opulent palaces, colorful festivals, and desert safaris. Explore the heritage cities of Jaipur, Udaipur, Jodhpur, and more.",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "Varanasi's Spiritual Aura",
      subTitle: "Dive into spirituality at Varanasi, one of the oldest living cities in the world. Witness mesmerizing Ganga Aarti ceremonies and immerse yourself in the spiritual essence of India.",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Recommend</h1>
        <div className="CategoryBar">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  key={index}
                  className={active === index + 1 ? "Active" : ""}
                  onClick={() => setActive(index + 1)}>
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="recommendationBox">
        {data.map((item) => {
          return (
            <div className="box">
              <div className="image">
                <img src={item.image} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>

              <div className="price">
                <div>
                  <img src={info1} alt="image" />
                  <img src={info2} alt="image" />
                  <img src={info3} alt="image" />
                </div>

                <p>${item.cost}</p>
              </div>

              <div className="details">
                <p>1500 kms</p>
                <p>{item.duration}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
