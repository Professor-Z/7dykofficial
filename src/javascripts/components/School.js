import React from 'react'
import Carousel from "./Carousel"

const School = () =>{
    const features = [
        {
            url:"导师经验丰富.png",
            name:"导师经验丰富",
            des:"3年以上工作经历"
        },
        {
            url:"全面实战训练.png",
            name:"全面实战训练",
            des:"反复实战模拟、评审"
        },
        {
            url:"导师专业性强.png",
            name:"导师专业性强",
            des:"全部扎根行业"
        },
        {
            url:"团队有同理心.png",
            name:"团队有同理心",
            des:"带你实现从菜鸟到专家的蜕变"
        },
    ]
    const remarks = [
        {
            des:"“在听倪老师的课之前，对产品有一些了解，但对产品经理的职业发展没有什么概念，课程中讲述的产品经理的晋升路线让我清晰地认识到了其中的关联性。从而更好地规划职业发展。非常感谢倪老师。”"
        },
        {
            des:"“我是北邮的一名研究生，最开始接触龙云老师是听了他的一场讲座，当场便产生了很大的触动。龙云老师从小白讲到总监的路径，让我有了全面的认识。接下来便要进入实战模式，相信我的产品路可以走的更好。”"
        },
        {
            des:"“一个优秀的产品经理一定是对人性有比较深刻的认识，与其说倪老师讲述的是产品相关的内容，不如说是在教大家剖析人性。倪老师结合美团、滴滴等产品来解析人性，使我对产品的设计把握程度变得更加灵活、简单，产品的用户体验也提升不少。”"
        }
    ]
    return (
        <main className="school">
            <Carousel>
            <section className="screen-1" id="screen-1">
                <div className="title-1">产品经理训练营—7点学院</div>
                <div className="title-2">学院集中培养期望入职名企产品经理职位的学生<br />第一期80%的学员在培养后拿到了腾讯、阿里、滴滴等名企的offer</div>
                <div className="title-3">7点学院的特色</div>
                <div className="title-4">></div>
                <div className="features">
                {
                    features.map((item,index)=>(
                        <div className="feature-item" key={index}>
                            <img src={require(`../../images/school/${item.url}`)} alt={item.name} />
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
            <section className="screen-2" id="screen-2">
                <img className="background" src={require("../../images/school/Bitmap.png")} alt="Bitmap.png"/>
                <div className="title-1">PM学院<br /><span className="en">(Product Manager)</span></div>
                <div className="title-2">集中培养期望入职名企产品经理职位的学生</div>
            </section>
            <section className="screen-3" id="screen-3">
                <img className="pm" src={require("../../images/school/7点学院pm.png")} alt="7点学院pm.png"/>
                <img className="nm" src={require("../../images/school/7点学院nm.png")} alt="7点学院nm.png"/>
                <div className="title-1">学员评价</div>
                <div className="remarks">
                {
                    remarks.map((item,index)=>(
                        <div className="remark-item" key={index}>
                            <img src={require("../../images/wenda/Oval 10.png")} alt="·"/>
                            <div className="des">{item.des}</div>
                        </div>
                    ))
                }
                </div>
            </section>
            <section className="screen-4" id="screen-4">
                <img className="background" src={require("../../images/school/职场.png")} alt="职场.png"/>
                <div className="text">
                    <div className="title-1 title">面试如何准备？</div>
                    <div className="title-2 title">产品经理需要掌握哪些技能？</div>
                    <div className="title-3 title">如何拿到互联网公司的offer？</div>
                    <div className="button">立即报名</div>
                </div>
            </section>
            </Carousel>
        </main>
    )
}

export default School
