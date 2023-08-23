import React, {useState} from 'react';
import "../dropdown.css"

const Dropdown = ({selected, setSelected, data}: { selected: string, setSelected: any, data:any}) => {
    const [isActive, setActive] = useState(false);
    const options = ["Имя А-Я", "Имя Я-А", "Сначала моложе", "Сначала старше", "Высокий рейтинг", "Низкий рейтинг", "Любимый цвет"];
    const ids = Array.from({length: options.length}, (_, i) => i.toString());
    return (
        <div className="select-wrapper">
            <div className="dropdown">
                <div className="dropdown-btn" id={"btn"} onClick={
                    (e) => {
                        setActive(!isActive);
                        // function a() {
                        //     let text = document.getElementById("btn")!.innerText;
                        //     if (text === "Имя А-Я") console.log(data.students)
                        //     if (text === "Имя Я-А") console.log(1)
                        //     if (text === "Сначала моложе") console.log(1)
                        //     if (text === "Сначала старше") console.log(1)
                        //     if (text === "Высокий рейтинг") console.log(1)
                        //     if (text === "Низкий рейтинг") console.log(1)
                        //     if (text === "Любимый цвет") console.log(1)
                        // }
                        // a();
                    }}>{selected}
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        {(options.map((x, i) => [x, ids[i]])).map((option: string[]) => (
                            <div
                                onClick={(e) => {
                                    setSelected(option[0]);
                                    setActive(false);
                                }}
                                className="dropdown-item" id={option[1]}>
                                {option[0]}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;