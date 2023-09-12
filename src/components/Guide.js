import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Guide = () => {
  return (
    <section className="guide">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="head-holder">
                    <Fade direction={'up'} duration={1000} delay={200} triggerOnce={true}>
                        <span>Advantages</span>
                        </Fade>
                        <Fade direction={'up'} duration={1000} delay={400} triggerOnce={true}>
                        <h3>Free Movies to Watch, Anytime Anywhere</h3>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                <Fade direction={'left'} duration={1000} delay={800} triggerOnce={true}>
                    <div className="card">
                        <div className="card-img">
                            <img src="image/1.png" alt="" className="img-fluid"/>
                        </div>
                        <h4>ALL IN ONE PLACE</h4>
                        <h3>The complete streaming guide</h3>
                        <p>Get personal recommendations for all your favorite streaming services. We’ll show you where to watch movies.</p>
                    </div>
                    </Fade>
                </div>
                <div className="col-md-4">
                <Fade direction={'left'} duration={1000} delay={600} triggerOnce={true}>
                    <div className="card">
                        <div className="card-img">
                            <img src="image/2.png" alt="" className="img-fluid"/>
                        </div>
                        <h4>ONE SEARCH</h4>
                        <h3>Every platform in one search</h3>
                        <p>Never go back-and-forth between streaming services again to see if a movie or TV show is available. We’ve got you covered with one search.</p>
                    </div>
                    </Fade>
                </div>
                <div className="col-md-4">
                <Fade direction={'left'} duration={1000} delay={400} triggerOnce={true}>
                    <div className="card">
                        <div className="card-img">
                            <img src="image/3.png" alt="" className="img-fluid"/>
                        </div>
                        <h4>ONE WATCHLIST</h4>
                        <h3>Combine all your watchlists</h3>
                        <p>Create a single watchlist with every movie  you want to watch – covering every streaming service in one list across all your devices.</p>
                    </div>
                    </Fade>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Guide