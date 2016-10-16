import React from 'react'
import Carousel from "./Carousel"

const Wenda = () =>{
    const features = [
        {
            url:"专业.png",
            name:"专业",
            des:"这里有经验丰富的员工做导师，他们奋斗在公司一线，担当着各种职务，在这里等待解决你的问题."
        },
        {
            url:"神秘.png",
            name:"神秘",
            des:"这里有海量职场相关的问题，并有专业人士解答，付1元钱，就可以偷听到其他问题答案的语音."
        },
        {
            url:"解惑.png",
            name:"解惑",
            des:"这里有资深导师供你提问，写下困扰你有关工作、实习的问题，让导师用他们的声音为你答疑解惑."
        },
    ]
    const tutors = [
        {
            url:"倪龙云.jpg",
            name:"倪龙云",
            intro:<div className="intro">10年互联网行业大咖<br />丹诚资本合伙人</div>
        },
        {
            url:"韩东君.jpg",
            name:"韩东君",
            intro:<div className="intro">前中国校园新媒体联盟执行主席<br />帝都学生圈、学生价等自媒体创始人</div>
        },
        {
            url:"谷元庆.jpg",
            name:"谷元庆",
            intro:<div className="intro">腾讯公司产品经理曾在阿里、网易任职<br />著有《产品经理面试攻略》</div>
        },
        {
            url:"徐鹏.jpg",
            name:"徐鹏",
            intro:<div className="intro">今日头条架构工程师<br />编著《Hadoop 2.X HDFS源码解析》</div>
        },
    ]
    return (
        <main className="wenda">
            <Carousel>
            <section className="screen-1"  id="screen-1">
                <img className="background" src={require("../../images/wenda/7点问答 首图.jpg")} alt="7点问答 首图.jpg"/>
                <div className="title-2">大学生的职场、找工作、找实习的问答平台</div>
                <div className="title-1">大学生的问答平台—7点问答</div>
                <img className="qr" src={require("../../images/wenda/7点问答 微信公众号.png")} alt="7点问答 微信公众号.png" />
            </section>
            <section className="screen-2" id="screen-2">
                <div className="features">
                {
                    features.map((item,index)=>(
                        <div className="feature-item" key={index}>
                            <img src={require(`../../images/wenda/${item.url}`)} alt={item.name} />
                            <div className="name">
                                <img src={require("../../images/wenda/Oval 10.png")} alt="·"/>
                                {item.name}
                            </div>
                            <div className="des">{item.des}</div>
                        </div>
                    ))
                }
                </div>
            </section>
            <section className="screen-3 info" id="screen-3">
                <div className="divider" >
                    <img src={require("../../images/wenda/Path 19.png")} />
                </div>
                <div className="title">导师阵容</div>
                <div className="tutors" >
                {
                    tutors.map((item,index)=>(
                        <div key={index} className="tutor-item" >
                            <img src={require(`../../images/wenda/${item.url}`)} alt={item.url} />
                            <div className="name">{item.name}</div>
                            {item.intro}
                        </div>
                    ))
                }
                </div>
            </section>
            </Carousel>
        </main>
    )
}

export default Wenda
