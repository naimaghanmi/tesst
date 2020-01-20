import React, { Component } from 'react'
import axios from 'axios'
export default class count extends Component {
    state={
       comment:[]
    }
getById=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`).then(res => {this.setState({
     comment: res.data });
    });

  };
  componentDidMount=()=>{
    this.getById();
  }
  render() {
    return (
    <h3>{this.state.comment.length}</h3>
    )
}
  }