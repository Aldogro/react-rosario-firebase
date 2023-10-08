import { useEffect, useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask, taskToEdit, onEditTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.data().title)
            setDescription(taskToEdit.data().description)
            setDone(taskToEdit.data().done)
        }
    }, [taskToEdit])

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setDone(false);
    };

    const onAddClick = () => {
        onAddTask({ title, description, done });
        clearForm();
    };

    const onEditClick = () => {
        onEditTask({ title, description, done});
        clearForm();
    }

    const disableActionButton = () => {
        return !title.length || !description.length;
    }

    return (
        <form className="tasks-form">
            <fieldset>
                <legend>
                    <h1>Tasks Form</h1>
                </legend>
                <div className="form-wrapper">
                    <input
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        type="text"
                        value={title}
                    />
                    <textarea
                        id="description"
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <div className="checkbox">
                        <label htmlFor="done">Done</label>
                        <input
                            type="checkbox"
                            id="done"
                            name="done"
                            onChange={() => setDone(!done)}
                            checked={done}
                        />
                    </div>
                    {taskToEdit ? (
                        <button
                            type="button"
                            onClick={onEditClick}
                            disabled={disableActionButton()}
                        >
                            Edit Item
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={onAddClick}
                            disabled={disableActionButton()}
                        >
                            Add Item
                        </button>

                    )}
                </div>
            </fieldset>
        </form>
    );
};

export default TaskForm;
