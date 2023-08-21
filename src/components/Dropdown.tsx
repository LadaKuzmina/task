import React, {useState} from 'react';
import "../dropdown.css"

const Dropdown = ({selected, setSelected}: { selected: string, setSelected: any }) => {
    const [isActive, setActive] = useState(false);
    const options = ["Имя А-Я", "Имя Я-А", "Сначала моложе", "Сначала старше", "Высокий рейтинг", "Низкий рейтинг", "Любимый цвет"];
    const ids = Array.from({length: options.length}, (_, i) => i.toString());
    return (
        <div className="select-wrapper">
            <div className="dropdown">
                <div className="dropdown-btn" onClick={(e) => setActive(!isActive)}>{selected}</div>
                {isActive && (
                    <div className="dropdown-content">
                        {(options.map((x, i) => [x, ids[i]])).map((option: string[]) => (<div
                                onClick={(e) => {
                                    setSelected(option[0])
                                    setActive(false)
                                }}
                                className="dropdown-item" id={option[1]}>
                                {option[0]}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;