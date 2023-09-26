import React, { memo } from "react";

const Header = ({ contentValue }) => {
    console.log("Render header component");
    return <header>{contentValue}</header>;
};
//3 - SE AGREGA LA PROPIEDAD MEMO
export default memo(Header);
