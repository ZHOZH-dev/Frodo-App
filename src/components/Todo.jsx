import React, { useState, useRef, useEffect } from 'react'
import Task from './Task'
import { useTasks } from '../context/TasksContext'

// @TODO Don't be a gay

function ToDoList() {
	const { taskList, addTask } = useTasks()
	const inputRef = useRef(null)
	const [value, setValue] = useState('')

	useEffect(() => {
		if (!inputRef.current) return

		inputRef.current.focus()
	}, [])

	const onKeyPressed = e => e.key === 'Enter' && onAdd()

	const onAdd = () => {
		addTask(value)
		setValue('')
	}
	return (
		<>
			<main>
				{!!taskList.length ? (
					taskList.map(task => <Task key={task.id} task={task} />)
				) : (
					<p className='no-tasks'>Add task pidor</p>
				)}
			</main>
			<aside>
				<input
					ref={inputRef}
					value={value}
					onChange={e => setValue(e.target.value)}
					type='text'
					className='task-input'
					onKeyPress={onKeyPressed}
					placeholder='Enter the task'
				></input>
				<button type='button' className='add-button' onClick={onAdd}>
					ADD TODO
				</button>
			</aside>
		</>
	)
}

export default ToDoList
