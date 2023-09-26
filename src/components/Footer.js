import React, { memo } from "react";

const Footer = ({ contentValue }) => {
    console.log("Render footer component");
    return <footer>{contentValue}</footer>;
};
//3 - SE AGREGA LA PROPIEDAD MEMO
export default memo(Footer);
