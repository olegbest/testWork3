import React from 'react';


function Question(props) {
    return (
        <div className="question">
            <div className="text">
                {props.question.text}
            </div>
            <div className="answers">
                {getAnswers()}
            </div>
        </div>
    );

    function getAnswers() {
        if (props.isResults) {
            return props.answers.map((el, index) => {
                return (
                    <div className="answer" key={el.text + Math.random()}>
                        <input type="radio" value={'option-' + index} checked={+index === +props.question.answer} disabled={true}/>
                        <span>{el.text}</span>
                    </div>
                )
            })
        } else {
            return props.answers.map((el, index) => {
                return (
                    <div className="answer" key={el.text + Math.random()}>
                        <input type="radio" value={'option-' + index} name="ans" onChange={() => {
                            props.setAnswer(index)
                        }} checked={index === props.question.answer}/>
                        <span>{el.text}</span>
                    </div>
                )
            })
        }
    }
}

export default Question