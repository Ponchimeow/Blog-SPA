import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { title, author, body } = this.state;
    const data = JSON.stringify({ title, author, body, })
    fetch('https://qootest.com/posts/', {
      method: 'POST',
      body: data,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(() => {
      this.props.history.push('/list');
    }).catch((e) => {
      console.log(e)
    })
  }
  render() {
    const { title, body, author } = this.state;
    return (
      <div className='post'>
        <div className='post__title'>title: <input value={title} name='title' onChange={this.handleInputChange} /></div>
        <div className='post__author'>author: <input value={author} name='author' onChange={this.handleInputChange} /></div>
        <textarea className='post__textarea' value={body} name='body' onChange={this.handleInputChange} />
        <button className='btn btn__submit' onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
}
export default Post;