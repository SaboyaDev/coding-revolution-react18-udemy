import NewsListItem from './NewsListItem'

const NewsList = ({ news }) => {
	const newsHandler = news.map(article => (
		<NewsListItem key={article.id} article={article} />
	))

	return (
		<>
			<h1>NewsList</h1>
			{newsHandler}
		</>
	)
}
export default NewsList
