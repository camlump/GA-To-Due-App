import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'




export default class Classwork extends Component {
    state ={
        homework:[],
        projects: []
    }

    getHomeworks =()=>{
        axios.get('/api/homework').then((response)=>{
            const foundHomework = response.data;
            this.setState({
                homework: foundHomework
            });
        });
    }
    getProjects =()=>{
        axios.get('/api/project').then((response)=>{
            const foundProjects = response.data;
            this.setState({
                projects: foundProjects
            });
        });
    }

    componentDidMount(){
        this.getHomeworks();
        this.getProjects();
    }
    render() {
        return (
            <div>
                <Link to={"/homework"}><h1>Homework</h1></Link>
                <Link to={"/project"}><h1>Projects</h1></Link>
                
            </div>
        )
    }
}
