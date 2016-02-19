import React from 'react';

require('./CreatePost.less');

export default class CreatePost extends React.Component {
  
  constructor() {
    super();
    this.state = {
      displayForm: false
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  render() {
    return (
      <div className='CreatePost'>
        <a href='#' onClick={this.toggleForm}>Create Post</a>
        {this.renderForm()}
      </div>
    );
  }
  
  renderForm() {
    if (!this.state.displayForm) return null;
    
    return (
      <form className='CreatePost-form' onSubmit={this.onSubmit}>
        <label>
          <span>Title</span>
          <input type='text' name='title' />
        </label>
        <label>
          <span>Excerpt</span>
          <textarea name='excerpt'></textarea>
        </label>
        <button type='submit'>Submit</button>
      </form>
    );
  }
  
  onSubmit(e) {
    e.preventDefault();
    const values = {
      title: e.target['title'].value,
      excerpt: e.target['excerpt'].value,
      status: 'publish'
    };
    
    this.props.onSubmit(values);
    e.target['title'].value = '';
    e.target['excerpt'].value = '';
  }
  
  toggleForm(e) {
    e.preventDefault();
    this.setState({
      displayForm: !this.state.displayForm
    });
  }
  
}