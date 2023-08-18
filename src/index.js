import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.png'

import codeninja from "./sponsorimages/codeninja.png"
import dsdlabs from "./sponsorimages/dsdlabs.png"
import mooyah from "./sponsorimages/mooyah.png"
import raytheon from "./sponsorimages/raytheon.png"

ReactDOM.render(
    <div>
        <div class="header">
            <h1 class="title">Warrior Robotics</h1>
            <img src={logo} alt='' class="logo" />
        </div>
        <h2>About Us</h2>
        <br />
        <p>
            Warrior Robotics is the premier technology-based student activity at Lincoln Sudbury Regional High School, made up of 35 students who participate in the FIRST Robotics Competition (FRC). This international engineering competition challenges students to work together as a team, with the help of teachers and mentors, over the course of 30 days to brainstorm, design, construct and test their robot, culminating in competitions where teams put their robots to the test. The team is entirely student-led and dependent on community fundraising in order to meet our budget for robot parts, competition fees, and team travel.
        </p>
        <br />
        <br />
        <h2>Contact Us</h2>
        <br />
        <table>
            <tr>
                <td>Coach / Mentor</td>
                <td>Paul Shultz</td>
                <td>paul_shultz@lsrhs.net</td>
            </tr>
            <tr>
                <td>Captain</td>
                <td>Divya Senthurchelvan</td>
                <td>senthurchelvand24@lsrhs.net</td>
            </tr>
            <tr>
                <td>Captain</td>
                <td>Asher Leavitt</td>
                <td>leavitta24@lsrhs.net</td>
            </tr>
            <tr>
                <td>Assistant Captain</td>
                <td>Sean Mabli</td>
                <td>mablis25@lsrhs.net</td>
            </tr>
            <tr>
                <td>Assistant Captain</td>
                <td>Arjun Goray</td>
                <td>goray25@lsrhs.net</td>
            </tr>
        </table>
        <br />
        <br />
        <h2>Sponsors</h2>
        <br />

        <div className="sponsorscontainer">
            <div className="sponsor">
                <img
                  src={codeninja}
                  alt="Code Ninja"
                  className="sponsorimage"
                />
            </div>
            <div className="sponsor">
                <img
                  src={dsdlabs}
                  alt="DSD Laboratories"
                  className="sponsorimage"
                />
            </div>
            <div className="sponsor">
                <img
                  src={mooyah}
                  alt="Mooyah"
                  className="sponsorimage"
                />
            </div>
            <div className="sponsor">
                <img
                  src={raytheon}
                  alt="Raytheon"
                  className="sponsorimage"
                />
            </div>
        </div>
    </div>,
    document.getElementById('root'));
