import React from 'react';
import Question from './Question'

function Results(props) {
    return (
        <div className="results">
            {getResults()}
        </div>
    );

    function getResults() {
        return (
            <div>
                <div>
                    Результаты
                </div>
                <div>
                    {getQuestionsAndAnswers()}
                </div>
            </div>
        )
    }

    function getQuestionsAndAnswers() {
        return props.questions.map((el, index) => {
            return (
                <div key={index + Math.random()}>
                    <Question question={el} answers={el.answers} isResults={true}/>
                    {checkQuestion(el)}
                </div>
            )
        })
    }

    function checkQuestion(el) {
        if (el.answer === el.correctAnswer) {
            return (
                <div className="green">Ответ правильный</div>
            )
        } else {
            return (
                <div className="red">Ответ неправильный</div>
            )
        }
    }
}

export default Results