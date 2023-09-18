import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return <>
    <section id='sec' className=' pb-4 mt-3 d-flex justify-content-center align-items-center flex-column'>
    <div className=' mt-5 pt-5'>
            <h2 id='por-header' className=' fs-1 fw-bold'>CONATCT SECTION</h2>
    </div>
    <div id='star' className='mt-1 mb-4'>
            <i id='por-star' className="fa-solid fa-star"></i>
    </div>

    <div className=' container d-flex justify-content-center align-items-center flex-column'>
      <div className=' w-100 d-flex justify-content-center my-4'>
        <input className=' form-control w-50 border-top-0 border-end-0 border-start-0 ' type="text" placeholder='User Name' />
      </div>
      <div className=' w-100 d-flex justify-content-center my-4'>
        <input className=' form-control w-50 border-top-0 border-end-0 border-start-0 ' type="text" placeholder='User Age' />
      </div>
      <div className=' w-100 d-flex justify-content-center my-4'>
        <input className=' form-control w-50 border-top-0 border-end-0 border-start-0 ' type="text" placeholder='User Email' />
      </div>
      <div className=' w-100 d-flex justify-content-center my-4'>
        <input className=' form-control w-50 border-top-0 border-end-0 border-start-0 ' type="text" placeholder='User Passaword' />
      </div>
    </div>
    <button className=' btn text-white'>Send Message</button>
    </section>
    
    </>
  }
}
