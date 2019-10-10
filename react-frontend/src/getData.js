import React, { Component } from 'react'
import axios from 'axios';
import { tsThisType } from '@babel/types';
export default class getData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }


    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/note/1/`)
        .then(res=> {this.setState(data: res.data)})

    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
