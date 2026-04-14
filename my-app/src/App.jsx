import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // simple API call
  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch('https://jsonplaceholder.typicode.com/postsdsa/3')
      const json = await res.json()

      setData(json)
    } catch (err) {
      setError('Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  // optional: auto fetch on load
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Counter {count}
        </button>

        {/* API Section */}
        <div style={{ marginTop: '20px' }}>
          <h2>API Data</h2>

          <button onClick={fetchData}>Fetch Data</button>

          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {data && (
            <div style={{ marginTop: '10px' }}>
              <h3>{data.title}</h3>
              <p>{data.body}</p>
            </div>
          )}
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Documentation</h2>
        </div>
      </section>
    </>
  )
}

export default App
