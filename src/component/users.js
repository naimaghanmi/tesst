import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Button} from 'reactstrap';
import axios from 'axios'
import {Link } from 'react-router-dom'

export default class users extends Component {
    state={
        list:[]
      }
      componentDidMount=()=>{
        this.getUsers();
      }
      getUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {this.setState({
          list: res.data });
        });
      };
    render() {
        return (
 <div style={{display:"flex",flexWrap:"wrap"}}>
{this.state.list.map(el=> 
<div key={el._id}>
<Card style={{width:"280px",height:"280px",textAlign:"center",margin:"10px",backgroundColor:"#F0F8FF",boxShadow:"0 4px 8px 0 rgba(0,0,255,0.2)"}} >
<Button top style={{width:"100px",height:"25%",borderRadius:"60%",marginTop:"10px",backgroundColor:"blue"}}>{el.name[0]}</Button>
<CardBody style={{ padding:"2px 16px"}}>
 <CardTitle style={{color:"purple"}}>{el.name}</CardTitle>
 <CardSubtitle >{el.phone}</CardSubtitle>
 <CardText>{el.email}</CardText>
 </CardBody>
 <Link to={`/posts/${el.id}`}>
 <Button style={{backgroundColor:"#6495ED"}}>Posts</Button>
 </Link>
 </Card>
 </div>
 )
 }
 </div>
 )
    }
}
  
