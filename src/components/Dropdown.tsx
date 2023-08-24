import React, {useState} from 'react';
import "../dropdown.css"

const Dropdown = ({selected, setSelected, setComparer}: {
    selected: string,
    setSelected: any,
    setComparer: any
}) => {
    function comparerAlphabetic(student1: any, student2: any) {
        return comparer(student1.name, student2.name);
    }

    function comparerAlphabeticDesc(student1: any, student2: any) {
        return comparer(student2.name, student1.name);
    }

    function comparerByAgeDesc(student1: any, student2: any) {
        return comparer(student1.birthday, student2.birthday);
    }

    function comparerByAge(student1: any, student2: any) {
        return comparer(student2.birthday, student1.birthday);
    }

    function comparerByRatingDesc(student1: any, student2: any) {
        return comparer(student1.rating, student2.rating);
    }

    function comparerByRating(student1: any, student2: any) {
        return comparer(student2.rating, student1.rating);
    }

    function comparerByColor(student1: any, student2: any) {
        return comparer(student1.color, student2.color);
    }

    function comparer(field1: any, field2: any) {
        if (field1 < field2) return -1;
        else if (field1 > field2) return 1;
        return 0;
    }

    function getComparer(sortingParameter: string) {
        if (sortingParameter === "Имя А-Я") return comparerAlphabetic;
        if (sortingParameter === "Имя Я-А") return comparerAlphabeticDesc;
        if (sortingParameter === "Сначала моложе") return comparerByAge;
        if (sortingParameter === "Сначала старше") return comparerByAgeDesc;
        if (sortingParameter === "Высокий рейтинг") return comparerByRating;
        if (sortingParameter === "Низкий рейтинг") return comparerByRatingDesc;
        if (sortingParameter === "Любимый цвет") return comparerByColor;
    }

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
                {isActive && (
                    <div className="dropdown-content">
                        {(options.map((x, i) => [x, ids[i]])).map((option: string[]) => (
                            <div
                                onClick={() => {
                                    setSelected(option[0]);
                                    setActive(false);
                                    setComparer(() => getComparer(option[0]))
                                }}
                                className="dropdown-item" id={`dropdownItem` + option[1]}>
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