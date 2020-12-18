import { useForm } from "react-hook-form";
import { categories, estimate } from '../../utils/selectedDataForGoal';
import './style.scss';

function CreateContainer() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(JSON.stringify(data));
    };

    const selectGenerate = (data, index) => {
        return <option>{data}</option>;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="create-goal-form">

            <label>Titlel</label>
            <input name="goal" type="text" ref={register({ required: true, minLength: 3 })} />

            {errors.goal && <p className="error">This Field must have at least 3 characters</p>}

            <label>Select deadline</label>
            <select name="deadline" ref={register}>{estimate.map(selectGenerate)}</select>;

            <label>Select category</label>
            <select name="category" ref={register}>{categories.map(selectGenerate)}</select>;

            <label>Do you want to confirm progress?</label>
            <input type="checkbox" placeholder="Do you want to confirm progress?" name="Confirm" ref={register} />

            <input type="submit" />


        </form>
    )
}

export default CreateContainer;