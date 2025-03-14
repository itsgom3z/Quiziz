import {Link} from 'react-router'
import supabase from '../supabaseConfig.jsx'

const QuestionCard = ({ data, onDelete }) => {

    const handleDelete = async () => {
        const { d, error } = await supabase
        .from('questions')
        .delete()
        .eq('id', data.id)
      
      if (error) {
        console.log(error)
      }
      if (data) {
        console.log(d)
        onDelete(data.id)
      }
    }

    return(
        <div className="question-card">
            <h3>{data.information?data.information:"No Information"}</h3>
            <p>{data.question}</p>
            <ul>
                <li>{data.options[0]}</li>
                <li>{data.options[1]}</li>
                <li>{data.options[2]}</li>
                <li>{data.options[3]}</li>
            </ul>
            <p>{data.answer}</p>
            <div className="delete" onClick={handleDelete}>X</div>
            <div className="buttons">
                <Link to={'/' + data.id}><i className="material-icons">edit</i></Link>
            </div>
        </div>
    )
}

export default QuestionCard