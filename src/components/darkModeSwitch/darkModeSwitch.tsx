"use client";
import React, { useState, useEffect } from "react";
import { Switch } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMode = event.target.checked;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", newMode.toString());
  };

  return (
    <div className="flex items-center dark:bg-bg-light bg-bg-dark px-5 py-0 rounded-full">
      <Brightness7
        style={{
          fontSize: "1rem",
          color: "#f59e0b",
          transition: "color 0.3s ease",
        }}
      />
      <Switch
        checked={darkMode}
        onChange={handleSwitchChange}
        color="default"
        sx={{
          "& .MuiSwitch-thumb": {
            backgroundColor: darkMode ? "#ffffff" : "#1e293b",
            transition: "background-color 0.3s ease",
          },
          "& .Mui-checked + .MuiSwitch-track": {
            backgroundColor: darkMode ? "#1e293b" : "#e5e7eb",
          },
        }}
      />
      <Brightness4
        style={{
          fontSize: "1rem",
          color: "#3b82f6" ,
          transition: "color 0.3s ease",
        }}
      />
    </div>
  );
}
