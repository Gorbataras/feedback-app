import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button';


function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setmessage] = useState('')



    const handleTextChange = (e) => {
        if (text === '') {
            setbtnDisabled(true)
            setmessage(null)
        } else if(text!== '' && text.trim().length <= 10) {
            setmessage('Text must be at least 10 characters')
            setbtnDisabled(true)
        } else {
            setmessage(null)
            setbtnDisabled(false)
        }
        setText(e.target.value)
    }

  return <Card>
      <form >
          <h2>How would you rate your service with us?</h2>

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