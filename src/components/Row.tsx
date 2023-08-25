import React from 'react';
import type {Student} from "../type";
import {_calculateAge} from "../scripts/numberOfYears";
import {deleteStudent} from "../scripts/deleteStudent";

const Row = ({student}: { student: Student }) => {
    return (
        <tr id={student.id.toString()}>
            <td className="avatar"><img src={student.avatar} alt="avatar"/></td>
            <td style={{
                textAlign: "left"
            }}>{student.name}</td>
            <td>{student.specialty}</td>
            <td>{student.group}</td>
            <td style={{textAlign: "left"}}>{_calculateAge(student.birthday)}</td>
            <td>{student.rating}</td>
            <td>
                <div className="favoriteColor" style={{
                    background: `${student.color}`
                }}></div>
            </td>
            <td>
                <button type="button" className="delete" onClick={() => deleteStudent(student.id)}><img
                    src={require("../icons/trash.png")} alt="trash"/></button>
            </td>
        </tr>
    );
};

export default Row;