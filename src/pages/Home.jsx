import {useEffect, useState} from 'react'
import supabase from "../supabaseConfig.jsx"

//components
import QuestionCard from "../components/questionCard.jsx";

const Home = () => {
    const [fetchError, setFetchError] = useState(null);
    const [questions, setQuestions] = useState(null);

    const handleDelete = (id) => {
        setQuestions(prevQuestions => {
            return prevQuestions.filter(q => q.id !== id)
        })
    }

    useEffect(() => {
        const fetchQuestions = async () => {
            const { data, error } = await supabase
                .from('questions')
                .select()

            if (error){
                setFetchError('Could not fetch the Questions')
                setQuestions(null)
                console.log(error)
            }
            if (data){
                setQuestions(data)
                setFetchError(null)
            }
        }
        //Calling the async function
        fetchQuestions()       
    }, [])

    return (
        <div className="page home">
            {fetchError && (<p>{fetchError}</p>)}
            {questions && (
                <div className="questions">
                    <div className="question-grid">
                        {questions.map(data => (
                            <QuestionCard key={data.id} data={data} onDelete={handleDelete}/>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}

export default Home