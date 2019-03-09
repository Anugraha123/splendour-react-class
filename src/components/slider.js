import React, {
	Component
} from 'react'

import withStyles from 'react-jss'

const styles = {
	wrapper: {
		border: '1px solid #ccc',
		height: 500,
		width: 400,
		margin: '0 auto',
		position: 'relative'
	},

	imageWrapper: {
		height: 500
	},

	image: {
		display: 'none',
		width: '100%',
		height: '100%',
		objectFit: 'cover',

		'&.active': {
			display: 'block'
		}
	},

	indicatorWrapper: {
		position: 'absolute',
		width: '100%',
		height: 50,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},

	indicator: {
		width: 10,
		height: 10,
		backgroundColor: '#666',
		borderRadius: '100%',
		margin: '0 2px',

		'&.active': {
			backgroundColor: '#fff'
		}
	}
}

class Slider extends Component {
	state = {
		active: 0
	}

	componentDidMount = () => {
		this.interval = setInterval(()=> {
			this.setState((prevState) => ({
				active: (prevState.active + 1) % this.props.data.length
			}))
		}, 3000)
	}

	componentWillUnmount = () => {
		clearInterval(this.interval)
	}

	handlePrev = () => {
		this.setState({
			active: (this.state.active - 1 + this.props.data.length) % this.props.data.length
		})
	}

	handleNext = () => {
		this.setState({
			active: (this.state.active + 1) % this.props.data.length
		})
	}

	render() {
		const {
			classes,
			data
		} = this.props

		const {
			active
		} = this.state

		console.log(this)

		return (
			<div className={classes.wrapper}>
				<div className={classes.imageWrapper}>
					{
						data.map((item, key) => {
							const isActive = key === active

							return (
								<img
									key={'slider-' + key}
									src={item.image}
									className={
										`
											${classes.image}

											${isActive && 'active'}
										`
									}
									alt='slider'
								/>
							)
						})
					}
				</div>

				<div className={classes.indicatorWrapper}>
					<button onClick={this.handlePrev}>prev</button>

					{
						data.map((item, idx) => {
							const isActive = idx === active

							return (
								<div
									key={'indicator-' + idx}
									className={
										`
											${classes.indicator}
											${isActive && 'active'}
										`
									}
								/>
							)
						})
					}

					<button onClick={this.handleNext}>next</button>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Slider)
