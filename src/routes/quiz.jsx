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
    {qText: 'How many pairs of wings does a bee have?', ansA: '1', ansB: '2', ansC: '3', ansD: '4'},
    {qText: 'How many species of bees are there in the world?', ansA: 'less than 1000', ansB: '5 thousand', ansC: '10 thousand', ansD: 'More than 20 thousand'},
    {qText: 'What do bees collect from flowers?', ansA: 'Nectar & Petals', ansB: 'Pollen & Chlorophyll ', ansC: 'Nectar & Pollen', ansD: 'Gummi Bears'},
    {qText: 'How many eyes does a bee have?', ansA: '2', ansB: '4', ansC: '5', ansD: '20'},
  ]

const handleClick = () => {
  curAnswer && setAnswers({...answers, 1: curAnswer})
  setCurAnswer('')
  setCurQuestion(curQuestion+1)
}

    return (
        <div>
       <p>{questions[curQuestion].qText}</p>
       <div id="quiz">
       <input id='answerA' type='radio' name={`question${curQuestion+1}`} value={questions[curQuestion].ansA} onChange={() => setCurAnswer(questions[curQuestion].ansA)} />
       <label htmlFor='answerA'>{questions[curQuestion].ansA}</label>
       <input id='answerB' type='radio' name={`question${curQuestion+1}`} value={questions[curQuestion].ansB} onChange={() => setCurAnswer(questions[curQuestion].ansB)}/>
       <label htmlFor='answerB'>{questions[curQuestion].ansB}</label>
       <input id='answerC' type='radio' name={`question${curQuestion+1}`} value={questions[curQuestion].ansC} onChange={() => setCurAnswer(questions[curQuestion].ansC)}/>
       <label htmlFor='answerC'>{questions[curQuestion].ansC}</label>
       <input id='answerD' type='radio' name={`question${curQuestion+1}`} value={questions[curQuestion].ansD} onChange={() => setCurAnswer(questions[curQuestion].ansD)}/>
       <label htmlFor='answerD'>{questions[curQuestion].ansD}</label>

       </div>
       
       <button onClick={handleClick}>Next</button>
     </div>
    )
}