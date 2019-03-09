import React, {useState} from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink
} from 'react-router-dom'

const App = () => {
	const [refresh, setRefresh] = useState(false)

	console.log('refresh', refresh)

	return (
		<Router keyLength={0} forceRefresh={refresh}>
			<div>
				<NavLink
					exact
					isActive={(match) => {
						console.log(match)
					}}
					to='/menu'
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}
				>
					Menu
				</NavLink>

				<Route path='/menu' component={Menu}/>

				<button onClick={() => setRefresh(true)}>refresh</button>
			</div>
		</Router>
	)
}

const Menu = ({match}) => {
	return (
		<ul>
			<li>
				<Link to={`${match.url}/momo`}>Momo</Link>
			</li>

			<Route
				path={`${match.path}/momo`}
				component={Momo}
			/>
		</ul>
	)
}

const Momo = ({match}) => {
	return (
		<ul>
			<li><Link to={`${match.url}/buff`} innerRef={refCall}>Buff</Link></li>
			<li><Link to={`${match.url}/chicken`}>Chicken</Link></li>

			<Route
				path={`${match.path}/:type`}
				component={Ordered}
			/>
		</ul>
	)
}

function refCall(node) {
	console.log(node)
}

const Ordered = ({match, ...rest}) => {
	console.log(match, rest)
	return (
		<h1>{match.params.type} momo is ordered</h1>
	)
}

export default App
