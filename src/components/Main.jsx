import React from 'react'

export default function Main(props) {
  return (
    <div className='Main'>
      <div className="Question">
        <h1>{props.selectedQuestion.question}</h1>
      </div>
      <div className="Answer">
        <h4>{props.selectedQuestion.answer}</h4>
      </div>
    </div>
  )
}
