import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { timingSafeEqual } from 'crypto';

class App extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('messageNotification') === null) {
      let data = [];
      localStorage.setItem('messageNotification', JSON.stringify(data));
      }
    this.state  = ({
      listMessage : JSON.parse(localStorage.getItem('messageNotification'))
    });
  }
  registerListenLocal=()=>{
      this.setState({
        listMessage : JSON.parse(localStorage.getItem('messageNotification'))
      })
  }
  render() {
    return (
      <div> 
          Notification
          <button onClick={this.registerListenLocal}>Reload List</button>
          {this.state.listMessage.map((e,i)=>{
              return (<div className='container' key={i}>
                    <img className='image-firebase' src={e.icon}/>
                    <div className='container-firebase'>
                      <p className = 'title-firebase'>{e.title}</p>
                      <p className = 'body-firebase'>{e.body}</p>
                    </div>
              </div> )
          })
          }
      </div>
    );
  }
}

export default App;
