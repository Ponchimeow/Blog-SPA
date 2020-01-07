import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Article.css';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
      isLoaded: false,
      isInEditMode: false,
      id: this.props.match.params.articleId
    };
  }

  handleBack = () => {
    this.id = '';
  }

  changeEditMode = () => {
    const { isInEditMode } = this.state;
    this.setState({
      isInEditMode: !isInEditMode,
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleDelete = () => {
    const { id } = this.state;
    fetch(`https://qootest.com/posts/${id}`, {
      method: 'DELETE',
    }).then(() => {
      this.props.history.push('/list');
    }).catch((e) => {
      this.setState({
        error: e,
      })
    })
  }

  handleSend = () => {
    const { id, title, author, body } = this.state;
    const data = JSON.stringify({ title, author, body, })
    fetch(`https://qootest.com/posts/${id}`, {
      method: 'PUT',
      body: data,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    ).then(() => {
      this.setState({
        isInEditMode: false,
      })
    }).catch(e => {
      console.log(e)
    })
  }

  componentDidMount() {
    const { id } = this.state;
    fetch(`https://qootest.com/posts/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          isLoaded: true,
          title: data.title,
          body: data.body,
          author: data.author,
          createdAt: data.createdAt,
        });
      }
      ).catch(e => {
        console.log(e)
      })
  }

  render() {
    const { isInEditMode, isLoaded, title, body, author, createdAt } = this.state;
    if (!isLoaded) {
      return <div className='loading'>loading...</div>;
    }
    else {
      return (
        <div className='article'>
          {isInEditMode ?
            <input className='article__editTitle' type='text' name='title' onChange={this.handleInputChange}
              placeholder='Enter Title Here' defaultValue={title}></input>
            :
            <div className='article__title'>
              Title: {title}
            </div>
          }
          <div className='article__detail'>
            {isInEditMode ?
              <input className='article__detail' defaultValue={author} name='author' onChange={this.handleInputChange}></input>
              :
              <div className='article__detail__author'>
                Author: {author}
              </div>
            }
            <div className='article__detail__create'>
              Created at: {createdAt}
            </div>
          </div>
          {isInEditMode ?
            <textarea className='article__editContent' defaultValue={body} name='body' onChange={this.handleInputChange}>
            </textarea>
            :
            <div className='article__content'>
              {body}
            </div>
          }

          <div className='article__btn'>
            <Link className='btn btn__back' to={'/list'}>Back</Link>
            {isInEditMode ?
              <button className='btn btn__send' onClick={this.handleSend}>Send</button>
              : <button className='btn btn__edit' onClick={this.changeEditMode}>Edit</button>
            }
            <button className='btn btn__delete' onClick={this.handleDelete}>Delete</button>
          </div>
        </div>)
    }
  }
}

export default Article;