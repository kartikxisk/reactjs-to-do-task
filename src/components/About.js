import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div className="about">
            <h4><span>Version</span> 1.1.0</h4>
            <h2>Feature</h2>
            <ul>
                <li>Add task</li>
                <li>Delete Task</li>
                <li>Set Reminder</li>
            </ul>
            <div className="text-center">
                <Link to="/">Go Back</Link>
            </div>

        </div>
    )

}

export default About