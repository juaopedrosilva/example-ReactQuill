import React, { Component } from 'react' 
import ReactQuill from 'react-quill' 
import 'react-quill/dist/quill.snow.css' 
import ReactHtmlParser from 'react-html-parser'
import './App.css'

export default class App extends Component { 
  state = { text: ''}
  handleChange = (value)  => {
    this.setState({ text: value })
    
  } 
  render() {
    return (
      <div className='container'>
        <ReactQuill 
          value={this.state.text} 
          onChange={this.handleChange}  
        />
        <div class='text'>
          { ReactHtmlParser(this.state.text)   }
        </div>
      </div>   
    )
  }
}