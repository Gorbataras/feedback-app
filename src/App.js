import {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {

    const [feedback, setfeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setfeedback(feedback.filter((item) => item.id !== id))
        }
        
    }

    return (
        <>
        <Header />
        <div className="container">
            <FeedbackForm />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback}
            handleDelete={deleteFeedback}
            />
        </div>
        </>   
    )
}

export default App