import React from "react";

function Footer(){
    var loDate = new Date();
    var loYear = loDate.getFullYear();
    return <footer><p> Copywrite {loYear}</p></footer>;
}

export default Footer;