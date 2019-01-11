// ---------------------------------------
// Component housing URL submission form
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeForm } from 'actions/appActions'
import axios from 'axios';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import NavItem from 'react-bootstrap/lib/NavItem';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Select from 'react-select';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';


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

const tag_1 = 'food'
const tag_2 = 'tech'
const tag_3 = 'business'
const tag_4 = 'funny'
const tag_5 = 'politics'
const tag_6 = 'health'
const tag_7 = 'music'
class ArticleAdd extends React.Component {


  constructor() {
    super()
    this.my_selectedOption = ""
    this.user = "olivia"
    
  
  }
  handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
  }

    state = {
      selectedOption: null,
    }

    handleChange_searchtag = (selectedOption) => {

      
    }

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


  render() {
      const { selectedOption } = this.my_selectedOption;
      const true_holder = true;
      const status = 'Enter Article URL';

      const submitArticle = event => {
          event.preventDefault()
          alert('Submitted ' + this.state.article_url + "for user " + this.user);
          alert('Tags: ', JSON.stringify(this.my_selectedOption));
          axios.post('/api/addarticle', { article_url: JSON.stringify(this.state.article_url), tags: JSON.stringify(this.my_selectedOption), user: JSON.stringify(this.user)})
              .then(res => {
                  console.log("Received response: ", res.data);
              })
          this.props.history.push('/mypage')   

      }
        return (
            <div>
            <Grid>
            <Row>
 
            <Col xs={5} md={2}>
                        <h3>tags</h3>
                        <ButtonToolbar>
                            <ToggleButtonGroup  onChange={this.handleChange_searchtag} type="checkbox" value={1}>
                              <ToggleButton className = "navButton" value={tag_1}>{tag_1}</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value={tag_2}>{tag_2}</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value={tag_3}>{tag_3}</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value={tag_4}>{tag_4}</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value={tag_5}>{tag_5}</ToggleButton><br></br>
                              <ToggleButton className = "navButton" className = "navButton" value={tag_6}>{tag_6}</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value={tag_7}>{tag_7}</ToggleButton><br></br>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                        <br></br>
                        <h3>time</h3>
                        <ButtonToolbar>
                            <ToggleButtonGroup onChange={this.handleChange_searchtag} type="checkbox" value={1}>
                              <ToggleButton className = "navButton" value="week">This Week</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value="month">This Month</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value="3months">Last 3 Months</ToggleButton><br></br>
                              <ToggleButton className = "navButton" value="year">This Year</ToggleButton><br></br>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </Col>
                    <Col xs={2} md={2}>
                
                    </Col>
                    <Col xs={5} md={4}>
                        <h1> Noteable </h1> 
                        <div className = "status" > { status } < /div>
                        <form onSubmit = { submitArticle } >

                        <input class="form-control input-lg" className = "article_input" name = "article_url" ref = "article_add_place" type = "text" onChange = { (e) => this.handleChange(e)}></input> 
                        <br></br>

                        <ButtonToolbar>
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange_tag}
                            options={options}
                            isMulti={true_holder}
                        />
                        <Button type="submit"> Submit</Button>
                        </ButtonToolbar>
                        </form> 
                    </Col>
        </Row>
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAdd)
