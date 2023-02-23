import React from "react";

import { SearchIcon } from "@chakra-ui/icons";
import logo from "./logoo.png";
import { BsCart2, BsFillPersonFill } from "react-icons/bs";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        backgroundColor: "#e40046",
      }}
    >
      <Link to="/">
      <img src={logo} alt="err" style={{ width: "250px" }} />
      </Link>

      {/* <div > */}

      <input
        placeholder="search products & brands"
        type="text"
        style={{
          border: "1px solid black",
          width: "600px",
          padding: "3px",
          paddingLeft: "20px",
          margin: "30px",
        }}
      />

      {/* </div> */}

      <div
        style={{
          border: "1px solid black",
          display: "flex",
          padding: "3px",
          margin: "30px",
          width: "90px",
          backgroundColor: "#333333",
          justifyContent: "center",
          marginLeft: "-30px",
        }}
      >
        <p style={{ color: "white", pading: "3px" }}>
          <SearchIcon />
          {/* <BsCart2/>  */}
          Search
        </p>
      </div>

      <div
        style={{
          border: "0px solid black",
          color: "white",
          gap: "5px",
          display: "flex",
          padding: "3px",
          margin: "30px",
          width: "90px",
          justifyContent: "center",
        }}
      >
        <BsCart2 style={{ fontSize: "27px" }}> </BsCart2>
        <h1 style={{ fontSize: "17px" }}>Cart</h1>
      </div>

   <Link to='/signup' >
      <div
        style={{
          border: "0px solid black",
          color: "white",
          gap: "5px",
          display: "flex",
          padding: "3px",
          margin: "30px",
          width: "120px",
          justifyContent: "center",
          cursor: "pointer",
        }}
        >
        <h1 style={{ fontSize: "17px" }}>Sign Up</h1>
        <BsFillPersonFill style={{ fontSize: "27px" }}> </BsFillPersonFill>
      </div>
        </Link>
    </div>
  );
};

export default Navbar;
