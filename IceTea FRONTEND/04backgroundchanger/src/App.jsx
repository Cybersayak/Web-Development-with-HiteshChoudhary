
import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('green')

  return (
// First div - wider outer container with top margin
<div className="flex flex-col items-center min-h-screen bg-gray-300 pt-8 px-4 w-full">
{/* Header at the top */}
<h1 className="text-3xl font-semibold text-gray-800 mb-8">Background Color Changer</h1>

{/* Second div - content container with relative positioning for button placement */}
<div className="relative w-full max-w-7xl">
  {/* Screen with enhanced landscape orientation */}
  <div className=" shadow-lg rounded-lg p-6 w-full h-96 flex flex-col justify-center items-center" style={{backgroundColor : color}}>
    <p className="text-gray-600 mt-2"></p>
  </div>
  
        <div className="bg-sky-300 justify-center absolute left-1/2 transform -translate-x-1/2 translate-y-6 flex gap-4 px-3 py-2 rounded-full">
        <button 
           style={{backgroundColor:'red' }}
          onClick={() => setColor('red')}
          className=" text-white font-medium py-2 px-1 rounded-full shadow-md">
          Red
        </button>
        <button 
            style={{backgroundColor:'olive' }}
            onClick={() => setColor('olive')}
            className="text-white font-medium py-4 px-1 rounded-full shadow-md">
            Olive
          </button>
        </div>
</div>
</div>
  )
}

export default App
