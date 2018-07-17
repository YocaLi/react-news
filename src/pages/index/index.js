import React, { Component } from 'react'
import '../../assets/css/index.css'
import Swiper from 'swiper'
import fetchService from '../../assets/js/ajax'
import fetchJsonp from 'fetch-jsonp'
import common from '../../assets/js/common'
class index extends Component {

    constructor (props) {
        super(props)
        this.state = {
            lunboList: [],
            matchData:{
                type: "",
                typecode: "",
                startkey: "",
                newkey: "",
                pgnum: 1,
                os: common.getOsType(),
                recgid: 15308456183500092,
                qid: null,
                domain: "dfsports_h5",
                readhistory: null
            }
        }
    }

    componentDidMount() {
        this.lunRender()
        this.matchRender()
    }

    lunRender() {
        fetchService.fetchJsonp('//msports.eastday.com/json/msponts/home_lunbo.json','callbcak',(res) => {
            this.setState({lunboList:res.data})
            new Swiper(this.refs.lun, {
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });
        })
    }

    matchRender() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="swiper-wrapper" >
                <div className="swiper-container" ref="lun"> 
                    <div className="swiper-wrapper" >
                        {this.state.lunboList.map((v,k) => {
                            return <div className="swiper-slide" key={k}>
                                        <a href={v.url}>
                                            <img src={v.image_url} /> 
                                            <p>{v.title}
                                                <span>{k + 1} / <i>{this.state.lunboList.length}</i></span>
                                            </p>
                                        </a>
                                    </div>
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default index
