import React from 'react';

const Row = ({data, count}: { data: any, count: number }) => {
    function _calculateAge(birthday_string: string) {
        let birthday = new Date(birthday_string);
        let ageDifMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    return (
            <tr>
                <td className="avatar"><img src={data.students[count].avatar}/></td>
                <td style={{
                    textAlign:"left"
                }}>{data.students[count].name}</td>
                <td>{data.students[count].specialty}</td>
                <td>{data.students[count].group}</td>
                <td>{_calculateAge(data.students[count].birthday)}</td>
                <td>{data.students[count].rating}</td>
                <td><div className="favoriteColor" style={{
                    background: `${data.students[count].color}`
                }}></div></td>
                <td><div className="delite"><img src="../../icons/trash.png"/></div></td>
            </tr>
    );
};

export default Row;