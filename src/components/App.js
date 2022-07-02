import React, { useState } from "react";
import "./../styles/App.css";
import Tasks from "./Tasks";

function App() {
	const [tasks, setTasks] = useState([])
	const [textArea, setTextArea] = useState('')
	const addTask = () => {
		setTasks([...tasks, textArea])
		setTextArea('')
	}
	const onSave = (event) => {
		if (event.target.value === '') return
		setTextArea(event.target.value)
	}
	return (
		<div id="main">
			<textarea id="task" onChange={onSave} value={textArea} />
			<button id="btn" onClick={addTask}>Add task</button>
			<Tasks tasks={tasks} setTasks={setTasks} />
		</div>
	);
}


export default App;
