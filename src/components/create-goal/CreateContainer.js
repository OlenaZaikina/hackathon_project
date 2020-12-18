import { useForm } from "react-hook-form";
import './style.scss';

function CreateContainer() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="create-goal-form">
            <label>Goal</label>
            <input name="goal" type="text" ref={register({ required: true, minLength: 3 })} />
            {errors.goal && <p className="error">This Field must have at least 3 characters</p>}
            <label>Description</label>
            <input name="description" type="text" ref={register({ required: true, minLength: 3 })} />
            {errors.description && <p className="error">This Field must have more than 3 characters</p>}
            <input type="submit" />

        </form>
    )
}

export default CreateContainer;