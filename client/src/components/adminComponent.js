import React, { Component } from 'react'
import { baseUrl } from '../shared/baseUrl';
class adminComponent extends Component {
    render() {
        return (
            <div className='container'>
                <h1><a href={baseUrl + 'admin'}>Click Here</a> for admin section </h1>
            </div>
        )
    }
}

export default adminComponent
