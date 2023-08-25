import React from 'react';

const NameProjectAuthor = ({nameProject, userName, by}: { nameProject: string, userName: string, by: string }) => {
    return (
        <div>
            <div className="author">
                <p>{nameProject}</p>
                <p className="by">{by}</p>
                <p className="userName">{userName}</p>
            </div>
        </div>
    );
};

export default NameProjectAuthor;