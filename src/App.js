import React from 'react'

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/auth/login'
import Protected from './components/auth/protected'

const authApi = {
	isLogged: false,
	login(callback) {
		this.isLogged = true

		callback()
	},
	logout(callback) {
		this.isLogged = false

		callback()
	}
}

const App = () => {
	return (
		<Router>
			<Switch>
				<Route
					path='/login'
					render={(props) => (
						<Login
							{...props}
							authApi={authApi}
						/>
					)}
				/>

				<Route
					path='/home'
					render={(props) => (
						<Protected
							{...props}
							authApi={authApi}
						/>
					)}
				/>

				<Route
					render={() => {
						if(authApi.isLogged) {
							return <Redirect to='/home' />
						}

						return <Redirect to='/login' />
					}}
				/>
			</Switch>
		</Router>
	)
}


export default App
