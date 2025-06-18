import React from "react";
import { Outlet } from "react-router-dom";
import HeaderPage from '../Header/Header';
import StickyIcons from "../sticky/Sticky";
import "./layout.css";

function Layout() {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <HeaderPage />
      </header>

      <main className="layout-main">
        <div className="layout-content">
          <Outlet />
        </div>
        <StickyIcons />
      </main>

    </div>
  );
}

export default Layout;