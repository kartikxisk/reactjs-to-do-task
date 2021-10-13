import Task from './Task'
const Tasks = ({ tasks, onDelete, onToggle, widthHandler }) => {
    return (
        <div className={`tasks ${widthHandler ? 'custom-height' : 'full-height'}`}>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}


export default Tasks
