<template>
    <div class="contact-form">
      <h3>Contact Us</h3>
      <form>
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" />
        </div>
  
        <div class="form-group">
          <label for="email">Email us</label>
          <input type="email" id="email" />
        </div>
  
        <div class="form-group">
          <label for="message">Message us</label>
          <textarea id="message"></textarea>
        </div>
  
        <button type="button">Send</button>
      </form>
    </div>
  </template>

<script>
    export default {
        name: 'FormComponent',
        data() {

        }
    }
</script>

<style scoped>
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #790000;
  }
  
  h3 {
    text-align: center;
    margin-bottom: 2px;
  }
  
  .form-group {
    margin-bottom: 2px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 2px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  textarea {
    height: 100px;
  }
  
  button {
    width: 100%;
    padding: 5px;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background: #0056b3;
  }
  </style>