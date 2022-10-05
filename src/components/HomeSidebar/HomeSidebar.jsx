import React from 'react'
import './HomeSidebar.css'

import {Link,useLocation,useNavigate} from 'react-router-dom'
import QuestionList from './QuestionList'
const HomeSidebar = () => {

  const user = 1
  const navigate = useNavigate()

  var questionsList = [{
    _id:1,
    upVotes:3,
    downVotes:2,
    noOfAnswers: 2,
    questionTitle :"what is a function?",
    questionBody :"It meant to be",
    questionTags :["java","nodejs","reactjs","mongodb","expresssjs"],
    userPosted:"alfee",
    userId:1,
    askedOn:"sep 10",
    answer : [{
      answerBody:"Answer",
      userAnswered:"ehtesham",
      answeredOn:"sep 11",
      userId:2
    }]

  },{
    _id:2,
    upVotes:3,
    downVotes:2,
    noOfAnswers: 0,
    questionTitle :"what is a function?",
    questionBody :"It meant to be",
    questionTags :["javascript","R","python"],
    userPosted:"alfee",
    userId:1,
    askedOn:"sep 10",
    answer : [{
      answerBody:"Answer",
      userAnswered:"ehtesham",
      answeredOn:"sep 11",
      userId:2
    }]
  },{
    _id:3,
    upVotes:3,
    downVotes:2,
    noOfAnswers: 0,
    questionTitle :"what is a  function?",
    questionBody :"It meant to be",
    questionTags :["javascript","R","python"],
    userPosted:"alfee",
    userId:1,
    askedOn:"sep 10",
    answer : [{
      answerBody:"Answer",
      userAnswered:"ehtesham",
      answeredOn:"sep 11",
      userId:2
    }]
  }
]

  const location = useLocation()
  

  const redirect = () => {
    if(user == null){
    alert("logon or signup to ask question")
    navigate('./Auth')
    } else{
      navigate('./AskQuestion')
    }
  }
  return (
    <div className="main-bar">
      <div className='main-bar-header'>
        {
          location.pathname==='/'?<h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button  onClick={redirect} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList === null ?
          <h1>loading...</h1> :
          <>
          <p> { questionsList.length } questions</p>
          <QuestionList  questionsList={questionsList}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeSidebar