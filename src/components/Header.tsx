import React from 'react';
import Circle from "./Circle";
import NameProjectAuthor from "./NameProjectAuthor";

const Header = () => {
    return (
        <div className="frame">
            <Circle/>
            <NameProjectAuthor nameProject="STUDENTS by" userName="LadaKuzmina"/>
        </div>
    );
};

export default Header;