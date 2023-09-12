/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Plans = () => {
  return (
    <div className="price">
        <div className="container">
            <div className="head-holder  text-center ">
            <Fade direction={'up'} duration={1000} delay={200} triggerOnce={true}>
                <span >THE BEST OUT THERE</span>
                </Fade>
                <Fade direction={'up'} duration={1000} delay={400} triggerOnce={true}>
                <h3>See our features</h3>
                </Fade>
            </div>
            <div className="row">
                <div className="col-lg-4">
                <Fade direction={'left'} duration={1000} delay={800} triggerOnce={true}>
                    <div className="price-box text-center  ">
                        <div className="price-caption">
                            <h4 className="m-0" >BASIC PLAN</h4>
                        </div>
                        <div className="price-plan">
                           <div className="the-price">
                            <p><span>$20</span>/Month</p>
                           </div>
                           <ul className="p-0 m-0">
                            <li>Good video quality in HD (720p)</li>
                            <li>Watch ad-free on any phone</li>
                            <li>tablet</li>
                            <li>computer or TV</li>
                            <li>Download on 1 device</li>
                           </ul>
                           <a href="" className="main-btn text-white">Get plan</a>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className="col-lg-4 ">
                <Fade  duration={1000} delay={600} triggerOnce={true}>
                    <div className="price-box text-center ">
                        <div className="price-caption" style={{backgroundColor: "#F70514"}}>
                            <h4 className="m-0" >STAR PLAN</h4>
                        </div>
                        <div className="price-plan" style={{border: "2px solid #F70514"}}>
                           <div className="the-price">
                            <p><span>$30</span>/Month</p>
                           </div>
                           <ul className="p-0 m-0">
                            <li>Good video quality in HD (1080p)</li>
                            <li>Watch ad-free on any phone</li>
                            <li>tablet</li>
                            <li>computer or TV</li>
                            <li>Download on 2 device</li>
                           </ul>
                           <a href="" className="main-btn text-white">Get plan</a>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className="col-lg-4 ">
                <Fade direction={'right'} duration={1000} delay={400} triggerOnce={true}>
                    <div className="price-box text-center ">
                        <div className="price-caption">
                            <h4 className="m-0" >VIP PLAN</h4>
                        </div>
                        <div className="price-plan">
                           <div className="the-price">
                            <p><span>$45</span>/Month</p>
                           </div>
                           <ul className="p-0 m-0">
                            <li>Good video quality in (4k)</li>
                            <li>Watch ad-free on any phone</li>
                            <li>tablet</li>
                            <li>computer or TV</li>
                            <li>Download on 6 device</li>
                           </ul>
                           <a href="" className="main-btn text-white">Get plan</a>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plans