import './App.css';
import jsonData from './resumeData.json'
import About from './Components/About';
import Header from './Components/Header';
import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  }

  componentDidMount() {
    this.setState({resumeData: jsonData});
  }

  // getResumeData(){
  //   $.ajax({
  //     url:'/resumeData.json',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       this.setState({resumeData: data});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  // componentDidMount(){
  //   this.getResumeData();
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <About data={this.state.resumeData.resume}
               main={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
