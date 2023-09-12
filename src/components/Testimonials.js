import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="container">
          <div className="heading-box mb-5">
            <h3 className="title text-center text-white">Testi<span>monials</span></h3>
          </div>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="person-img text-center mb-2">
                  <img src="image/person_1.jpg.webp" alt="" className="img-fluid text-center" width="100px"/>
                </div>
                <h4 className="text-center ">Carl Anderson</h4>
                <div className="person-review text-center mt-5">
                  <p className="text-white">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="person-img text-center mb-2">
                  <img src="image/person_2.jpg.webp" alt="" className="img-fluid text-center" width="100px"/>
                </div>
                <h4 className="text-center ">Drew Wood</h4>
                <div className="person-review text-center mt-5">
                  <p className="text-white">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="person-img text-center mb-2">
                  <img src="image/person_3.jpg.webp" alt="" className="img-fluid text-center" width="100px"/>
                </div>
                <h4 className="text-center ">Michelle Alisson</h4>
                <div className="person-review text-center mt-5">
                  <p className="text-white">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials