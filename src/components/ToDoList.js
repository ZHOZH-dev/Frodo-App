import React, { useState } from 'react'
import Task from './Task'
import { useTasks } from '../context/TasksContext'

function ToDoList() {
	const { taskList, addTask } = useTasks()
	const [value, setValue] = useState('')
	return (
		<>
			<main>
				{!!taskList.length ? (
					taskList.map(task => <Task key={task.id} task={task} />)
				) : (
					<p className='no-tasks'>Add task pidoror</p>
				)}
			</main>
			<aside>
				<input
					value={value}
					onChange={e => setValue(e.target.value)}
					type='text'
					className='task-input'
					placeholder='Enter the task'
				></input>
				<button
					type='button'
					className='add-button'
					onClick={() => {
						addTask(value)
						setValue('')
					}}
				>
					ADD TODO
				</button>
			</aside>
		</>
	)
}

export default ToDoList
