import GithubCorner from 'react-github-corner'
import { HiTerminal, HiLogout } from "react-icons/hi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

import './App.css'

function App() {

  setInterval(function() {
    const time = document.querySelector("#time")
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day_night = "AM"

      if (hours > 12) {
        hours = hours - 12
        day_night = "PM"
      }

      if (minutes < 10) {
        minutes = "0" + minutes
      }
      
      if (seconds < 10) {
        seconds = "0" + seconds
      }
      
      time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night
  })

  return (
    <div>
      <div className="author">
          <p id="terminal"><HiTerminal/></p>
            <p>Gabriel Catan</p> 
              <p><HiLogout/></p>
                <a href="https://www.linkedin.com/in/gabriel-catani-9bb13620b/"><FaLinkedin/></a>
                <a href="https://www.instagram.com/gabcatani/"><FaInstagram/></a>
      </div>
        <GithubCorner 
        href="https://github.com/gabcatani/digital-clock" 
        bannerColor="#64CEAA"
        octoColor="#fff"
        />
      <div className="wrapper">
        <div className="display">
          <div id="time"></div>
        </div>
      </div>
    </div>
  )
}

export default App
