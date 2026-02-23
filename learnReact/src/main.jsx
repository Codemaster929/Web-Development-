import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Letter} from './App.jsx'

// createRoot(document.getElementById('root')).render(
//    <App/>
 
// )
// createRoot(document.getElementById('box')).render(
// // letter()
// < Letter />

// )
createRoot(document.getElementById('root')).render(
 <>
 <div id="heading">Pick your college </div>
 <label htmlFor="college">Colleges:</label>
 <select name="college" id="collegeList">
    <option value="imsec">IMSEC </option>
    <option value="imsec">AKGEC</option>
    <option value="imsec">KIET </option>
    <option value="imsec"> HBTU </option>
 </select>
 </>
)
