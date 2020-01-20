import React, { Component } from 'react';
import axios from 'axios'
import {Route,Link} from 'react-router-dom'
import Users from './component/users'
import Posts from './component/posts'
import Detail from './component/detail'

export default class App extends Component {
 
  render() {
    return (
   <div style={{backgroundColor:"#DEB887",margin:"10px"}}>
      <div >
      <Link to="/users"><h1 style={{textAlign:"center",margin:"2px"}}>List Users </h1></Link>
      </div>
      <div style={{marginLeft:"70px"}}>
      <Route path="/users" render={()=><Users />} />
      <Route path="/posts/:id" render={(props)=><Posts id={props.match.params.id}/>}></Route>
      <Route path="/detail/:id" render={(props)=><Detail id={props.match.params.id}/>}></Route>
    </div>
  </div>
    )
  }
}
