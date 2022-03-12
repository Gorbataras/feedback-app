import React, {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext';


function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setmessage] = useState('')
    const [rating, setRating] = useState(10)

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const minReviewLength = 10


    const handleTextChange = (e) => {
        if (text === '') {
            setbtnDisabled(true)
            setmessage(null)
        } else if(text !== '' && text.trim().length <= minReviewLength) {
            setmessage('Text must be at least 10 characters')
            setbtnDisabled(true)
        } else {
            setmessage(null)
            setbtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText('')
        }
    }

  return <Card>
      <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
            <RatingSelect select={setRating} selected={rating}/>
          <div className="input-group">
              <input 
              onChange={handleTextChange}
              type="text" 
              placeholder='Write a review'
              value={text}
              />
              <Button type='submit' isDisabled={btnDisabled} >Submit</Button>
          </div>
          {message && <div className='message'>{message}</div>}
      </form>
  </Card>
}

export default FeedbackForm