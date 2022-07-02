import React, { useState } from "react"

const Task = ({ name, setTasks, tasks }) => {
  const [edit, setEdit] = useState(false)
  const [textArea, setTextArea] = useState('')

  const onEdit = () => {
    setEdit(prev => !prev)
    setTextArea(name)
  }

  const onDelete = () => {
    setTasks(tasks.filter(t => t !== name))
  }

  const onSave = () => {
    if(textArea === '') return
    setTasks(tasks.map(task => {
      if(task === name) {
        return textArea
      }
      return task
    }))
    setEdit(prev => !prev)
  }
  return (
    <li>
      {edit
        ? <div>
          <textarea className="editTask" value={textArea} onChange={(event) => setTextArea(event.target.value)} />
          <button className="saveTask" onClick={onSave}>Save Task</button>
        </div>
        : <div>
          <div className="list">{name}</div>
          <button className="edit" onClick={onEdit}>Edit</button>
          <button className="delete" onClick={onDelete}>Delete</button>
        </div>
      }
    </li>
  )
}


const Tasks = ({ tasks, setTasks }) => {
  return <ul>
    {tasks.map(task => <Task key={task} name={task} setTasks={setTasks} tasks={tasks} />)}
  </ul>
}

export default Tasks