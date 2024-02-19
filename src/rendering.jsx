import React from 'react'
import { useState } from 'react'

function rendering  ()  {
    const [showbtn, setshowbtn] = useState(false)
  return (
    <div>
      {<button>i will be shown when second button is clicked</button>}
    </div>
  )
}

export default rendering
