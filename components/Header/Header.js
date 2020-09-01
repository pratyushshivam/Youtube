import React, { useState } from "react";
import "./styles/Header.css";
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  if(document.getElementById('getSearch')!=null){
  console.log(document.getElementById('getSearch').value)
  localStorage.store=document.getElementById('getSearch').value
  
 
  }
  function hel(e) {
    e.preventDefault();
    window.location.href = "https://www.youtube.com";   
  }
  function helc(e) {
    e.preventDefault();
    window.location.href = "https://www.instagram.com/pratyushshivam";   
  }

  return (
    <div className="header">
      <div className="header_left">
        <Menu />
        <Link to="/">
        <img
          onClick={hel} 
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
        </Link>
      </div>
      <div className="header_input">
        <input id="getSearch"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <Search className="header_inputButtom" />
        </Link>
      </div>
      <div className="header_icons">
        <VideoCall className="header_icon" />
        <Apps className="header_icon" />
        <Notifications className="header_icon" />
        <Avatar
          onClick={helc} 
          className="avatar"
          alt="Francisco Martin"
          src="https://pratyushshivam.files.wordpress.com/2017/05/cropped-fb_img_1494139973365.jpg?w=240"
        />
      </div>
    </div>
  );
}

export default Header;
