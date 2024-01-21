import { NavLink } from "react-router-dom";
import "./style.scss";
import { docIcon, drawIcon, apiIcon, musicIcon } from "../../../contants/icons";

const sidebarItem = [
  { id: "01", name: "Editor", path: "project/123", icon: docIcon },
  { id: "02", name: "Draw", path: "drawer", icon: drawIcon },
  { id: "03", name: "API", path: "api-testing", icon: apiIcon },
  { id: "04", name: "Music", path: "music", icon: musicIcon },
];
const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      {sidebarItem.map((item) => (
        <NavLink
          to={item.path}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="sidebar-item">
            <img className="sidebar-icon" src={item.icon} alt="" />
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
