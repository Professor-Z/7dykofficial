import React from 'react'
import { Link } from 'react-router'

const Footer = () =>{
    return (
        <footer>
            <div className="links">
                <div className="link">7点社群｜7点问答｜7点学院｜关于我们</div>
                <div className="link gray">早一刻  看看象牙塔外面的世界 </div>
                <div className="link gray">7点一刻由北京君宏科技有限公司开放许可｜京ICP备15019226号－1 </div>
            </div>
            <div className="logo">
                <img src={require("../../images/about/公司LOGO.png")} alt="七点一刻" />
            </div>
            <div className="contact">
                <div className="contact-item gray">招聘联系邮箱  hr@7dyk.com</div>
                <div className="contact-item gray">商务合作邮箱  lihao@7dyk.com</div>
            </div>
        </footer>
    )
}

export default Footer
