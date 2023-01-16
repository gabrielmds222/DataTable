//import useState hook to create menu collapse state
import React, { useState } from "react";

import { HouseLine, MagnifyingGlass, PencilSimple } from "phosphor-react";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function BarraLateral() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar
        transitionDuration={500}
        backgroundColor="#222d32"
        style={{ color: "#b8c7ce", fontSize: "14px" }}
      >
        <Menu>
          <Link to="/">
            <MenuItem
              icon={<HouseLine size={14} color="#b8c7ce" weight="fill" />}
            >
              Home
            </MenuItem>
          </Link>
          <Link to="/editar">
            <MenuItem
              icon={<MagnifyingGlass size={14} color="#b8c7ce" weight="fill" />}
            >
              Consulta
            </MenuItem>
          </Link>

          <MenuItem
            icon={<PencilSimple size={14} color="#b8c7ce" weight="fill" />}
          >
            Complemento
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default BarraLateral;
