import React from 'react'
import {Link} from 'react-router-dom'

const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
        <div className='display-ans-votes'>
            <p>{question.upVotes - question.downVotes}</p>
            <p>votes</p>
        </div>
        <div className='display-ans-votes'>
            <p>{question.noOfAnswers}</p>
            <p>answers</p>
        </div>
        <div className='display-question-detail'>
            <Link to={`/Questions/${question._id}`} className='question-title-link'>
            {question.questionTitle}
            </Link>
            <div className='display-tags-time'>
                <div className='display-tag'>
                    {
                        question.questionTags.map((tag) => (
                            <p key={tag}>{tag}</p>

                        ))
                    }

                </div>
                <p className='display-time'>
                    asked on {question.askedOn} by {question.userPosted}
                </p>
            </div>

        </div>
    </div>
  )
}

export default Questions