import React from 'react'
import { useState } from 'react'

function counter () {
    const [value, setValue] = useState(0);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
    </div>
  )
}

export default counter
