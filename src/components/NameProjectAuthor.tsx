import React from 'react';

const NameProjectAuthor = ({nameProject, userName}: { nameProject: string, userName: string }) => {
    return (
        <div>
            <div className="author">
                <p>{nameProject}</p>
                <p className="userName">{userName}</p>
            </div>
        </div>
    );
};

export default NameProjectAuthor;