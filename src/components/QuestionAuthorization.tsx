import * as React from 'react';
import "../index.css"

const QuestionAuthorization = ({question, link, wordAuthorization}: {
    question: string,
    link: string,
    wordAuthorization: string
}) => {
    return (
        <div className="question">
            <p>{question}</p>
            <a href={link}>{wordAuthorization}</a>
        </div>
    );
};

export default QuestionAuthorization;