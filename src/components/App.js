import React, { useState } from "react";
import "./../styles/App.css";
import Tasks from "./Tasks";

function App() {
	const [tasks, setTasks] = useState([])
	const [textArea, setTextArea] = useState('')

	const addTask = () => {
		if (textArea === '') return
		setTasks([...tasks, textArea])
		setTextArea('')
	}
	const onSave = (event) => {
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
