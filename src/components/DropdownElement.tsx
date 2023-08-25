import React from 'react';
import {getComparer} from "../scripts/comparers";

const DropdownElement = ({
                             selected, setSelected, setComparer, optionName, optionIndex, setActive
                         }:
                             {
                                 setSelected: Function,
                                 setComparer: Function,
                                 optionName: string,
                                 optionIndex: number,
                                 setActive: Function,
                                 selected: string,
                             }
) => {
    return (
        <div
            onClick={() => {
                setSelected(optionName);
                setActive(false);
                setComparer(() => getComparer(optionName));
            }}
            style={{
                backgroundColor: selected === optionName ? "#EBF8FC" : "white",
                height: "15.25px"
            }}

            className="dropdown-item" id={`dropdownItem` + optionIndex}>
            {optionName}
            <img src={require("../icons/checkMark.png")} alt="checkMark" id={"checkMark" + optionIndex}
                 className="checkMark"
                 style={{
                     display: selected === optionName ? "block" : "none",
                     position: "relative",
                     left: "120px",
                     top: "-15px",
                     width: "15px",
                     backgroundSize: "100% 100%",
                     pointerEvents: "none",
                 }}/>
        </div>
    );
};

export default DropdownElement;