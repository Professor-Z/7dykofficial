import React, {Component} from 'react'
import { Link } from 'react-router'

class Carousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            offsetTops:[],
            curSection: 0,
        }
        // this.curSection = 0
        this.moving = false
        this.handleScroll = this.handleScroll.bind(this)
        console.log("here")
    }
    componentDidMount(){
        console.log("mounted")
        this.beforeScrollTop = document.body.scrollTop;
        document.addEventListener('scroll',this.handleScroll)
    }
    componentWillUnmount(){
        console.log("unmounted")
        document.removeEventListener('scroll',this.handleScroll)
        // this.handleScroll = null
    }
    handleScroll(e){
        console.log(e.type)
        // console.log("moving",this.moving)
        let self = this
        if(!this.moving){
            window.requestAnimationFrame(function() {
                let scrollTop = document.body.scrollTop
                if(scrollTop-self.beforeScrollTop>0 && self.state.curSection<self.props.children.length-1){
                    self.changeSlide(self.state.curSection+1)
                    self.moving = true
                    // window.removeEventListener(this.scrollListener)

                }else if(scrollTop-self.beforeScrollTop<0&&self.state.curSection>0){
                    self.changeSlide(self.state.curSection-1)
                    self.moving = true
                    // window.removeEventListener(this.scrollListener)
                }
                self.beforeScrollTop = scrollTop
            })
        }
    }
    getElementTop(ele){
        ele = document.getElementById(ele.props.id)
        let actualTop = ele.offsetTop
        let current = ele.offsetParent
        while (current!=null) {
            actualTop+=current.offsetTop
            current = current.offsetParent
        }
        return actualTop
    }
    changeSlide(index){
        let ele = document.getElementById(this.props.children[index].props.id)
        Velocity(ele,"scroll",{duration:1000,offset:-60,complete:()=>{
            this.moving = false
            this.beforeScrollTop = document.body.scrollTop
            // this.scrollListener = window.addEventListener('scroll',this.handleScroll.bind(this),false)
            this.setState({curSection:index})
        }})
    }
    handleTab(index){
        this.moving = true
        this.changeSlide(index)
    }
    render(){
        return (
          <div className="">
            <div className="carousel">
            {this.props.children.map((item,index)=>(
                <div key={index} className={"item"+(this.state.curSection===index?" active":"")} onClick={this.handleTab.bind(this,index)}>
                    {this.state.curSection===index?"":<img src={require("../../images/about/Oval.png")} />}
                </div>
            ))}
            </div>
            {this.props.children}
          </div>
        )
    }
}

export default Carousel
