import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../styles/StyledButton';

const initialState = {
  name: '',
  email: '',
  message: ''
};

class ContactForm extends Component {
  state = { formData: initialState };

  handleInputChange = e => {
    const { formData } = this.state;
    this.setState({
      formData: { ...formData, [e.target.name]: e.target.value }
    });
  };

  render() {
    const { name, email, message } = this.state.formData;
    return (
      <StyledForm>
        <h3>Get a hold of me</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Enter name"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter email"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <textarea
            name="message"
            id="message"
            value={message}
            placeholder="Enter message"
            onChange={this.handleInputChange}
          />
        </div>
        <StyledButton>Submit</StyledButton>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    label {
      font-size: 1.4rem;
      margin-bottom: 5px;
    }
    input,
    textarea {
      font-size: 1.6rem;
      padding: 1rem;
      border: 1px solid #e2f1ff;
      border-radius: 5px;
    }
    textarea {
      min-width: 100%;
      max-width: 100%;
      min-height: 14rem;
    }
  }
`;

export default ContactForm;
