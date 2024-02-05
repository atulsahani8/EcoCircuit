import React from 'react'
import './Navbar.scss'
import logo1 from '../../assets/logo1-removebg.png'
import logo2 from '../../assets/ecocircuit_logo2-removebg.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
          <img src={logo2} alt="EcoCircuit Logo" />
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="" className='navbar__link'>About</a>
        </li>
        <li className="navbar__item">
          <a href="" className='navbar__link'>Blogs</a>
        </li>
        <li className="navbar__item">
          <a href="" className='navbar__link'>Contact</a>
        </li>
      </ul>
      <button className='login'>Login
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADNElEQVR4nO2a20tUURTGf6Zp91IbKyqoxyhEqeciiuhiVAaB0Wvp0yQ+1FMXekuhwPAfiSx6EotMszK763SBoh4iequ8FCc2fAOb0Jk5c/bMPg5+MDBwzl57rb3XWvtbex2YR+liObAPuALcAUaAT8BPYBL4AbwBeoEu4AhQTUxQARyV4n+AIOTPjLkLnAKqfBiwEOgAvlhKmVV/AFzVajcAG4Elet+s/hYZfhHoAyas8UaWkbmoWEbsAV5ZCpj/SWBVHrLMmNPAY0veO+AABYRZ1R5rwrfAfofyjawRS35PIXanDujXBL+Ac0Cl60mAcuCs5jBzDQNrXAnfAHyUYJOFtlN41ANjmjMFbI4qsNaKhwGXq5Pj3IOWMXnPvdgSZHx3JcXHUkuH4Xxj5rqVRdbiD7WWm5kEEAq7gL86G8x54Bv1VgLIOVOaE/aDBl0gPmi34iUnF2vVgGeiIHFBhXQKZFTWPJ7Sy8eJHw5Kt6/ZduWEXjQsdYFDBe6JhpiDNQrKgCfS8WSmFw2h+w004xaPNPkLB8a0SpZh3EVHnYxwYUy1sum0p7ONBPDcct11EWT1S85hPMHVzlyWjE48wsXOHNP4m3hG1J3ZatVE3hFlZ1Zr3LeZHt7P4/LA5c+w2zA0KlDNX7qG+HatMKVCIpNrFRMlEeyJCDuRRrPv9FsSB2LCwU78T1GamMOkscYijSsy0fiJAtD4YYc0vk2ybvsorB46LKyeSseWbKXueIxL3Sbp9jmXNsQZvTwaw8uHUelmbv+zokqXcoH6GHFBh3QaC9MU2qkLuimgEf9o0F1CoPZeKFzTwPcRy1IX509KunTne4k9YMVLPh2pqFgGDEmHoSh9RnP4vJSgwSJfZicsI8YdpG7Wy73SaW8HxYmJlGXEJper0yfBJujOF6j1VqHslA7sIRc7MVMz9IZV0Zk0eEinbVSUSdaoJb+70L333RYBTNOZdsVTWNSIO6VpRyBXCp1io7hAUs3RtAJT4lRdIp2N1gcDleo8bdOzS6Lik9Z4E39JX19AlOvasle0OuyFw7TGtvgyYLacv1fV2y25i/1RzXfgtcrTTi3ArPXEPJjj+AeenGA+lc/G9AAAAABJRU5ErkJggg==">
        </img>
      </button>
    </nav>
  )
}

export default Navbar