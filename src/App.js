import React from 'react';
import './App.css';
import Question from './components/Question'
import Results from './components/Results'


class App extends React.Component {
    state = {
        questions: [
            {
                text: "Сколько будет 1+2?",
                answers: [
                    {
                        text: "1"
                    },
                    {
                        text: "3"
                    }
                ],
                correctAnswer: 1
            },
            {
                text: "Сколько будет 1+3?",
                answers: [

                    {
                        text: "7"
                    },
                    {
                        text: "4"
                    }
                ],
                correctAnswer: 1
            },
            {
                text: "Сколько будет 2+2?",
                answers: [
                    {
                        text: "1"
                    },
                    {
                        text: "2"
                    },

                    {
                        text: "3"
                    },
                    {
                        text: "4"
                    },
                    {
                        text: "5"
                    }
                ],
                correctAnswer: 3
            }
        ],
        activeQuestion: 0,
        isResults: false
    };


    setQuestion() {
        let {questions, activeQuestion} = this.state;
        if (questions[activeQuestion]) {
            let q = questions[activeQuestion];
            return <Question question={q} answers={q.answers} setAnswer={this.setAnswer.bind(this)}/>
        }
        return null
    }

    changeQuestion(pos) {
        let {activeQuestion, questions} = this.state;
        let nextQuestion = activeQuestion;
        if (pos === 'next') {
            nextQuestion = activeQuestion + 1
        } else if (pos === 'prev') {
            nextQuestion = activeQuestion - 1
        }
        if (questions[nextQuestion]) {
            this.setState({activeQuestion: nextQuestion})
        }
    }

    setAnswer(value) {
        let {questions, activeQuestion} = this.state;
        let question = questions[activeQuestion];
        if (question) {
            question.answer = value;
            this.setState({questions})
        }
    }

    getApp() {
        if (this.state.isResults) {
            return (
                <div className="App">
                    <Results questions={this.state.questions}/>
                </div>
            )
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        {this.setQuestion()}
                        <button disabled={this.state.activeQuestion === this.state.questions.length - 1}
                                className={this.state.activeQuestion === this.state.questions.length - 1 ? 'none' : ''}
                                onClick={() => {
                                    this.changeQuestion('next')
                                }}>след
                        </button>
                        <button
                            className={this.state.activeQuestion === this.state.questions.length - 1 ? '' : 'none'}
                            onClick={()=>{this.getResults()}}
                        >Посмотреть
                            результаты
                        </button>
                        <button disabled={this.state.activeQuestion === 0} onClick={() => {
                            this.changeQuestion('prev')
                        }}>пред
                        </button>
                    </header>
                </div>
            )
        }
    }

    getResults(){
        this.setState({isResults: true})
    }

    render() {
        return this.getApp()
    }
}


export default App;
