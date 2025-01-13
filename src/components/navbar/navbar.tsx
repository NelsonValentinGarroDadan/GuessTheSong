import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import {Link,useLocation} from "react-router-dom";  
export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
    
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const location = useLocation();  
  const isActive = (path: string) => location.pathname === path;
  return (
    <div>
      <AppBar
        position="sticky"
        className="bg-bg-light" 
        color="transparent" 
      >
        <Toolbar className="flex items-center justify-between bg-bg-dark">
          <Typography variant="h6" className="md:!text-3xl !font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            GuessTheSong
          </Typography>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className={`${isActive("/") ? " text-transparent" :"text-text-dark"} hover:text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text`}>
              Inicio
            </Link>
            <Link to="/play" className={`${isActive("/play") ? " text-transparent" :"text-text-dark"} hover:text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text`}>
              Jugar
            </Link>
            <Link to="/ranking" className={`${isActive("/ranking") ? " text-transparent" :"text-text-dark"} hover:text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text`}>
              Ranking
            </Link>
            <Link to="/about" className={`${isActive("/about") ? " text-transparent" :"text-text-dark"} hover:text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text`}>
              Acerca de
            </Link>
          </div>
          <div className="md:hidden">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon className="text-white" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle} >
        <div style={{ width: "100vw" }} className="relative bg-bg-dark h-full flex flex-col items-center justify-center">
        <Typography variant="h4" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center w-full !font-bold !mb-10">
            GuessTheSong
          </Typography>
          <div className="w-full flex justify-end absolute top-2 right-1">
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <CloseIcon className="text-text-dark " />
            </IconButton>
          </div>
            <Link to="/" onClick={handleDrawerToggle} className={`${isActive("/") ? " text-transparent" :"text-text-dark"} hover:text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text`}>
              Inicio
            </Link>
            <Link to="/play" onClick={handleDrawerToggle} className={`${isActive("/play") ? " text-transparent" :"text-text-dark"} hover:text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text`}>
              Jugar
            </Link>
            <Link to="/ranking" onClick={handleDrawerToggle} className={`${isActive("/ranking") ? " text-transparent" :"text-text-dark"} hover:text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text`}>
              Ranking
            </Link>
            <Link to="/about" onClick={handleDrawerToggle} className={`${isActive("/about") ? " text-transparent" :"text-text-dark"} hover:text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text`}>
              Acerca de
            </Link>
        </div>
      </Drawer>
    </div>
  );
}