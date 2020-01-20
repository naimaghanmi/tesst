import React, { Component } from "react";
import axios from "axios";
import { Card, CardText, CardBody, Button, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import Count from "./count";

export default class posts extends Component {
  state = {
    post: []
  };
  getPost = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.id}`)
      .then(res => {
        this.setState({
          post: res.data
        });
      });
  };
  componentDidMount = () => {
    this.getPost();
  };
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {this.state.post.map(el => (
          <div key={el._id}>
            <Card
              style={{
                width: "280px",
                height: "320px",
                textAlign: "center",
                margin: "10px",
                backgroundColor: "#F5F5DC",
                boxShadow: "0 4px 8px 0 rgba(0,0,255,0.2)"
              }}
            >
              <CardBody style={{ padding: "2px 16px" }}>
                <CardTitle style={{ color: "purple" }}>{el.title}</CardTitle>
                <CardText>{el.body}</CardText>
              </CardBody>
              <Link to={`/detail/${el.id}`}>
                <Button style={{ backgroundColor: "#FFE4C4" }}>Details</Button>
              </Link>
              <div>
              <Count id={el.id} style={{marginLeft:"80%"}} />
              </div>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
