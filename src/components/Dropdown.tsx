import React, {useState} from 'react';
import "../style/dropdown.css"
import DropdownElement from "./DropdownElement";

const Dropdown = ({selected, setSelected, setComparer}: {
    selected: string,
    setSelected: Function,
    setComparer: Function
}) => {

    const [isActive, setActive] = useState(false);
    const options = ["Имя А-Я", "Имя Я-А", "Сначала моложе", "Сначала старше", "Высокий рейтинг", "Низкий рейтинг", "Любимый цвет"];
    const ids = Array.from({length: options.length}, (_, i) => i.toString());
    return (
        <div className="select-wrapper">
            <div className="dropdown">
                <div className="dropdown-btn" id={"btn"} onClick={
                    () => {
                        setActive(!isActive);
                    }}>{selected}
                </div>
                <div className="dropdown-content" style={{display: isActive ? "block" : "none"}}>
                    {(options.map((x, i) => [x, ids[i]])).map((option: string[]) => (
                        <DropdownElement selected={selected} setSelected={setSelected} setComparer={setComparer}
                                         optionName={option[0]}
                                         optionIndex={Number(option[1])} setActive={setActive}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;