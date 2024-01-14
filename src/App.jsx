import { useState } from 'react'
import Header from './components/header/index'
import NewsList from './components/NewsList'
import './styles/styles.css'
import { newsData } from './utilities/data'

const App = () => {
	let [news, setNews] = useState(newsData)

	const getKeywords = e => {
		let keywords = e.target.value
		let filtered = newsData.filter(item => {
			return item.title.toLowerCase().indexOf(keywords) > -1
		})
		setNews(filtered)
	}

	return (
		<>
			<Header getKeywords={getKeywords} />
			<div className='container'>
				<NewsList news={news} />
			</div>
		</>
	)
}

export default App
