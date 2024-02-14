import "./startMenu.css";

import { useState, useEffect } from "react";

let startMenuClickedObj = [
  {
    id: 1,
    src: "/assets/start-menu-clicked-assets/programs.png",
    textUnderline: "P",
    text: "rograms",
  },
  {
    id: 2,
    src: "/assets/start-menu-clicked-assets/documents.png",
    textUnderline: "D",
    text: "ocuments",
  },
  {
    id: 3,
    src: "/assets/start-menu-clicked-assets/settings.png",
    textUnderline: "S",
    text: "ettings",
  },
  {
    id: 4,
    src: "/assets/start-menu-clicked-assets/search.png",
    textUnderline: "F",
    text: "ind",
  },
  {
    id: 5,
    src: "/assets/start-menu-clicked-assets/help.png",
    textUnderline: "H",
    text: "elp",
  },
];

const appItems = [
  {
    id: 1,
    src: "/assets/desktop-assets/my-computer.png",
    name: "My Computer1",
  },
  {
    id: 2,
    src: "/assets/desktop-assets/my-computer.png",
    name: "My Computer2",
  },
  {
    id: 3,
    src: "/assets/desktop-assets/my-computer.png",
    name: "My Computer3",
  },
  {},
];

export default function Desktop() {
  let [startMenuClicked, setMenuClicked] = useState(false);

  let handleClicked = () => {
    startMenuClicked ? setMenuClicked(false) : setMenuClicked(true);
  };

  let [currentOpenItems, setCurrentOpenItems] = useState([]);

  let [timeNow, setTimeNow] = useState([
    new Date().getHours(),
    new Date().getMinutes(),
  ]);

  let [activeAppItems, setActiveAppItems] = useState([]);

  return (
    <>
      <div className="desktopContainer">
        <img
          className="desktopBackgroundImg"
          src="/assets/desktop-assets/bg.png"
          alt=""
        />
        {appItems.map((item) => (
          <DesktopApp src={item.src} name={item.name} key={item.id} />
        ))}
        <ActiveAppsContainer />
      </div>
      <StartMenu />
    </>
  );

  function DesktopApp(props) {
    return (
      <div
        className="itemContainer"
        onDoubleClick={(e) => {
          let imgSrc, imgAlt, appText, item;
          if (e.target.className === "desktopItemImg") {
            imgSrc = e.target.src;
            imgAlt = e.target.alt;
            appText = e.target.parentNode.textContent;
          } else if (e.target.className === "desktopItemText") {
            imgSrc = e.target.parentNode.firstChild.src;
            imgAlt = e.target.parentNode.firstChild.alt;
            appText = e.target.textContent;
          }
          // if user clicks div
          else {
            imgSrc = e.target.children[0].src;
            imgAlt = e.target.children[0].alt;
            appText = e.target.children[1].textContent;
          }

          if (currentOpenItems.length <= 9) {
            item = { src: imgSrc, alt: imgAlt, text: appText, id: Date.now() };
            setCurrentOpenItems(currentOpenItems.concat(item));
          }
        }}
      >
        <img
          className="desktopItemImg"
          width="50px"
          height="50px"
          src={props.src}
          alt={props.src}
        ></img>
        <p className="desktopItemText">{props.name}</p>
      </div>
    );
  }

  function ActiveAppsContainer() {
    return (
      <div className="activeAppsContainer">
        {currentOpenItems.map((item) => (
          <ActiveAppItem name={item.name} />
        ))}
      </div>
    );
  }

  function ActiveAppItem(props) {
    let position = Math.floor(Math.random() * 300) + 1;
    return (
      <div
        className="activeAppContainer"
        style={{
          position: "absolute",
          top: `${position}px`,
          left: `${position}px`,
        }}
      >
        <div className="activeAppContentContainer">
          <div className="activeAppNav">
            <div className="activeAppNavItems">
              <div className="activeAppNavHeader">
                <img src="" alt="text.txt" />
                <p>{props.name}</p>
              </div>
              <div className="activeAppNavActions">
                <div className="activeAppNavItem outsideCSS">
                  <p>_</p>
                </div>
                <div className="activeAppNavItem outsideCSS">
                  <p>✕</p>
                </div>
              </div>
            </div>
          </div>
          <div className="activeAppContentItems">
            <div className="activeAppContentItem">
              <h1>hello world</h1>
            </div>
          </div>
          <div className="activeAppFooter"></div>
        </div>
      </div>
    );
  }

  function StartMenu() {
    // useEffect(() => {
    //   setInterval(() => {
    //     const currentDate = new Date();
    //     setTimeNow([currentDate.getHours(), currentDate.getMinutes()]);
    //   }, 1000);
    // });

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
                width="30px"
                height="30px"
                src="/assets/start-menu-assets/start-menu-logo.png"
                alt="start-menu-logo"
              ></img>
              <p className="startMenuText">Start</p>
            </div>
          </div>
          <div className="startMenuApplications">
            {currentOpenItems.map((item) => (
              <div
                className="startMenuItemActive  activeOutsideCss"
                key={item.id}
              >
                <img src={item.src} alt="item.src"></img>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="startTimeOutsideContainer">
            <div className="startMenuTimeContainer outsideCSS">
              {`${timeNow[0]}:${timeNow[1]}`}
              {timeNow[0] >= 12 ? " PM" : " AM"}
            </div>
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
            <div className="startMenuItem" key={item.id}>
              <img src={item.src} alt={item.src}></img>
              <span className="textUnderline">{item.textUnderline}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
