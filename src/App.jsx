import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // fecth data from API
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('https://nhantyn.fly.dev/api/messages')
    .then(res => res.json())
    .then(data => setData(data))


    // fetch('https://nhantyn.fly.dev/api/messages', { mode: 'no-cors' } )
    // .then(res => setData(res))
    // console.log('data')
    // console.log(data)
  })
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toDateString(); // Example: "Fri Jun 24 2022"
  }
  
  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>NhanTyn + React</h1>
      <input type="text" />
      <div>
        {data ? data.map((item, index) => (
          <div key={index}>
            <span className='name'>{item.username} - {formatDate(item.date)}</span>
            <p>{item.message}</p>
          </div>
        )) : 'Loading...'}
      </div>
    </>
  )
}

export default App
