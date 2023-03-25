import "./App.css";
import { GoSearch } from "react-icons/go";
import {MdLocationPin } from "react-icons/md"
import {AiFillFacebook} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {FaSnapchat} from "react-icons/fa"
import {FaPinterestP} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"


function App() {
  return (
    <>
      <div className="topnav">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <div className="search">
          <input type="text" placeholder="Search.." />
          <GoSearch />
        </div>
      </div>
      <div className="image">
        <div>
          <h1>WELCOME</h1>
          <h2>hi guys!!</h2>
        </div>
      </div>

      <div className="content">
        <h2>THE BAND</h2>
        <p>
          <i>We love music</i>
        </p>
        <p>
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className="cards">
          <div>
            <p>Name</p>
            <img
              src="https://www.w3schools.com/w3images/bandmember.jpg"
              alt="img"
            />
          </div>
          <div>
            <p>Name</p>
            <img
              src="https://www.w3schools.com/w3images/bandmember.jpg"
              alt="img"
            />
          </div>
          <div>
            <p>Name</p>
            <img
              src="https://www.w3schools.com/w3images/bandmember.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>

      <div style={{ color: "white", backgroundColor: "black" }}>
        <div className="highlight">
          <h2>TOUR DATES</h2>
          <p>
            <i>Remember to book your tickets!</i>
          </p>
          <div className="box">
            <section>
              <div>
                September
                <span className="soldout">Sold out</span>
              </div>
            </section>
            <section>
              <div>
                October
                <span className="soldout">Sold out</span>
              </div>
            </section>
            <section>
              <div> November</div>
              <span className="tickets_left">3</span>
            </section>
          </div>
          <div className="box_card">
            
            <div className="card">
              <img
                src="https://www.w3schools.com/w3images/newyork.jpg"
                alt="img"
              />
              <div className="container" >
              <p>
                <b>New York</b>
              </p>
              <p>Fri 27 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button>Buy Tickets</button>
              </div>
            </div>

            <div className="card">
              <img
                src="https://www.w3schools.com/w3images/paris.jpg"
                alt="img"
              />
              <div className="container" >
              <p>
                <b>New York</b>
              </p>
              <p>Fri 27 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button>Buy Tickets</button>
              </div>
            </div>

            <div className="card">
              <img
                src="https://www.w3schools.com/w3images/sanfran.jpg"
                alt="img"
              />
              <div className="container" >
              <p>
                <b>New York</b>
              </p>
              <p>Fri 27 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button>Buy Tickets</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="contact">
        <h2>CONTACT</h2>
        <p >
          <i>Fan? Drop a note!</i>
        </p>
        <div className="address" >
          <div>
          <div>
            <MdLocationPin />
            <span>Chicago, US</span>
          </div>
          <div>
            <BsFillTelephoneFill />
            <span>Phone: +00 151515</span>
          </div>
          <div>
            <MdEmail />
            <span>Email: mail@mail.com</span>
          </div>
          </div>

        </div>
        <div className="inputs" >
          <div className="inputbox" >
          <input placeholder="Name" />
          <input placeholder="Email" />
          </div>
          <input placeholder="Message" />
          <button>SEND</button>
        </div>

      </div>

      <div className="background" ></div>
      <div className="icons">
        <div>
          <div  >
          <span>
        <AiFillFacebook size="24px" />
        </span>
        <span>
        <BsInstagram size="22px" />
        </span>
        <span>
        <FaSnapchat size="22px" />
        </span>
        <span>
        <FaPinterestP size="22px" />
        </span>
        <span>
        <FaTwitter size="22px" />
        </span>
        <span>
        <FaLinkedinIn size="22px" />
        </span>
          </div>
          
        <div >
          Inspired by <a href="https://www.w3schools.com/w3css/w3css_templates.asp" >w3schools</a> templates
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
