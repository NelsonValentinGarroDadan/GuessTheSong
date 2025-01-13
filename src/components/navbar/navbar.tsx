import React from "react";
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
        className="bg-bg-light dark:bg-bg-dark" 
        color="transparent" 
      >
        <Toolbar className="flex items-center justify-between">
          <Typography variant="h6" className="md:!text-3xl !font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            GuessTheSong
          </Typography>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className={`text-text-light dark:text-text-dark ${isActive("/") ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent" : ""} hover:text-transparent`}>
              Inicio
            </Link>
            <Link to="/play" className={`text-text-light dark:text-text-dark ${isActive("/jugar") ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent" : ""} hover:text-transparent`}>
              Jugar
            </Link>
            <Link to="/ranking" className={`text-text-light dark:text-text-dark ${isActive("/ranking") ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent" : ""} hover:text-transparent`}>
              Ranking
            </Link>
            <Link to="/about" className={`text-text-light dark:text-text-dark ${isActive("/acerca") ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent" : ""} hover:text-transparent`}>
              Acerca de
            </Link>
          </div>
          <div className="md:hidden">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon className="text-text-light dark:text-text-dark" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle} >
        <div style={{ width: "100vw" }} className="relative bg-bg-light dark:bg-bg-dark h-full flex flex-col items-start justify-center">
        <Typography variant="h4" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center w-full !font-bold !mb-10">
            GuessTheSong
          </Typography>
          <div className="w-full flex justify-end absolute top-2 right-1">
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <CloseIcon className="text-text-light dark:text-text-dark" />
            </IconButton>
          </div>
            <Link to="/" className={`text-text-light dark:text-text-dark ${isActive("/") ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent" : ""} hover:text-transparent`}>
              Inicio
            </Link>
            <Link to="/play" className={`text-text-light dark:text-text-dark ${isActive("/jugar") ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent" : ""} hover:text-transparent`}>
              Jugar
            </Link>
            <Link to="/ranking" className={`text-text-light dark:text-text-dark ${isActive("/ranking") ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent" : ""} hover:text-transparent`}>
              Ranking
            </Link>
            <Link to="/about" className={`text-text-light dark:text-text-dark ${isActive("/acerca") ? "bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent" : ""} hover:text-transparent`}>
              Acerca de
            </Link>
        </div>
      </Drawer>
    </div>
  );
}