import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../styles/StyledButton';

const initialState = {
  name: '',
  email: '',
  message: ''
};

class ContactForm extends Component {
  state = { formData: initialState, submitted: false };

  componentDidUpdate() {
    const { submitted } = this.state;
    if (submitted) {
      setTimeout(() => this.setState({ submitted: false }), 3000);
    }
  }

  handleInputChange = e => {
    const { formData } = this.state;
    this.setState({
      formData: { ...formData, [e.target.name]: e.target.value }
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state.formData })
    })
      .then(() => this.setState({ formData: initialState, submitted: true }))
      .catch(error => alert(error));
  };

  render() {
    const { name, email, message } = this.state.formData;
    const { submitted } = this.state;
    return (
      <StyledForm onSubmit={this.handleFormSubmit}>
        {submitted ? (
          <div className="message">Success! Thank you for reaching out!</div>
        ) : null}
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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  .message {
    width: 100%;
    text-align: center;
    color: #f4f4f4;
    background: #8fdfde;
    padding: 1rem;
    border-radius: 5px;
  }
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
