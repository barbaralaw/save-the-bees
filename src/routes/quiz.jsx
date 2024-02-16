import { useState } from "react";

export const BeeQuiz = () => {
    // const [score, setScore] = useState(0)
  const [curQuestion, setCurQuestion] = useState(0)
  const [curAnswer, setCurAnswer] = useState('')
  const [answers, setAnswers] = useState({
    1: '',
    2: '',
    3: ''
  })

  const questions = [
    {qText: 'this is a question 1', ansA: 'Option 1', ansB: 'Option 2', ansC: 'Option 3', ansD: 'Option 4'},
    {qText: 'this is a question 2', ansA: 'Option 1', ansB: 'Option 2', ansC: 'Option 3', ansD: 'Option 4'},
    {qText: 'this is a question 3', ansA: 'Option 1', ansB: 'Option 2', ansC: 'Option 3', ansD: 'Option 4'},
    {qText: 'this is a question 4', ansA: 'Option 1', ansB: 'Option 2', ansC: 'Option 3', ansD: 'Option 4'},
  ]

const handleClick = () => {
  curAnswer && setAnswers({...answers, 1: curAnswer})
  setCurAnswer('')
  setCurQuestion(curQuestion+1)
}

    return (
        <div>
       <p>{questions[curQuestion].qText}</p>
       <input id='answerA' type='radio' name={`question${curQuestion+1}`} value={questions[curQuestion].ansA} onChange={() => setCurAnswer(questions[curQuestion].ansA)} />
       <label htmlFor='answerA'>{questions[curQuestion].ansA}</label>
       <input id='answerB' type='radio' name={`question${curQuestion+1}`} value={questions[curQuestion].ansB} onChange={() => setCurAnswer(questions[curQuestion].ansB)}/>
       <label htmlFor='answerB'>{questions[curQuestion].ansB}</label>
       <input id='answerC' type='radio' name={`question${curQuestion+1}`} value={questions[curQuestion].ansC} onChange={() => setCurAnswer(questions[curQuestion].ansC)}/>
       <label htmlFor='answerC'>{questions[curQuestion].ansC}</label>
       <input id='answerD' type='radio' name={`question${curQuestion+1}`} value={questions[curQuestion].ansD} onChange={() => setCurAnswer(questions[curQuestion].ansD)}/>
       <label htmlFor='answerD'>{questions[curQuestion].ansD}</label>
       <button onClick={handleClick}>Next</button>
     </div>
    )
}