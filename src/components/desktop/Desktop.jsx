import "./desktop.css";

const appItems = [
  {
    src: "/assets/desktop-assets/my-computer.png",
    name: "My Computer",
  },
  {
    src: "/assets/desktop-assets/my-computer.png",
    name: "My Computer",
  },
  {
    src: "/assets/desktop-assets/my-computer.png",
    name: "My Computer",
  },
];

export default function Desktop() {
  return (
    <div className="desktopContainer">
      <img
        className="desktopBackgroundImg"
        src="/assets/desktop-assets/bg.png"
        alt=""
      />
      {appItems.map((item) => (
        <DesktopApp src={item.src} name={item.name} />
      ))}
    </div>
  );
}

function DesktopApp(props) {
  return (
    <div className="itemContainer" onDoubleClick={() => prompt("hi")}>
      <img
        className="desktopItemImg"
        width="40px"
        height="40px"
        src={props.src}
        alt={props.src}
      ></img>
      <p>{props.name}</p>
    </div>
  );
}
