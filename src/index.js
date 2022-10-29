import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.png'

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
                <td>Eron Leung</td>
                <td>leunge23@lsrhs.net</td>
            </tr>
            <tr>
                <td>Captain</td>
                <td>Nethan Madhav</td>
                <td>madhavn23@lsrhs.net</td>
            </tr>
            <tr>
                <td>Assistant Captain</td>
                <td>Divya Senthurchelvan</td>
                <td>senthurchelvand24@lsrhs.net</td>
            </tr>
            <tr>
                <td>Assistant Captain</td>
                <td>Sean Mabli</td>
                <td>mablis25@lsrhs.net</td>
            </tr>
        </table>
        <br />
        <br />
    </div>,
    document.getElementById('root'));