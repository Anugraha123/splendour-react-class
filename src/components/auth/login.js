import React from 'react'

import {Redirect} from 'react-router-dom'

export default class Login extends React.Component {
	state = {
		permit: this.props.authApi.isLogged || false
	}

	handleLogin = () => {
		const {authApi} = this.props

		authApi.login(() => {
			this.setState({
				permit: true
			})
		})
	}

	render() {
		const {permit} = this.state

		if(permit) {
			return <Redirect to='/home' />
		}

		return (
			<button onClick={this.handleLogin}>login</button>
		)
	}
}
