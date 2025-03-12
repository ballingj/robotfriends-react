// This component demonstrates the use of props.children
// this allows for wrapping another component or components to add functionality

import React from "react";

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px' }}>
      {props.children}
    </div>
  )
}

export default Scroll;