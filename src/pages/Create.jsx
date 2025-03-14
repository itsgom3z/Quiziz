import {useState} from 'react'
import {useNavigate} from 'react-router'
import supabase from '../supabaseConfig.jsx'

const Create = () => {
    let navigate = useNavigate()

    const [information, setInformation] = useState('')
    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState([])
    const [answer, setAnswer] = useState('')
    const [formError, setFormError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        //Validates the states that should have a value
        if (!question || !options || !answer){
            setFormError('Please fill in all the fields correctly')
            return
        }
        
        const { data, error } = await supabase
            .from('questions')
            .insert([{information, question, options, answer}])
            //ensures that the navigation happens only if the insertion was successful, preventing a redirection in case of an error.
            if (!error) {
                console.log(data)
                navigate("/");
            }
    }

    return (
        <div className="page create">
            <form onSubmit={handleSubmit}>
                <label htmlFor="information">Information:</label>
                <input
                    type="text"
                    id="information"
                    value={information}
                    onChange={(e)=>setInformation(e.target.value)}
                />

                <label htmlFor="question">Question:</label>
                <textarea
                    type="text"
                    id="question"
                    value={question}
                    onChange={(e)=>setQuestion(e.target.value)}
                />

                <label htmlFor="options">Options:</label>
                <input
                    type="text"
                    id="options"
                    value={options}
                    onChange={(e)=>setOptions(e.target.value)}
                />

                <label htmlFor="answer">Answer:</label>
                <input
                    type="text"
                    id="answer"
                    value={answer}
                    onChange={(e)=>setAnswer(e.target.value)}
                />

                <button>Create Question</button>
                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    )
}

export default Create