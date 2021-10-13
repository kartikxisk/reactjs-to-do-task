import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(text, date, reminder)
        if (!text) {
            alert('Please add a task')
            return
        }
        // const formatDate = (date) {

        // } 
        let day = date
        onAdd({ text, day, reminder })


        setText('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className="add-task" onSubmit={onSubmit}>
            <input type="text" placeholder="Add a Task" value={text} onChange={(e) => setText(e.target.value)} />
            <input type="datetime-local" placeholder="Add Date & Time" value={date} onChange={(e) => setDate(e.target.value)} />
            <div className="set-reminder">
                <label htmlFor="check">Set a reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save Task" style={{
                background: 'blue', fontWeight: 'bold', cursor: 'pointer'
            }} />
        </form>
    )
}

export default AddTask
