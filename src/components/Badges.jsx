import React, { useState, useRef } from "react";
import "./../styles/Badges.css";
import IconSubheading from "../assets/icons/subheading.svg";
import Role from "../assets/icons/Role.svg";
import Education from "../assets/icons/Education.svg";
import Location from "../assets/icons/location.svg";
import Routing from "../assets/icons/routing.svg";
import Website from "../assets/icons/Website.svg";

import JuliaDoe from "../assets/images/Julia-Doe.webp";
import EleanorPena from "../assets/images/Eleanor-Pena.webp";
import RobertFox from "../assets/images/Robert-Fox.webp";
import LeslieAlexander from "../assets/images/Leslie-Alexander.webp";
import LeslieAlexander2 from "../assets/images/Leslie-Alexander2.webp";

const Badges = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: JuliaDoe,
      name: "Julia Doe",
      role: "Operations Manager",
      education: "MIT Graduate",
      location: "Cambridge, USA",
      away: "10 miles away",
      about:
        "Passionate about innovation and problem-solving. Operations pro by day, adventure seeker by night. Always ready for a good conversation and new connections.",
      website: "WWW.lustra.com",
    },
    {
      id: 2,
      image: EleanorPena,
      name: "Eleanor Pena",
      role: "Operations Manager",
      education: "MIT Graduate",
      location: "Cambridge, USA",
      away: "10 miles away",
      about:
        "Passionate about innovation and problem-solving. Operations pro by day, adventure seeker by night. Always ready for a good conversation and new connections.",
      website: "WWW.lustra.com",
    },
    {
      id: 3,
      image: RobertFox,
      name: "Robert Fox",
      role: "Operations Manager",
      education: "MIT",
      location: "Cambridge, USA",
      away: "10 miles away",
      about:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Odio habitant a sodales et tempor scelerisque condimentum class. Erat aptent montes vel tempus himenaeos mauris vivamus.",
      website: "WWW.lustra.com",
    },
    {
      id: 4,
      image: LeslieAlexander,
      name: "Leslie Alexander",
      role: "Operations Manager",
      education: "MIT",
      location: "Cambridge, USA",
      away: "10 miles away",
      about:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Odio habitant a sodales et tempor scelerisque condimentum class. Erat aptent montes vel tempus himenaeos mauris vivamus.",
      website: "WWW.lustra.com",
    },
    {
      id: 5,
      image: LeslieAlexander2,
      name: "Leslie Alexander",
      role: "Operations Manager",
      education: "MIT",
      location: "Cambridge, USA",
      away: "10 miles away",
      about:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Odio habitant a sodales et tempor scelerisque condimentum class. Erat aptent montes vel tempus himenaeos mauris vivamus.",
      website: "WWW.lustra.com",
    },
  ]);

  const [dragState, setDragState] = useState({
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    dragCardId: null,
  });

  const cardStackRef = useRef(null);

  const handleStart = (e, cardId) => {
    if (cardId !== cards[0]?.id) return;
    const clientX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === "mousedown" ? e.clientY : e.touches[0].clientY;
    setDragState({
      isDragging: true,
      startX: clientX,
      startY: clientY,
      currentX: clientX,
      currentY: clientY,
      dragCardId: cardId,
    });
  };

  const handleMove = (e) => {
    if (!dragState.isDragging) return;
    e.preventDefault();
    const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === "mousemove" ? e.clientY : e.touches[0].clientY;
    setDragState((prev) => ({
      ...prev,
      currentX: clientX,
      currentY: clientY,
    }));
  };

  const handleEnd = () => {
    if (!dragState.isDragging) return;
    const deltaX = dragState.currentX - dragState.startX;
    const threshold = 100;
    if (Math.abs(deltaX) > threshold) {
      swipeCard(deltaX > 0 ? "right" : "left");
    }
    setDragState({
      isDragging: false,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      dragCardId: null,
    });
  };

  const swipeCard = () => {
    setTimeout(() => {
      setCards((prev) => {
        const [firstCard, ...rest] = prev;
        return [...rest, firstCard];
      });
    }, 300);
  };

  const getCardTransform = (index) => {
    const offsetX = index * -25;
    const scale = 1 - index * 0.03;

    const rotationFactor =
      window.innerWidth < 400 ? 3 : window.innerWidth < 550 ? 5 : 9;

    const baseRotation =
      (cards.length - 1 - index - (cards.length - 1) / 2) * rotationFactor;

    if (
      index === 0 &&
      dragState.isDragging &&
      dragState.dragCardId === cards[0]?.id
    ) {
      const deltaX = dragState.currentX - dragState.startX;
      const deltaY = dragState.currentY - dragState.startY;
      const dragRotation = deltaX * 0.1;
      return `translateX(${
        deltaX + offsetX
      }px) translateY(${deltaY}px) rotate(${
        baseRotation + dragRotation
      }deg) scale(${scale})`;
    }

    return `translateX(${offsetX}px) rotate(${baseRotation}deg) scale(${scale})`;
  };

  const getCardOpacity = (index) => {
    if (
      index === 0 &&
      dragState.isDragging &&
      dragState.dragCardId === cards[0]?.id
    ) {
      const deltaX = Math.abs(dragState.currentX - dragState.startX);
      return Math.max(0.5, 1 - deltaX / 300);
    }
    return 1;
  };

  const getCardShadow = (index) => {
    const baseShadow = `0 ${5 + index * 6}px ${
      15 + index * 10
    }px rgba(0, 0, 0, ${0.08 + index * 0.04})`;
    if (
      index === 0 &&
      dragState.isDragging &&
      dragState.dragCardId === cards[0]?.id
    ) {
      const deltaX = dragState.currentX - dragState.startX;
      if (Math.abs(deltaX) > 50) {
        return deltaX > 0
          ? "0 25px 50px rgba(76, 175, 80, 0.4)"
          : "0 25px 50px rgba(244, 67, 54, 0.4)";
      }
      return "0 20px 40px rgba(0, 0, 0, 0.2)";
    }
    return baseShadow;
  };

  return (
    <section className="badges-section">
      <div className="section_heading center con-med">
        <span className="subheading">
          <img src={IconSubheading} alt="Our Curriculum" />
          Badges <img src={IconSubheading} alt="Our Curriculum" />
        </span>
        <h2>
          Show Off Your <span className="highlight">Badges!</span>
        </h2>
        <p>
          Finish our modules and show off your badges on dating and social media
          apps! Let's make sexual health and communication the coolest thing to
          learn about!
        </p>
      </div>

      <div className="badges-container">
        <div
          ref={cardStackRef}
          className="card-stack"
          style={{ cursor: dragState.isDragging ? "grabbing" : "grab" }}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="card"
              style={{
                transform: getCardTransform(index),
                opacity: getCardOpacity(index),
                boxShadow: getCardShadow(index),
                zIndex: cards.length - index,
                transition:
                  index === 0 && dragState.isDragging
                    ? "none"
                    : "all 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
              }}
              onMouseDown={(e) => handleStart(e, card.id)}
              onTouchStart={(e) => handleStart(e, card.id)}
              onDragStart={(e) => e.preventDefault()}
            >
              <div className="card-header">
                <img src={card.image} alt={card.name} className="profile-img" />
              </div>

              <div className="card-content">
                <h2 className="card-stack-title">{card.name}</h2>
                <p className="info-text">
                  {" "}
                  <img src={Role} /> {card.role}
                </p>

                <p className="info-text">
                  <img src={Education} /> {card.education}
                </p>
                <p className="info-text">
                  <img src={Location} /> {card.location}
                </p>
                <p
                  className={`info-text ${
                    card.away === "Away" ? "red" : "green"
                  }`}
                >
                  <img src={Routing} alt="" /> {card.away}
                </p>

                <h3 className="card-heading">About Us</h3>
                <p className="info-text">{card.about}</p>
                <a
                  href={card.website}
                  className="info-text"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Website} />
                  {card.website}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;
