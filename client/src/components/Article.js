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
import Image from 'react-bootstrap/lib/Image';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

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
    //hardcoded for now 
    this._username = 'zob@princeton.edu'  
  
  }

  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.my_selectedOption = selectedOption;
    console.log(`Option selected:`, selectedOption);
  }

  componentDidMount() {
   this._username = this.props.username
 }
  
  render() {
    const { selectedOption } = this.my_selectedOption;
    const true_holder = true;
    var mylink = this.props.link

    const handleDelete = (event) => {
          
        
        // if (r == true){
          console.log('deleing aticle')
          var r = window.confirm('Are you sure you want to delete this article from your page?')
           this.serverRequest = axios.post('/api/deletearticle', {username: this._username, article_url: mylink})
            .then(res => {
                if(res.data){
                   alert(res.data.message)
                   console.log(res.data)
                   console.log('delete successful!!!! ')
                 }
            })
            window.location.reload();  
        
       return
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
      <div className="container">
        <div className="row articleContainer">
          <div className= "col-sm-2 articleImageContainer">
            <Image className="articleImage" src={this.props.image} responsive/>

          </div>
          
          <div className= "col-sm-8 articleContent">
         
            <a href={this.props.link} target="_blank" rel="noopener noreferrer"> 
           
            <div className = "row articleInside articleTitle">{this.props.title}</div>
            <div className = "row articleInside articleBody">{this.props.descrip}</div>
            <div className = "row articleInside articleBottom">
              <div className = "col articlefooter articleAuthor">Author</div>
              <div className = "col articlefooter articleDate">Date</div>
              <div className = "col-sm-10 articleTags">{this.props.tag}</div>
            </div>
            <div className = "row articleTopBar articleInside">
             
             <div className = "articleDeleteButton col-sm-2"><button onClick={handleDelete} className="articleDelete">remove</button></div>
           </div>
            </a>
       
          </div>
            
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