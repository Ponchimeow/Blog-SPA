import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      isLoaded: false,
      articles: []
    };
  }

  componentDidMount() {
    fetch("https://qootest.com/posts")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          isLoaded: true,
          articles: data.reverse(),
        });
      }
      ).catch(e => {
        this.setState({
          error: e,
        })
      })
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error !== '') {
      return <div>{error}</div>;
    }
    else if (!isLoaded) {
      return <div className='loading'>loading...</div>;
    }
    else {
      return (
        <div className='list-group'>
          {articles.map(article =>
            <Link key={article.id} className='list-group__item' to={`/article/${article.id}`}>
              <div className='list-group__id'>{article.id}</div>
              <div className='list-group__title'>{article.title}</div>
            </Link>)}
        </div >
      );
    }
  }
}

export default List