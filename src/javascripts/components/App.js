import React from 'react'
import { Link, IndexLink } from 'react-router'
import Footer from "./Footer"

const App = ({children}) =>{
    return (
      <div className="container">
        <header>
            <div className="logo">
                <img src={require("../../images/7点-橙色.png")} alt="logo" />
            </div>
            <div className="title">
                <img src={require("../../images/7点一刻.png")} alt="七点一刻" />
            </div>
            <ul className="navs">
                <li key="1"><Link className="nav-item " activeClassName="active" to="/group">7点社群</Link></li>
                <li key="2"><Link className="nav-item " activeClassName="active" to="/wenda">7点问答</Link></li>
                <li key="3"><Link className="nav-item " activeClassName="active" to="/school">7点学院</Link></li>
                <li key="4"><Link className="nav-item " activeClassName="active" to="/about">关于我们</Link></li>
            </ul>
        </header>
        {children}
        <Footer />
      </div>
    )
}

export default App
