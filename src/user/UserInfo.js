import React, {Component} from 'react';
import axios from 'axios';

class UserInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: ''
    }
    this.getToUser()
  }

  getToUser = () => {
    const { id } = this.props.match.params;
    axios.get(`https://test-users-api.herokuapp.com/users/${id}`)
    .then(({data}) => {
      this.setState({user: data.data})
    })
  }

  render(){
    return(
      <div>
        <h4>User name: {this.state.user.name}</h4>
        <h4>User age: {this.state.user.age}</h4>
      </div>
    )
  }
}

export default UserInfo;