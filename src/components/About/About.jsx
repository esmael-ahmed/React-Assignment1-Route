import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return <>
        <section className='py-5 mt-5 d-flex justify-content-center align-items-center flex-column text-white'>
          <div className=' mt-5 pt-5'>
            <h2 className=' fs-1 fw-bold'>ABOUT COMPONENT</h2>
          </div>
          <div className='star mt-1 mb-4'>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className=' container pb-5'>
            <div className='row'>
              <div className=' col-md-6 px-5'>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className=' col-md-6 px-5'>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </section>
    </>
    
  }
}
