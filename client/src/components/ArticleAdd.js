// ---------------------------------------
// Component housing URL submission form
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------
// // !------> Always add intro text for clean code 
// ###################################################
// # ArticleAdd Component 
// #
// # Form to add an article to a noteable list. 
// # Attach tags and input URL; makes POST 
// # Statement to API 
// ###################################################
// (!------> indicates comments/things to change from December 2020) 



// Imports
// =================================
import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Select from 'react-select';


// =================================
//!------>  PRINCIPLE: DONT HARDCODE THINGS! 
//!------> Don't hardcode things. You should pass this tag dictionary into a dummy parent component that 
//          can then pass this onto both ArticleAdd and PageContainer via props, programmatically. 
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

class ArticleAdd extends React.Component {
  constructor() {
    super()
    // !------> comments to define class variables! 
    // to store tags that aer selected 
    this.my_selectedOption = ""
    // for display + POST requerst purposes. Need to find better method than localStorage
    //this._username = localStorage.getItem('username')
    this.username = 'livya.zhang@gmail.com'
  }

  // !------> Comment what each function does.
  // This function, when tag buttons are pressed, sets the state variable/ 
  // The value will be whatever the value of the button was changed to 
  handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
  }
  state = {
      selectedOption: null,
  }

  // !------>  Again, comment what this function is for. 
  // This function is to help process the string of selected tags inputted by the user
  handleChange_tag = (selectedOption) => {
      var tag_string = ""
      console.log(selectedOption, "selected option")
      for (var item in selectedOption){
        console.log(selectedOption[item]['value'], 'selected')
        tag_string += selectedOption[item]['value'] + " "
      }
      tag_string = tag_string.substring(0, tag_string.length - 1);
      this.my_selectedOption = tag_string
  }

// function requireAuth(nextState, replace, next) {
//   if (!authenticated) {
//     replace({
//       pathname: "/login",
//       state: {nextPathname: nextState.location.pathname}
//     });
//   }
//   next();
// }

// Lifecycle Methods 
// ==============================================
//======================== Component has been rendered to the DOM the first time 
componentDidMount() {
    this._username = localStorage.getItem('username')
}

// ======================== Regenerates when setState changed 
render() {
      //!----------> 
      console.log(this.props, "passed props")
      const { selectedOption } = this.my_selectedOption;
      const true_holder = true;
      const status = 'Please Enter Article URL:';

      const submitArticle = event => {
          
          if (this._username.length  == 0){
            this._username = "livya.zhang@gmail.com";
          }
          event.preventDefault()
          console.log('Submitting ' + this.state.article_url + "for user " + this._username + '...');
          console.log('Tags from input: ', JSON.stringify(this.my_selectedOption));
          
          axios.post('/api/addarticle', { 
            article_url: JSON.stringify(this.state.article_url), 
            tags: JSON.stringify(this.my_selectedOption), username: this._username
          })
              .then(res => {
                  console.log("Received response: ", res.data);
              })
          
          // attempt to redirect to home page
          this.props.history.push({
            pathname: '/mypage',
            state: {username: this._username, displayUsername: this._username} 
          }) 
  
      }
        return (
          <div>
            <Grid>
              <Row>
                <Col xs={5} md={4}>
                  <div className = "status" > {status} </div>
                  <form onSubmit = { submitArticle } className = "addarticleForm addarticle" >
                    {/* !------> Note: could programmatically generate these CSS classes for more flexibility
                        in the JS and speedd */}
                    <input className="form-control input-lg addarticleForm" className = "article_input addarticle" name = "article_url" ref = "article_add_place" type = "text" onChange = { (e) => this.handleChange(e)}></input> 
                    <ButtonToolbar>
                      <Select className = "addarticle"
                          value={selectedOption}
                          onChange={this.handleChange_tag}
                          options={options}
                          isMulti={true_holder}
                      />
                      <Button type="submit" className = "addarticle submitaddarticle"> Submit</Button>
                    </ButtonToolbar>
                  </form> 
                </Col>
              </Row>
            </Grid>
           </div> 
        );
    }
}


// This is part of react redux
const mapStateToProps = state => ({
    loggedIn: state.loggedIn
})

// This is part of react redux 
const mapDispatchToProps = dispatch => ({
    // handleChange:values => dispatch(changeForm(values))
})

// Connects react component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(ArticleAdd)
