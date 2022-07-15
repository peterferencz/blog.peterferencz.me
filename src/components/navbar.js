import * as React from "react"
import { Link } from "gatsby"

const Navbar = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <nav>
        <Link to="/">blog.peterferencz.me</Link>
    </nav>
  )
}

export default Navbar