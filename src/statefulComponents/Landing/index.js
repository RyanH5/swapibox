import React, { Component } from 'react';
import { fetchFilmCrawl } from '../../helpers/fetch/index';

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
    const filmData = await fetchFilmCrawl();
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