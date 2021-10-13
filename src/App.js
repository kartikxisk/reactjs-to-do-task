import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    []
  )
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fatchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])
  //fatch tasks
  const fatchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  //fatch task
  const fatchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
  //add task
  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
    // console.log(task)
    // const id = Math.floor(Math.random() * 10000) + 1

    // const newTask = { id, ...task }
    // // console.log(newTask)
    // setTasks([...tasks, newTask])

  }
  //delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //task reminder 
  const taskReminder = async (id) => {
    const taskToToggle = await fatchTask(id)
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

          <Route path='/' exact render={(props) => {
            return (
              <>
                {showAddTask && <AddTask onAdd={addTask} />}

                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={taskReminder} widthHandler={showAddTask} /> : ''}
              </>
            )

          }} />
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </div>
    </Router>

  );
}

export default App;
