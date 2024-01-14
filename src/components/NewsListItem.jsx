const NewsListItem = ({ article }) => {
  const {title, feed} = article
  return (
    <div className='news_item'>
         <h3>     { title }</h3>
              <div>
        <p>{feed}</p>
      </div>
    </div>
  )
}
export default NewsListItem