import React, { useState, useEffect } from 'react'
import './App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
// import { robots } from './robots'


function App () {
  const [ robots, setRobots ] = useState([]);
  const [ searchfield, setSearchfield ] = useState('');
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    async function fetchUsers() {  
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRobots(data);
      } catch (e) {
          console.log('Error: ', e)
      }
    }
    fetchUsers();
  }, [])

  {/* // simple promise
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { setRobots(users) });
  }, [])
  */}

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }
  
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })
  
  // console.log('robots', robots, 'searchfield', searchfield)
  return !robots.length ?
    <h1>Loading...</h1> :
    (
      <>
        <div className="title">
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
