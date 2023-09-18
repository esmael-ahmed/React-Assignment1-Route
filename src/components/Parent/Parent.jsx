import React, { Component } from 'react'
import Child from './../Child/Child';

export default class Parent extends Component {
    state = {
      allProducts: [
        {id:1, count: 7, onSale: true, productName: 'samsung', price: 5000, category:'mobile'},
        {id:2, count: 10, onSale: true, productName: 'oppo', price: 7000, category:'mobile'},
        {id:3, count: 3, onSale: false, productName: 'huawe', price: 3000, category:'mobile'},
        {id:4, count: 0, onSale: true, productName: 'toshipa', price: 10000, category:'Tv'},
      ]
    };
    deleteElement=(id) => {
      let newAllProducts = [...this.state.allProducts];
      newAllProducts = newAllProducts.filter((product) => {return product.id !== id});
      this.setState({allProducts: newAllProducts});
    }
    updateElement=(obj) => {
      let indexOfObject = this.state.allProducts.indexOf(obj);
      let newArray = [...this.state.allProducts];
      if (newArray[indexOfObject].count < 20)
      {
        newArray[indexOfObject].count++;
      }
      
      this.setState({allProducts: newArray});
    }
  render() {
    return <>
    <div className='container'>
      <div className='row gy-4 mt-5'>
        {this.state.allProducts.map((product, idKey) => {return <Child upd={this.updateElement} del = {this.deleteElement} key={idKey} pro = {product}/>})}
      </div>
    </div>
    
    </> 
      
    
  }
}
