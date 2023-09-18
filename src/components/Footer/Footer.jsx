import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return <>
    {/* <div className=' fixed-bottom'> */}
    <div className='footer py-4 text-white text-center'>
          <div className='footer-top d-flex justify-content-center align-items-center py-5'>
          <div className=' container'>
              <div className='row g-5'>
                <div className='col-sm-4'>
                  <div className=''>
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div>
                    <h3>AROUND THE WEB</h3>
                    <div className='social-links d-flex justify-content-center'>
                      <div className='so-link d-flex justify-content-center align-items-center'>
                      <i className="fa-brands fa-facebook"></i>
                      </div>
                      <div className='so-link d-flex justify-content-center align-items-center'>
                      <i className="fa-brands fa-twitter"></i>
                      </div>
                      <div className='so-link d-flex justify-content-center align-items-center'>
                      <i className="fa-brands fa-linkedin"></i>
                      </div>
                      <div className='so-link d-flex justify-content-center align-items-center'>
                      <i className="fa-solid fa-globe"></i>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className='col-sm-4'>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
              </div>
            </div>
          </div>
            
        </div>

        <div className='footer-bottom text-center py-3 text-white'>
          <div className='container'>
            <p>Copyright © Esmael Website 2023</p>
          </div>
        </div>
    {/* </div> */}
        
    
    
    </>
  }
}

