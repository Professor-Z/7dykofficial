import React from 'react'
import Carousel from "./Carousel"
const Group = () =>{
    const events = [
        {
            url:"7点直播.png",
            name:"7点直播"
        },
        {
            url:"7点读书.png",
            name:"7点读书"
        },
        {
            url:"7点open day.png",
            name:"7点open day"
        },
    ]
    return (
        <main className="group">
            <Carousel>
                <section className="screen-1" id="screen-1">
                    <img src={require("../../images/group/未标题-8.jpg")} alt="未标题-8.jpg"/>
                    <div className="title-1">早一点 带你看象牙塔外的世界</div>
                    <div className="title-2">7点一刻 提升你的求职竞争力</div>
                </section>
                <section className="screen-2" id="screen-2">
                    <div className="title-1">大学生职业学习社群——7点社群</div>
                    <div className="title-2">带学生了解社会职场，走好进入社会职场的第一步！</div>
                    <div className="title-3">7点一刻汇集各路前辈齐助阵，为学生答疑解惑。是大学生融入社会的捷径。</div>
                    <div className="title-4">7点社群的服务内容</div>
                    <div className="title-5">></div>
                    <div className="events">
                    {
                        events.map((item,index)=>(
                            <div className="event-item" key={index}>
                                <img src={require(`../../images/group/${item.url}`)} alt={item.name} />
                                <div className="name">{item.name}</div>
                            </div>
                        ))
                    }
                    </div>
                </section>
                <section className="screen-3 info" id="screen-3">
                    <div className="titles">
                        <div className="title-1">7点直播</div>
                        <div className="title-2">在家线上听讲座</div>
                        <div className="title-3">通过直播新媒体，把线下讲座搬到线上。</div>
                        <div className="title-4">帮助更多学生向前辈取经,提升自己的竞争力.</div>
                    </div>
                    <div className="image">
                        <img src={require("../../images/group/7点直播 插画.png")} alt="7点直播" />
                    </div>
                </section>
                <section className="screen-4 info" id="screen-4">
                    <div className="titles">
                        <div className="title-1">7点读书</div>
                        <div className="title-2">衔接学校和职场</div>
                        <div className="title-3">每本书都是各行业大牛推荐的最实用的书籍。帮助学生迅速了解社会、职场。</div>
                        <div className="title-4">引领学生在求职的路上越走越顺</div>

                    </div>
                    <div className="image">
                        <img src={require("../../images/group/7点读书 插画.png")} alt="7点直播" />
                    </div>
                </section>
                <section className="screen-5 info" id="screen-5">
                    <div className="titles">
                        <div className="title-1">7点OPEN DAY</div>
                        <div className="title-2">近距离了解名企</div>
                        <div className="title-3">与京东、联想、搜狐、搜狗、苏宁等名企联合举办了企业Open Day活动</div>
                        <div className="title-4">让学生有机会进入企业参观，了解企业文化、工作流程帮助企业更好的向学生展示自己的形象与文化</div>
                    </div>
                    <div className="image">
                        <img src={require("../../images/group/7点openday 插画.png")} alt="7点直播" />
                    </div>
                </section>
            </Carousel>
        </main>
    )
}

export default Group
