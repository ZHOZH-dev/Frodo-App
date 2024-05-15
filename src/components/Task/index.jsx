import { RiDeleteBin6Line } from 'react-icons/ri'
import { GrEdit } from 'react-icons/gr'
import { useState } from 'react'
import EditTask from './EditTask'
import { useTasks } from '../../context/TasksContext'

function Task({ task }) {
	const [editCheck, setEditCheck] = useState(false)
	const { editTask, deleteTask } = useTasks()

	const toggleEditMode = () => setEditCheck(prev => !prev)

	const editAndCloseTask = updatedTask => {
		editTask(updatedTask)
		toggleEditMode()
	}

	return (
		<div className='task-block'>
			<RiDeleteBin6Line
				className='delete-button'
				onClick={() => deleteTask(task)}
			/>
			<p className='task-name' onDoubleClick={toggleEditMode}>
				{task.name}
			</p>
			<GrEdit className='eddit-button' onClick={toggleEditMode} />
			{editCheck && <EditTask editTask={editAndCloseTask} task={task} />}
		</div>
	)
}

export default Task
