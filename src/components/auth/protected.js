import React from 'react'

import {Redirect} from 'react-router-dom'
import Navigation from './navigation'


export default class Protected extends React.Component {
	state = {
		permit: this.props.authApi.isLogged || false
	}

	handleLogout = () => {
		const {authApi} = this.props

		authApi.logout(() => {
			this.setState({
				permit: false
			})
		})
	}

	render() {
		const {permit} = this.state

		if(!permit) {
			return <Redirect to='/login' />
		}

		return (
			<>
				<Navigation />

				<button onClick={this.handleLogout}>log out</button>
			</>
		)
	}
}
