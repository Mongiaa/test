import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUsers, updateUser } from "../actions";
import {ButtonToolbar,Button} from 'react-bootstrap';

class UpdateUser extends Component {
  state = {
    user: {}
  };

  componentDidMount = () => {
    this.props.getUsers();

    const arr = this.props.user.filter(el => el._id === this.props.id);
    let user = arr[0];
    this.setState({
      user
    });
  };

  render() {
    return (<center>
      <div className="styleUpdate">
      <div style={{display:"flex",justifyContent:"space-between",margin:"15px"}}>
          Name:
          <input
            placeholder="name"
            value={this.state.user && this.state.user.name}
            onChange={e => {
              e.preventDefault();
              this.setState({
                user: { ...this.state.user, name: e.target.value }
              });
            }}
          />
          </div>
          <br />
          <div style={{display:"flex",justifyContent:"space-between",margin:"15px"}}>
          Surname:
          <input
            placeholder="surname"
            value={this.state.user && this.state.user.surname}
            onChange={e => {
              e.preventDefault();
              this.setState({
                user: { ...this.state.user, surname: e.target.value }
              });
            }}
          />
          </div>
          <br />
          <div style={{display:"flex",justifyContent:"space-between",margin:"15px"}}>
          Birth Year:
          <input
            placeholder="birthYear"
            value={this.state.user && this.state.user.birthYear}
            onChange={e => {
              e.preventDefault();
              this.setState({
                user: { ...this.state.user, birthYear: e.target.value }
              });
            }}
          />
          </div>
          <br />
          <div style={{display:"flex",justifyContent:"space-between",margin:"15px"}}>
          Birth Place:
          <input
            placeholder="birthPlace"
            value={this.state.user && this.state.user.birthPlace}
            onChange={e => {
              e.preventDefault();
              this.setState({
                user: { ...this.state.user, birthPlace: e.target.value }
              });
            }}
          />
          </div>
          
          <br />
          <Link to="/">
          <ButtonToolbar>
            <Button variant="primary"
              onClick={() => {
                this.props.updateUser(this.state.user._id, {
                  name: this.state.user.name,
                  surname: this.state.user.surname,
                  birthYear: this.state.user.birthYear,
                  birthPlace: this.state.user.birthPlace
                });
              }}
            >
              Update User 
            </Button>
            </ButtonToolbar>
          </Link>
        
      </div>
      </center>
    );
  }
}
export default connect(
  state => {
    return { user: state.user };
  },
  { getUsers, updateUser }
)(UpdateUser);