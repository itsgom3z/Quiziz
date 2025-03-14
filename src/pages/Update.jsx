import { useParams, useNavigate } from 'react-router'
import {useState, useEffect} from 'react'
import supabase from '../supabaseConfig.jsx'


const Update = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [information, setInformation] = useState('')
    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState([])
    const [answer, setAnswer] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        //Validates the states that should have a value
        if (!question || !options || !answer) {
            setFormError('Please fill in all the fields correctly')
            return
        }

        const  {data,error} = await supabase
        .from('questions')
        .update([{information, question, options, answer}])
        .eq('id',id)
        //ensures that the navigation happens only if the insertion was successful
        if (!error) {
            console.log(data)
            navigate("/");
        }


    }

    useEffect(() => {
        const fetchQuestions = async () => {
            const { data, error} = await supabase
            .from('questions')
            .select()
            .eq('id', id)
            .single()

            if (error) {
                navigate('/', {replace: true})
            }
            if (data) {
                setInformation(data.information)
                setQuestion(data.question)
                setOptions(data.options)
                setAnswer(data.answer)
            }
        }
        fetchQuestions()
    }, [id, navigate])

    return (
        <div className="page update">
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

                <button>Update Question</button>
                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    )
}

export default Update