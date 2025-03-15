import React, { useState, useEffect } from 'react'
import reactLogo from '/logo/react.svg'
import viteLogo from '/logo/vite.svg'
import './App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
// import { robots } from './robots'


function App() {

  const { robots, setRobots } = useState([]);
  const { searchfield, setSearchfield } = useState('');


  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    const data = async function fetchUsers() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    }
    fetchUsers();
    setRobots(data);
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  // render() {
  //   const { robots, searchfield } = this.state;
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  return !robots.length ?
    <h1>Loading...</h1> :
    (
      <>
        <div className="title">
          {/* <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a> */}
          <h1 className="robofriend">RobotFriends</h1>
          <SearchBox searchChange={onSearchChange} />
        </div>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </>
    )
}


export default App;
