import React, { Component } from 'react'

export default class Child extends Component {
  
  render() {
    const {productName, price, category, onSale, id, count} = this.props.pro
    const deleteMethode = this.props.del
    const updateMethod = this.props.upd
    return <>
    <div className=' col-md-4'>
      <div className="card bg-info position-relative p-2">
      <h1>{productName}</h1>
      <h5>{price}</h5>
      <h6>{category}</h6>
      <h6>{count}</h6>
      <button onClick={() => deleteMethode(id)} className='w-100 btn-outline-danger btn'>Delete</button>
      <button onClick={() => updateMethod(this.props.pro)} className='w-100 btn-outline-dark btn'>+</button>
      {onSale === true? <div className='bg-danger text-white position-absolute top-0 end-0 p-2 me-2'>Sale</div> : ""}
      </div>
      
    </div>
    </>
      
    
  }
}
