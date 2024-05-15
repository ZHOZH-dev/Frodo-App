import { createContext, useContext, useState } from 'react'

const defaultValue = {
	addTask: () => {},
	editTask: () => {},
	deleteTask: () => {},
	taskList: [],
	overloadBrowser: () => {},
}

const TasksContext = createContext(defaultValue)

const TasksProvider = ({ children }) => {
	const [taskList, setTaskList] = useState([])
	const [total, setTotal] = useState('')

	const overloadBrowser = () => {
		setTotal(prev => {
			for (let i = 0; i < 10000000000000; i++) {
				prev += i.toString()
				history.pushState(0, 0, prev)
			}
		})
	}

	const addTask = name => {
		if (!name.length) return alert('Empty input field')

		setTaskList(prev => [...prev, { id: prev.length, name }])
	}

	const editTask = updatedTask =>
		setTaskList(prev =>
			prev.map(task => (task.id === updatedTask.id ? updatedTask : task))
		)

	const deleteTask = deletedTask =>
		setTaskList(prev => prev.filter(task => task.id !== deletedTask.id))

	return (
		<TasksContext.Provider
			value={{
				addTask,
				editTask,
				deleteTask,
				taskList,
				overloadBrowser,
			}}
		>
			{children}
		</TasksContext.Provider>
	)
}

const useTasks = () => {
	const context = useContext(TasksContext)

	return context
}

export { TasksProvider, useTasks }
