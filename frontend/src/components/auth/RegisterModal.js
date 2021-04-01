import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Nav
} from "reactstrap";

import { connect } from "react-redux";
import PropTypes from 'prop-types';
// import { register } from '../../actions/register'


class RegisterModal extends Component {
  state = {
    modal: false,
    name: '',
    email: '',
    password: '',
    msg:null
  };

  // static proprTypes = {
  //     isAuthentificated: PropTypes.bool,
  //     error: PropTypes.object.isRequired,
  //     register: PropTypes.func.isRequired
  // }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  onChange = (e) =>{
	  this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) =>{
	  e.preventDefault();

    //Close modal
    this.toggle();
  }
  render() {
    return (
      <div>
        <NavLink  style={{color: 'white'}} onClick={this.toggle} href="#">
            Register
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Register </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
              <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={this.onChange}
                  className="mb-3"
                />
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={this.onChange}
                  className="mb-3"
                />
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={this.onChange}
                  className="mb-3"
                />
				<Button
					color="dark" style={{marginTop: '2rem'}} block> 
					Register
				</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps= state => ({
//   isAuthentificated : state.auth.isAuthentificated,
//   error : state.error
});

// export default connect(mapStateToProps, { register })(RegisterModal);
export default RegisterModal;