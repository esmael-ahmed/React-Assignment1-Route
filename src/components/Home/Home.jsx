import React, { Component } from 'react'
import avataaars from './avataaars.svg'
import './home.css'



export default class Home extends Component {
  render() {
    return <>
        <section className=' py-5 mt-5 d-flex justify-content-center align-items-center flex-column text-white'>
          <div>
          <img src={avataaars} className='img-fluid' alt="" />
          </div>
          <div className=' mt-4'>
          <h2 className=' fs-1 fw-bold'>START FRAMEWORK</h2>
          </div>
          <div className='star my-3'>
          <i className="fa-solid fa-star"></i>
          </div>
          <div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>

        </section>
        {/* D:\Route\Front\React\ Eng Mahmoud Hesham\React Assignments\assignment1\src\images\avataaars.svg */}
        {/* src\images\avataaars.svg */}
      </>
  }
}
