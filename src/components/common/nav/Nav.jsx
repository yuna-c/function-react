import styles from './Nav.module.scss'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className={styles.Nav}>
      <ul>
        <li>
          <Link to="/">전체</Link>
        </li>
        <li>
          <Link to="/line">Line </Link>
        </li>
        <li>
          <Link to="/lineRefactoring">Line Refactoring</Link>
        </li>
        <li>
          <Link to="/scrollLine">Scroll Line</Link>
        </li>

        <li>
          <Link to="/hoverText">Hover Text</Link>
        </li>
        <li>
          <Link to="/imageHover">Image Hover</Link>
        </li>
        <li>
          <Link to="/imageGrid">Image Grid</Link>
        </li>
        <li>
          <Link to="/hoverInImage">Hover In Image(Grid 하위)</Link>
        </li>
        <li>
          <Link to="/localStorageInput">local storage Input</Link>
        </li>
        <li>
          <Link to="/LocalStorageInputArray">local storage Input Array</Link>
        </li>
      </ul>
    </div>
  )
}
