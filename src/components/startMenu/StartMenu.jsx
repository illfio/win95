import { useState, useEffect } from "react";
import "./startMenu.css";

let startMenuClickedObj = [
  {
    src: "/assets/start-menu-clicked-assets/programs.png",
    textUnderline: "P",
    text: "rograms",
  },
  {
    src: "/assets/start-menu-clicked-assets/documents.png",
    textUnderline: "D",
    text: "ocuments",
  },
  {
    src: "/assets/start-menu-clicked-assets/settings.png",
    textUnderline: "S",
    text: "ettings",
  },
  {
    src: "/assets/start-menu-clicked-assets/search.png",
    textUnderline: "F",
    text: "ind",
  },
  {
    src: "/assets/start-menu-clicked-assets/help.png",
    textUnderline: "H",
    text: "elp",
  },
];

export default function StartMenu() {
  let [startMenuClicked, setMenuClicked] = useState(false);
  let handleClicked = function () {
    startMenuClicked ? setMenuClicked(false) : setMenuClicked(true);
  };

  let [currentOpenItems, setCurrentOpenItems] = useState([]);

  let [timeNow, setTimeNow] = useState([
    new Date().getHours(),
    new Date().getMinutes(),
  ]);

  useEffect(() => {
    setInterval(() => {
      const currentDate = new Date();
      setTimeNow([currentDate.getHours(), currentDate.getMinutes()]);
    }, 1000);
  });

  return (
    <div className="startContainer">
      {startMenuClicked ? <StartMenuClicked /> : ""}
      <div className="startMenuContainer">
        <div
          className="startMenuButtonContainer outsideCSS"
          onClick={handleClicked}
        >
          <div className="startMenuButtonContent insideCSS">
            <img
              width="20px"
              height="20px"
              src="/assets/start-menu-assets/start-menu-logo.png"
              alt="start-menu-logo"
            ></img>
            <p className="startMenuText">Start</p>
          </div>
        </div>
        <div className="startMenuApplications">
          {currentOpenItems.map((item) => (
            <div className="startMenuItemActive">
              <img
                width="20px"
                height="20px"
                src={item.src}
                alt="item.src"
              ></img>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="startMenuTimeContainer outsideCSS">
          {`${timeNow[0]}:${timeNow[1]}`}
          {timeNow[0] >= 12 ? " PM" : " AM"}
        </div>
      </div>
    </div>
  );
}

function StartMenuClicked() {
  return (
    <div className="startMenuClickedContainer outsideCSS">
      <div className="windows95TextContainer">
        <span className="windows95Text">
          <p className="windows95TextBold">
            WINDOWS<span className="windows95TextLight">95</span>
          </p>
        </span>
      </div>
      <div className="startMenuItemsContainer insideCSS">
        {startMenuClickedObj.map((item) => (
          <div className="startMenuItem">
            <img src={item.src} alt={item.src}></img>
            <span className="textUnderline">{item.textUnderline}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
