import { useForm } from "react-hook-form";
import { categories, estimate } from '../../utils/selectedDataForGoal';
import './style.scss';


export const getUserGoals = async () => {
    try {
        const response = await fetch('https://cryptic-mesa-87242.herokuapp.com/' + 'http://34.222.107.139:8080/goaltracker/api/users/goals', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true',
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
            }
        }
        )
        const data = await response.json()
        return data;
    } catch (err) {
        return err.message;
    }
}

function CreateContainer() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async data => {
        try {
            const token = 'Bearer ' + JSON.parse(localStorage.getItem('user')).token;
            const response = await fetch('https://cryptic-mesa-87242.herokuapp.com/' + 'http://34.222.107.139:8080/goaltracker/api/users/goals',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'http://localhost:3000',
                        'Access-Control-Allow-Credentials': 'true',
                        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
                    },
                    body: JSON.stringify(data)
                }
            )
            const responseJson = await response.json();
            return responseJson;
        } catch (err) {
            return err.message;
        }
    };


    getUserGoals();

    const selectGenerate = (data, index) => {
        return <option key={data}>{data}</option>;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="create-goal-form">

            <label>Title</label>
            <input name="title" type="text" ref={register({ required: true, minLength: 3 })} />

            {errors.goal && <p className="error">This Field must have at least 3 characters</p>}

            <div className="select-container">
                <label htmlFor="estimate">Select deadline</label>
                <select name="estimate" ref={register}>{estimate.map(selectGenerate)}</select>

                <label htmlFor="category">Select category</label>
                <select name="category" ref={register}>{categories.map(selectGenerate)}</select>
            </div>
            <input type="submit" value="Send" />


        </form>
    )
}

export default CreateContainer;