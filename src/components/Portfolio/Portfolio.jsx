import React, { Component } from 'react'
import port1 from './poert1.png'
import port2 from './port2.png'
import port3 from './port3.png'

export default class Portfolio extends Component {
  state = {
    srcAtt: '',
  };
  render() {
    return <>
    <div className=' div-container position-fixed top-0 bottom-0 end-0 start-0 d-none justify-content-center align-items-center z-1 '>
        <div className='img-container'>
          
        </div>
    </div>
      <section id='sec' className=' pb-4 mt-3 d-flex justify-content-center align-items-center flex-column'>
      <div className=' mt-5 pt-5'>
            <h2 id='por-header' className=' fs-1 fw-bold'>PORTFOLIO COMPONENT</h2>
          </div>
          <div id='star' className='mt-1 mb-4'>
            <i id='por-star' className="fa-solid fa-star"></i>
          </div>
        <div className=' container'>
          <div className=' row g-5'>
            <div className=' col-md-6 col-lg-4 col-sm-12'>
              <div onClick={(e) => console.log(e.target)} className="card position-relative">
                <div className=' card-overlay d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
                <i className="fa-solid fa-plus text-white fw-bold"></i>
                </div>
              <img id='img1'  src={port1} className="card-img" alt="..." /> 
              </div>
            </div>
            <div className=' col-md-6 col-lg-4 col-sm-12'>
            <div className="card position-relative">
            <div className=' card-overlay d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
                <i className="fa-solid fa-plus text-white fw-bold"></i>
                </div>
              <img src={port2} className="card-img" alt="..." /> 
              </div>
            </div>
            <div className=' col-md-6 col-lg-4 col-sm-12'>
            <div className="card position-relative">
            <div className=' card-overlay d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
                <i className="fa-solid fa-plus text-white fw-bold"></i>
                </div>
              <img src={port3} className="card-img" alt="..." /> 
              </div>
            </div>
            <div className=' col-md-6 col-lg-4 col-sm-12'>
            <div className="card position-relative">
            <div className=' card-overlay d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
                <i className="fa-solid fa-plus text-white fw-bold"></i>
                </div>
              <img src={port1} className="card-img" alt="..." /> 
              </div>
            </div>
            <div className=' col-md-6 col-lg-4 col-sm-12'>
            <div className="card position-relative">
            <div className=' card-overlay d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
                <i className="fa-solid fa-plus text-white fw-bold"></i>
                </div>
              <img src={port2} className="card-img" alt="..." /> 
              </div>
            </div>
            <div className=' col-md-6 col-lg-4 col-sm-12'>
            <div className="card position-relative">
            <div className=' card-overlay d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0'>
                <i className="fa-solid fa-plus text-white fw-bold"></i>
                </div>
              <img src={port3} className="card-img" alt="..." /> 
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  }
}
