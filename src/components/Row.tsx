import React from 'react';

const Row = (student: any) => {
    function _calculateAge(birthday_string: string) {
        let birthday = new Date(birthday_string);
        let ageDifMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function deleteStudent(id: number) {
        document.getElementById(id.toString())!.remove();
    }

    student = student.student
    return (
        <tr id={student.id}>
            <td className="avatar"><img src={student.avatar} alt="avatar"/></td>
            <td style={{
                textAlign: "left"
            }}>{student.name}</td>
            <td>{student.specialty}</td>
            <td>{student.group}</td>
            <td>{_calculateAge(student.birthday)}</td>
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