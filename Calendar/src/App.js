
import './App.css';
import { Component } from 'react';

//import Calendar from 'react-calendar';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment'
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    allDay: false,
    end: new Date('October 09, 2020 20:00:00'),
    start: new Date('October 09, 2020 06:00:00'),
    title: 'hi',
  }
]

class Projects extends Component{
  render(){
    return(
        <div className="projects">
            <h1>Projects</h1>
            <ul>
              <li>기계학습개론</li>
              <li>컴퓨터네트워크개론</li>
              <li>SW코칭 프로그램</li>
            </ul>
        </div>
    );
  }
}


class App extends Component{
  state = {
    date: new Date(),
  }
  render(){
    return (
      <div className="App">
        <div className="container">
        <Projects></Projects>

        <div className="calendar">
          <Calendar 
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
