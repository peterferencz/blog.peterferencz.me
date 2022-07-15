import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
    <Navbar location={location}/>
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, <a href="https://peterferencz.me">Peter Ferencz</a>
      </footer>
    </div>
    </>
  )
}

export default Layout
