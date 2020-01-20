import React, { Component } from 'react'
import axios from 'axios'
import { Card,CardText, CardBody,CardSubtitle,
    CardTitle} from 'reactstrap';

export default class posts extends Component {
    state={
        tab:[]
    }
getDetail=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`).then(res => {this.setState({
     tab: res.data });
    });
  };
  componentDidMount=()=>{
    this.getDetail();
  }
    render() {
        return (
            <div style={{display:"flex",flexWrap:"wrap",margin:"20px"}}>
            {this.state.tab.map(el=> 
            <div key={el._id}>
            <Card style={{width:"280px",height:"300px",textAlign:"center",margin:"10px",backgroundColor:"#F5F5DC",boxShadow:"0 4px 8px 0 rgba(0,0,255,0.2)"}} >
            <CardBody style={{ padding:"2px 16px"}}>
            <CardTitle style={{color:"red"}}>{el.name}</CardTitle>
            <CardSubtitle style={{color:"#DEB887"}} >{el.email}</CardSubtitle>
             <CardText>{el.body}</CardText>
             </CardBody>
             </Card>
             </div>
             )
             }
             </div>
             )
                }
            }