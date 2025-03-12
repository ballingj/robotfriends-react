import React, { Component } from 'react'
import reactLogo from '/logo/react.svg'
import viteLogo from '/logo/vite.svg'
import './App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
// import { robots } from './robots'


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users'

    const fetchUsers = async () => {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ robots: data })
    }
    fetchUsers();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });

    // console.log(filteredRobots)
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ?
      <h1>Loading...</h1> :
      (
        <>
          <div>
            {/* <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a> */}
            <h1 className="robofriend">RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </>
      )
  }
}

export default App;
