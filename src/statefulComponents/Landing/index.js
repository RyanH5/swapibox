import React, { Component } from 'react';
import { fetchFilmCrawl } from '../../helpers/fetch/index';
import {getData} from '../../helpers/selectCategory/index'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      year: '',
      crawl: ''
    };
  }

  async componentDidMount() {
    const randomNum = Math.floor(Math.random() * 7) + 1 
    const filmData = await getData(`https://swapi.co/api/films/${randomNum}`);
    const {title, year, crawl} = filmData;
    this.setState({crawl, title, year});
  }

  render() {
    const { title, year, crawl } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <p>{crawl}</p>
        <h4>{year}</h4>
      </div>
    );
  }
}

export default Landing;