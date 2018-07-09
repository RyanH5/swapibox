import React, { Component } from 'react';
import { getData } from '../../helpers/selectCategory/index';
import './styles.css';

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
    const randomNum = Math.floor(Math.random() * 7) + 1;
    const filmData = await getData(`https://swapi.co/api/films/${randomNum}`);
    const {title, year, crawl} = filmData;
    this.setState({crawl, title, year});
  }

  render() {
    const { title, year, crawl } = this.state;
    return (
      <div className={'landing'}>
        <div className={"fade"}></div>
        <main>
          <div className={'crawl'}>
            <h2>{title}</h2>
            <p>{crawl}</p>
            <h4>{year}</h4>
          </div>
        </main>
      </div>
    );
  }
}

export default Landing;