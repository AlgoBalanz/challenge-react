import React from "react";

const Header = ({ contentValue }) => {
    console.log("Render header component");
    return <header>{contentValue}</header>;
};

export default Header;
