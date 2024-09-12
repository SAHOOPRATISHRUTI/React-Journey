import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <h2>Niluuu</h2>
//   )
// }
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyApp /> */}
    <App/>
  </StrictMode>,
)
