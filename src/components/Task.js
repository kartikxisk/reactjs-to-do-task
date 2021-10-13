import deleteBtn from '../assets/delete.svg'
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder-true' : 'reminder-false'}`} onDoubleClick={() => onToggle(task.id)}>
            <div className="left-side-task">
                <h3>{task.text}</h3>
                <p>{task.day}</p>
            </div>
            <button className="right-side-task" onClick={() => onDelete(task.id)}>
                <img src={deleteBtn} alt="delete button" />
            </button>
        </div>
    )
}

export default Task
