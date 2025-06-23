import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const Data = createContext();
const name = "Sanidhya";
const Data1 = createContext();
const name1 = "Data1";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Data.Provider value={{ name }}>
    <Data1.Provider value={{ name1 }}>
      <App />
    </Data1.Provider>
    {/* <App /> */}
  </Data.Provider>
  // </StrictMode> 
)
export default  {
  Data , 
  Data1
} ;
