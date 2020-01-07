import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, } from "react-router-dom";
import About from './about';
import List from './list';
import Article from './article';
import Post from './post';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className='wrapper'>
          <header>
            <div className="container">
              <div className='header__img'></div>
              <div className='navbar'>
                <Link className='navbar__btn navbar__btn__about' to={'/about'}>
                  ABOUT
              </Link>
                <Link className='navbar__btn navbar__btn__post' to={'/post'}>
                  POST
              </Link>
                <Link className='navbar__btn navbar__btn__list' to={'/list'}>
                  LIST
              </Link>
              </div>
            </div >
          </header >
          <main>
            <div className='main__background'></div>
            <div className='main__content'>
              <Route exact path='/' component={List} />
              <Route path='/about' component={About} />
              <Route path='/post/' component={Post} />
              <Route path='/list' component={List} />
              <Route path='/article/:articleId' component={Article} />
            </div>
          </main>
          <footer>Made by Ponchimeow</footer>
        </div >
      </Router>
    );
  }
}

export default App;
