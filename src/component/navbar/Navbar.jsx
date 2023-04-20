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

const navbar = () => {
  return (
    <div className="navbar">
      <div className="left">  {/*left side of the navigation page*/}
        <Link to ="/" style={{ textDecoration:"none" }} >
          <span>Lamasocial</span>
        </Link>
          <HomeOutlinedIcon />
          <DarkModeOutlinedIcon />
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
          {/*<img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> */}
          <span>Himasha Nethmini</span>
        </div>
      </div>
      
    </div>

  )
}

export default navbar
