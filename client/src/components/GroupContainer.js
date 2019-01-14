// ---------------------------------------
// Component rendered showing "My Page"
// Written in react native.js 
//
// Team Noteable -  Olivia, Zoe, and Lyra
//----------------------------------------

import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Group from 'components/Group'
import UserBox from 'components/UserBox'

import LoginForm from 'components/Login/LoginForm'
import ArticleAdd from 'components/ArticleAdd'
import { login, setErrorMessage } from 'actions/appActions'
import axios from 'axios'

import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';



class GroupContainer extends React.Component {
        // 
        // Set some initial properties we want to 
        // access across functions
        // ---------------------------------------
        constructor(props) {
            super(props)
            this.state = {
                'full_article_info':[],
                'group_components':[],
                'display': 'all'
            }

            this._retrieved_articles = [];

            this._ismounted = true;
            // Stores valid article URLs
            this._article_urls = [];
            // Stores metadata of all valid article URLs 
            this._full_article_info = [];
            // Stores the rendered Article components
            this._ArticleComponents = [];

            this._gotfulldata = false;

            this._userId = '54321'

            this._user = 'livz'

            this._active_tag_filters = ''
        }

        // Called right after component mounts
        // ---------------------------------------
        componentDidMount() {
                const { loggedIn, handleSubmit, currentlySending, formState, errorMessage } = this.props

                this._ismounted = true;
                var article_names = [];
                var article = ""
                let cleaned_article_names = []
                let full_info = []

                var components = []
                var groups
                console.log('Did the state change', this.state.display)

                if (this.state.display == 'all'){
                     axios.post('/api/displayallgroups').then(res => {
                        groups = res.data.results;
                        console.log("all: ", groups)
                        console.log("Received response: ", res.data.results);
                        for(var i = 0; i < Object.keys(groups).length; i++){
                            components.push(<Group groupName = {groups[i]['groupname']} groupPage = 'insertURL.com'/>)
                        }
                        this.setState({group_components:components})
                    })
                }
                else if (this.state.display = 'mine_only'){
                    axios.post('/api/displaymygroups').then(res => {
                        groups = res.data.results;
                        console.log("Received response: ", res.data.res);
                        for(var i = 0; i < Object.keys(groups).length; i++){
                            components.push(<Group groupName = {groups[i]['groupname']} groupPage = 'insertURL.com'/>)
                        }
                        this.setState({group_components:components})
                    })

                }
                else if(this.state.display = "search_results"){
                    groups = []
                    axios.post('/api/displayallgroups').then(res => {
                        for (var i = 0; i < Object.keys(res.data.results).length; i++){
                            if(res.data.results[i]['groupname'].includes(JSON.stringify(this.state.newgroup), 0)){
                                groups.push(res.data.results[i]['groupname']);
                            }
                        }
                        console.log("Received response: ", groups);
                        for(var i = 0; i < Object.keys(groups); i++){
                                components.push(<Group groupName = {groups[i]} groupPage = 'insertURL.com'/>)
                        }
                        this.setState({group_components:components})
                    })
                }
            
                // {API} Load the articles from the database by calling getarticle
                if (typeof this._source != typeof undefined) {
                    this._source.cancel('Operation canceled due to new request.')
                }
                this._source = axios.CancelToken.source();
               
            
            }

//        componentWillUnmount() {
//            this._ismounted = false;
//
//        }

        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        // Defines the HTML code atually returned and shown
        // in the component
        // ---------------------------------------    
        render() {
      
            const onChange = (event) => {
                alert('heyyy')
            }

            const displayallgroups = (event) => {
                // alert('displaying all groups')
                
                var groups = []
                var components = []
                axios.post('/api/displayallgroups').then(res => {
                    groups = res.data.results;
                  console.log("Received response: ", res.data.results);
                  for(var i = 0; i < Object.keys(groups).length; i++){
                    components.push(<Group groupName = {groups[i]['groupname']} groupPage = 'insertURL.com'/>)
                    }
                    this.setState({group_components:components})
                });
                console.log(groups);
                this.setState({'display': 'all'});
            }

            const addGroup = (event) => {
                axios.post('/api/creategroup', {groupname: JSON.stringify(this.state.newgroup)}).then(res => {
                  console.log("Received response: ", res.data);
              })       
            }

            const showmygroups = (event) => {
                var components = []
                var groups = []
                axios.post('/api/displaymygroups').then(res => {
                    groups = res.data.results;
                    console.log("Received response: ", res.data.results);
                    console.log(groups)
                    for(var i = 0; i < Object.keys(groups).length; i++){
                        components.push(<Group groupName = {groups[i]['groupname']} groupPage = 'insertURL.com'/>);
                    }
                    this.setState({group_components:components})
                })
//                console.log(groups)
                this.setState({'display': 'mine_only'})
            }

            const searchGroups = (event) => {
                alert('searching for group')
                this.setState({'display': 'search_results'})
                
                var groups = []
                var foundgroups = []
                var components = []
                    axios.post('/api/displayallgroups').then(res => {
                        groups = res.data.results;
                        
                        for(var j = 0; j < Object.keys(groups).length; j++){   
                            var searchTerm = String(this.state.searchTerm)
                            var myName = groups[j]['groupname']
                            // console.log(myName, searchTerm)
                            var matches = myName.includes(searchTerm)
                            if(matches){
                                // console.log(myName, 'it matches!!', searchTerm)     
                                foundgroups.push(groups[j]);
                            }
                        }
                        for(var i = 0; i < Object.keys(foundgroups).length; i++){
                                components.push(<Group groupName = {foundgroups[i]['groupname']} groupPage = 'insertURL.com'/>)
                        }
                        this.setState({group_components:components})
                    })
            }

            return(
                <div> 
                <Grid>
                     <Row>
                    
                     <Col xs={3} md={2}>
                
                        <ButtonToolbar>
                             <h3>Groups Toolbar </h3>
                            <Button onClick={displayallgroups}> Show All Groups </Button> 
                                <br></br><br></br><br></br>
                            <Button onClick={showmygroups}> Show My Groups </Button> 
                                <br></br><br></br><br></br>
                            <input id="group_search"  className = 'input-lg' type="text" placeholder="New Group Name" name="newgroup" value={this.state.value} onChange = { (e) => this.handleChange(e)}/><br></br>
                            <Button onClick={addGroup}> + Make New Group </Button>
                            <br></br><br></br><br></br>
                            <input id="group_search"  className = 'input-lg' type="text" placeholder="Find Group" name="searchTerm" value={this.state.value} onChange = { (e) => this.handleChange(e)}/><br></br>
                            <Button onClick={searchGroups}> Search Groups </Button>

                         
                        </ButtonToolbar>
                    
                   
                    </Col>
                    <Col xs={1} md={1}></Col>
                        
                    <Col xs={8} md={8}>
                        <h2>{this._user}'s Noteable</h2> 
                        <h3>Showing {this.state.display} Groups </h3>
                        {this.state.group_components.map(group => <div>{group}</div>)} 
                    </Col>


                    </Row>
                </Grid>      
            </div >);
            }
        }

        const mapStateToProps = state => ({
            loggedIn: state.loggedIn,
            currentlySending: state.currentlySending,
            formState: state.formState,
            errorMessage: state.errorMessage
        })

        const mapDispatchToProps = dispatch => ({
            handleSubmit: (username, password) => dispatch(login(username, password)),
            clearErrors: () => dispatch(setErrorMessage(''))
        })

            // Make this component exportable to appear in other components
        export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer)