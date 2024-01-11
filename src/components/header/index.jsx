import Nav from './Nav'

const Header = () => {
  const onChangeHandler = (e) => {
    console.log(e.target.value)
  }

  return (
    <header>
      <div className='logo'>Awesome News</div>
      <input
        type="text"
        onChange={onChangeHandler}
      />
      <Nav  />
    </header>
  )
}
export default Header