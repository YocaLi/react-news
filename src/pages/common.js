import React, { Component } from 'react'
import { Link } from 'react-router'
import '../assets/css/common.css'

class commonNav extends Component {


    constructor(props){
        super(props)
        this.state = {
            navList:[
                {
                  channel: 901215,
                  type: 'tuijian',
                  name: '推荐',
                  toUrl: false,
                  active: true
                },
                {
                  channel: '',
                  type: 'zhibo',
                  name: '直播',
                  toUrl: true,
                  active: false,
                  url:'./zhibo'
                },
                {
                  channel: 900047,
                  type: 'NBA',
                  name: 'NBA',
                  toUrl: false,
                  active: false
                },
                {
                  channel: 900048,
                  type: 'CBA',
                  name: 'CBA',
                  toUrl: false,
                  active: false
                },
                {
                  channel: 900050,
                  type: 'zhongchao',
                  name: '中超',
                  toUrl: false,
                  active: false
                },
                {
                  channel: 900051,
                  type: 'yingchao',
                  name: '英超',
                  toUrl: false,
                  active: false
                },
                {
                  channel: 900052,
                  type: 'xijia',
                  name: '西甲',
                  toUrl: false,
                  active: false
                },
                {
                  channel: 900053,
                  type: 'yijia',
                  name: '意甲',
                  toUrl: false,
                  active: false
                },
                {
                  channel: 901213,
                  type: 'shipin',
                  name: '视频',
                  toUrl: false,
                  active: false
                },
                {
                  channel: 900054,
                  type: 'dejia',
                  name: '德甲',
                  toUrl: false,
                  active: false
                },
                {
                  channel: 900056,
                  type: 'ouguan',
                  name: '欧冠',
                  toUrl: false,
                  active: false
                },
                {
                  channel: 900062,
                  type: 'fajia',
                  name: '法甲',
                  toUrl: false,
                  active: false
                },
                {
                  channel: 900058,
                  type: 'yaguan',
                  name: '亚冠',
                  toUrl: false,
                  active: false
                }
            ]
        }
    }

    changeNav(type,item) {
        let  arr = this.state.navList.map((v) => {
          v.active = false
          return v
        })
        this.setState({navList:arr})
        type.active = true
    }


    render() {
        console.log(this.state)
        return (
            <div className="react-body">
                <div  className="lincoapp-tab3">
                    <div className="tab-scroll-wrap">
                        <div className="nav-new">
                            <ul ref="newsList">
                                {this.state.navList.map((v,k) => {
                                    return <li  key={k} className={v.active ? "active": ""} onClick={this.changeNav.bind(this, v)} >{v.toUrl ? <Link to={v.url}>{v.name}</Link> : v.name}</li>
                                })}
                            </ul>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>
                <div className="mainSection" ref="mainSection">
                    {this.props.children}
                    {/* <Child name="" /> */}
                </div>
            </div>
        )
    }
}

export default commonNav