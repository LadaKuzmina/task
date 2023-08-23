import React from 'react';

const Card = (student: any) => {
    function _calculateAge(birthday_string: string) {
        let birthday = new Date(birthday_string);
        let ageDifMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function deleteStudent(id: number) {
        document.getElementById(id.toString())!.remove();
    }

    function ageWord(age: number) {
        if (age % 10 === 1) return age + " год";
        if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4) return age + " года"
        else return age + " лет"
    }

    student = student.student
    return (
        <div className="studentCard" id={student.id}>
            <div className="avatar">
                <img src={student.avatar} alt="avatar"/>
            </div>
            <div className="studentName">{student.name}</div>
            <div className="rating">{student.rating}</div>
            <div>
                <div className="favoriteColor" style={{
                    background: `${student.color}`
                }}></div>
            </div>
            <div>
                <button type="button" className="delete" onClick={() => deleteStudent(student.id)}><img
                    src={require("../icons/trash.png")} alt="trash"/></button>
            </div>
            <hr className="line"></hr>
            <div className="starRating">
                <img src={require("../icons/star.png")}/>
            </div>
            <ul className="list">
                <li>
                    <div>{ageWord(_calculateAge(student.birthday))}</div>
                </li>
                <li>
                    <div>{student.specialty}</div>
                </li>
                <li>
                    <div>{student.group}</div>
                </li>
            </ul>
        </div>
    );
};

export default Card;