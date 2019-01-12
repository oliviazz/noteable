// ---------------------------------------
// Component to display one article
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------


import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeForm } from 'actions/appActions'
import axios from 'axios';
import Panel from 'react-bootstrap/lib/Panel';
import { Redirect } from 'react-router-dom'

import { withRouter } from "react-router-dom";

import Select from 'react-select';
import Button from 'react-bootstrap/lib/Button';

const options = [
      { value: 'food', label: 'Food' },
      { value: 'tech', label: 'Tech' },
      { value: 'science', label: 'Science' },
      {value: 'politics', label: 'Politics'},
      {value: 'funny', label: 'Funny'},
      {value: 'health', label: 'Health'},
      {value: 'beauty', label: 'Beauty'},
      {value: 'fashion', label: 'Fashion'},
      {value: 'sports', label: 'Sports'},
      {value: 'long_read', label: 'Long Read'},
      {value: 'short_read', label: 'Short Read'},
      {value: 'family', label: 'Family'}
    ];


class Article extends React.Component {

  constructor() {
    super()
    this.my_selectedOption = ""
    this._userId = '54321'
    
  
  }

  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.my_selectedOption = selectedOption;
    console.log(`Option selected:`, selectedOption);
  }

  
  render() {
    const { selectedOption } = this.my_selectedOption;
    const true_holder = true;

    const handleDelete = (event) => {
        var r = window.confirm('Are you sure you want to delete this article from your page?')
        
        if (r == true){
           this.serverRequest = axios.post('/api/deletearticle', { userId: this._userId, article_url: this.props.link})
            .then(res => {
                if(res.data){
                   console.log(res.data)
                   console.log('delete successful')
                 }
            })
            window.location.reload();  
        }
        else{ return }
    }

    const editTag = (event) => {
          event.preventDefault()
          var r = window.confirm('Delete target?')
          
          if (r == true){
            alert('wait for implementation!')
             // this.serverRequest = axios.post('/api/', { article_url: this.props.link })
             //  .then(res => {
             //      if(res.data){
             //         console.log(res.data)
             //         console.log('delete successful')
             //       }
             //  })
             //  window.location.reload();  
          }
          else{ return }
    }
    return (
      <div>
         <div className = "container">
            <Panel>
            <Panel.Heading>

              <Panel.Title componentClass="h3">{this.props.title}
               <button onClick={handleDelete}>X</button></Panel.Title>
             
            </Panel.Heading>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <Panel.Body>
            
              <span className ="link-spanner"></span>
              {this.props.descrip}
              <h4> {this.props.sitename} </h4>
              <br></br>
              <br></br>
              <br></br>
              <img src={this.props.image} className="img-responsive center-block"/>   
              </Panel.Body>
               </a>



               <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                isMulti={true_holder}
              />
              <a onClick = {editTag}><h5>{this.props.tag} </h5></a>
          



            </Panel>
          
        </div>
        
      </div> 
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.loggedIn
})

const mapDispatchToProps = dispatch => ({
  handleChange: values => dispatch(changeForm(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(Article)