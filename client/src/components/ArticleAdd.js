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

class ArticleAdd extends React.Component {


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    tag_article(tag_name) {
        alert(tag_name);
    }
    render() {
        const status = 'Enter Article URL';
        const labelname1 = "Eats";
        const labelname2 = "Tech";
        const labelname3 = "Wow";

        const submitArticle = event => {
            event.preventDefault()
            alert('Submitted ' + this.state.article_url);
            axios.post('/api/addarticle', { article_url: this.state.article_url })
                .then(res => {
                    console.log("Received response: ", res.data);
                })
            this.props.history.push('/mypage')   

        }
        return (
            <div>
            <Grid>
            <Row>
 
            <Col xs={4} md={3}>
        <p>Tags</p>
        <Nav  stacked>
            
                  <NavItem eventKey={2} href="#">
                    Food
                      <Glyphicon glyph="star" /> 
                  </NavItem>
                   <NavItem eventKey={2} href="#">
                    Photography
                  </NavItem>
                   <NavItem eventKey={2} href="#">
                    Travel
                  </NavItem>
                   <NavItem eventKey={2} href="#">
                    Funny
                  </NavItem>
                
        </Nav>
        <p>Time</p>
        <Nav  stacked>
            
                  <NavItem eventKey={2} href="#">
                    All Time
                    
                  </NavItem>
                   <NavItem eventKey={2} href="#">
                   Last Month
                  </NavItem>
                   <NavItem eventKey={2} href="#">
                   Last Week
                  </NavItem>
                   <NavItem eventKey={2} href="#">
                    Today
                  </NavItem>
                
        </Nav>
    </Col>
            <h1> Noteable </h1> 
            <div className = "status" > { status } < /div>
            <form onSubmit = { submitArticle } >
            <input className = "article_input" name = "article_url" ref = "article_add_place" type = "text" onChange = { (e) => this.handleChange(e)}></input> 
            <br></br>

            <ButtonToolbar>
            <Button bsStyle="info"> {labelname1 }</Button>
            <Button bsStyle="info"> {labelname2 }</Button>
            <Button bsStyle="info"> {labelname3 }</Button>
            <Button type="submit"> Submit</Button>
            </ButtonToolbar>
            </form> 
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
