import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

  const { toggle,darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">  {/*left side of the navigation page*/}
        <Link to ="/" style={{ textDecoration:"none" }} >
          <span>Lamasocial</span>
        </Link>
          <HomeOutlinedIcon />
          { darkMode ? (
            <WbSunnyOutlinedIcon onClick ={toggle} />
          ):(
            <DarkModeOutlinedIcon onClick={toggle} />

          )}
          <GridViewOutlinedIcon />
          <div className="search">
            <SearchOutlinedIcon />
            <input type="search" placeholder="search ...." />
          </div>
        </div>
      <div className="right">
        <PersonOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <MailOutlineOutlinedIcon />
        <div className="user">
          <img 
          src={currentUser.profilePic}
          alt="" /> 
          <span>{currentUser.name}</span>
        </div>
      </div>
      
    </div>

  )
};

export default Navbar;
