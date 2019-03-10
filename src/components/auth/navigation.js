import React from 'react'

import {BrowserRouter, Link, Route} from 'react-router-dom'

const Navigation = () => {
	return (
		<BrowserRouter>
			<>
				<li>
					<Link to='/home'>Home</Link>
				</li>

				<li>
					<Link to='/about'>About</Link>
				</li>

				<li>
					<Link to='/blog'>Blog</Link>
				</li>

				<Route path='/about' component={Page} />
				<Route path='/blog' component={Page} />
			</>
		</BrowserRouter>
	)
}

const Page = ({match}) => {
	return (
		<h1>{match.url}</h1>
	)
}

export default Navigation
