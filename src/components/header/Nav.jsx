import { navItems } from '../../utilities/data'

const Nav = () => {
  return (
    <nav className="mainNav">
      <ul>
        {
          navItems.map(item => {
            const { id, link, title } = item
            return (
              <li className="navItem" key = { id } >
                <a href={ link }>{title}</a>
              </li>
          )})
        }
      </ul>
    </nav>
  )
}
export default Nav