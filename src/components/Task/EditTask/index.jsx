import { useState, useEffect, useRef } from 'react'

function ToEditTask({ editTask, task }) {
	const [value, setValue] = useState(task.name)
	const inputRef = useRef(null)

	useEffect(() => {
		if (!inputRef.current) return

		inputRef.current.focus()
	}, [])

	const onSave = () => editTask({ id: task.id, name: value })

	const onKeyPressed = e => e.key === 'Enter' && onSave()

	return (
		<div className='edit-block'>
			<input
				ref={inputRef}
				value={value}
				onChange={e => setValue(e.target.value)}
				type='text'
				className='task-input'
				placeholder='Edit the task'
				onKeyPress={onKeyPressed}
			/>
			<button type='button' className='add-button' onClick={onSave}>
				EDIT
			</button>
		</div>
	)
}

export default ToEditTask
