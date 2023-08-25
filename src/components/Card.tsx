import React from 'react';
import {Student} from "../type";
import {_calculateAge} from "../scripts/numberOfYears";
import {deleteStudent} from "../scripts/deleteStudent";
import {getAgeWord} from "../scripts/getAgeWord";

const Card = ({student}: { student: Student }) => {
    return (
        <div className="studentCard" id={student.id.toString()}>
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
                    <div>{getAgeWord(_calculateAge(student.birthday))}</div>
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