/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import contaact from "../img/wp5242957.jpg"
const Contact = () => {
  return (
    <>
    <section className='contact' style={{backgroundImage:`url(${contaact})`}}>
    <div className='overlay1'></div>
        <div className='container'>
            <div className='row'>
                <div className='contact-header'>
            <h3>Contact <span>US</span></h3>
            <p><span>Need to get in touch ? </span> You are more than welcome to leave your contact info and we will be in touch shortly.</p>
            </div>
                <div className='col-lg-6'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='contact-box'>
                                <i class="fa-solid fa-location-dot"></i>
                                <h4>Our main office</h4>
                                <p> 129 NasrCity , cairo</p>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div className='contact-box'>
                            <i class="fa-solid fa-phone"></i>
                                <h4>Phone Number</h4>
                                <p> +01060894759</p>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div className='contact-box'>
                            <i class="fa-solid fa-fax"></i>
                                <h4>Fax</h4>
                                <p>1-234-567-8900</p>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                            <div className='contact-box'>
                            <i class="fa-solid fa-envelope"></i>
                                <h4>Email</h4>
                                <p>TheMovezlab@gmail.com</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="col-lg-6">
            <div className="form-holder" >
              <div className="form-floating mb-4">
                <input type="text" className="form-control" id="floatingInput" placeholder="Your Name"/>
                <label for="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-4">
                <input type="email" className="form-control" id="floatingInput" placeholder="Your Name"/>
                <label for="floatingInput">Mail</label>
              </div>
              <div className="form-floating mb-4">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "200px"}}></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <a href="" className="main-btn">Send</a>
            </div>
          </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact