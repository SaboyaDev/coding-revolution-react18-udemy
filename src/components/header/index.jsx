import Nav from './Nav'
import { useState } from 'react'

const Header = ({ getKeywords }) => {
	let [active, setActive] = useState(false)
	let [keywords, setKeywords] = useState('')

	// const onChangeHandler = e => {
	// 	const value = e.target.value == '' ? false : true
	// 	setKeywords(e.target.value)
	// 	setActive(value)
	// }

	return (
		<header className={`${active}`}>
			<div className='logo'>Awesome News</div>
			<input type='text' onChange={getKeywords} />
			The keywords are: {keywords}
			<Nav />
		</header>
	)
}
export default Header
