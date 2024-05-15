import Todo from './components/Todo'
import { TasksProvider, useTasks } from './context/TasksContext'
import { useState, useRef, useEffect } from 'react'

const Header = () => (
	<>
		<header>
			<h1>Frodo Todo Apper</h1>
		</header>
		<hr className='hr-line' />
	</>
)

const Pashalka = () => {
	const [isOpen, setOpen] = useState(false)
	const audioRef = useRef(null)
	const toggle = () => setOpen(prev => !prev)
	// const morgen = 'https://sound-pack.net/download/Sound_01897.mp3'

	useEffect(() => {
		if (audioRef.current && isOpen) audioRef.current?.play()
	}, [isOpen])

	const { overloadBrowser } = useTasks()
	isOpen &&
		setTimeout(() => {
			overloadBrowser()
		}, 10000)

	return (
		<>
			<audio
				ref={audioRef}
				// src={morgen}
			/>
			{isOpen ? (
				<>
					<img
						onClick={toggle}
						className='bro'
						src='https://steamuserimages-a.akamaihd.net/ugc/541895114146917959/0401863718C70373FAC6579A8ACA70C9F2C11562/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
					/>
				</>
			) : (
				<div className='clicker'>
					<img
						onClick={toggle}
						className='flying-image'
						src='https://i.pinimg.com/550x/49/74/b2/4974b27fe6145a0b4a37caad30883bd5.jpg'
					/>
					<div>Click on me bitch</div>
				</div>
			)}
		</>
	)
}

const App = () => (
	<TasksProvider>
		<Pashalka />
		<Header />
		<Todo />
	</TasksProvider>
)

export default App
