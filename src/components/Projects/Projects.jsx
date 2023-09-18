import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom';

export default class Projects extends Component {
  render() {
    return <>
    
        <div className='container '>
            <div className='row '>
                <div className='col-md-4 '>
                    <Link to={"react"}>React Projects</Link>  
                    <br />
                    <Link to={"angular"}>Angular Projects</Link>
                    <br />
                    <Link to={"desktop"}>Desktop Projects</Link>
                    <br />
                </div>
                <div className='col-md-8 '>
                    <Outlet />
                </div>
            </div>

        </div>
    </>
  }
}
