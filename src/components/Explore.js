/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Landing from "../components/Landing"
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
const Explore = () => {
  return (
    <>
     <Landing/>
    <section className="explore">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="head-holder">
                    <Fade direction={'up'} duration={1000} delay={200} triggerOnce={true}>
                        <span>Get Started</span>
                        </Fade>
                        <Fade direction={'up'} duration={1000} delay={400} triggerOnce={true}>
                        <h3>A best movie just for you</h3>
                        </Fade>
                    </div>
                    <Fade direction={'left'} duration={1000} delay={500} triggerOnce={true}>
                    <div className="explore-img">

                        <Link to="/movie">Explore Now</Link>
                    </div>
                    </Fade>
                </div>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default Explore