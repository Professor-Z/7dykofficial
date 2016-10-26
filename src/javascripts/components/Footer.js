import React from 'react'
import { Link } from 'react-router'

const Footer = () =>{
    return (
        <footer>
            <div className="links">
                <div className="link">
                <Link to="/group">7点社群</Link>
                ｜
                <Link to="/wenda">7点问答</Link>
                ｜
                <Link to="/school">7点学院</Link>
                ｜
                <Link to="/about">关于我们</Link>
                </div>
                <div className="link gray">早一刻  看看象牙塔外面的世界 </div>
                <div className="link gray">7点一刻由北京君宏科技有限公司开放许可｜京ICP备15019226号－1 </div>
            </div>
            <div className="right">
                <div className="logo">
                    <img src={require("../../images/about/公司LOGO.png")} alt="七点一刻" />
                </div>
                <div className="contact">
                    <div className="contact-item gray">招聘联系邮箱  hr@7dyk.com</div>
                    <div className="contact-item gray">商务合作邮箱  lihao@7dyk.com</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
