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
                        for(var i = 0; i < 4; i++){
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

        componentWillUnmount() {
            this._ismounted = false;

        }

        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }


        load_page_results = (selected) => {
            console.log('reloading this!!!')
            

            // make a http request 

        }

      

        // { }
        // extract on tags 
        // save from everything 


        // Defines the HTML code atually returned and shown
        // in the component
        // ---------------------------------------    
        render() {
      
            const onChange = (event) => {
                alert('heyyy')
            }

            const displayallgroups = (event) => {
                alert('displaying all groups')
                this.setState({'display': 'all'})
                var groups = axios.post('/api/displayallgroups').then(res => {
                  console.log("Received response: ", res.data.results);
                  for(var i = 0; i < groups.length; i++){
                    this.state.group_components(<Group groupName = {groups[i][0]} groupPage = 'insertURL.com'/>)
                    }
                })
                console.log(groups)
             
            }

            const addGroup = (event) => {
                axios.post('/api/creategroup', {groupname: JSON.stringify(this.state.newgroup)}).then(res => {
                  console.log("Received response: ", res.data);
              })       
            }

            const showmygroups = (event) => {
                this.setState({'display': 'mine_only'})
                
                var groups = axios.post('/api/displaymygroups').then(res => {
                  console.log("Received response: ", res.data.results);
                  for(var i = 0; i < groups.length; i++){
                    this.state.group_components(<Group groupName = {groups[i][0]} groupPage = 'insertURL.com'/>)
                    }
                })
                console.log(groups)
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
                            if(groups[j]['groupname'].includes(JSON.stringify(this.state.searchTerm), 0)){
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
                    
                     <Col xs={3} md={2} className = "buttonToolbar">
                
                        <ButtonToolbar>
                             <div className = "groupsToolbar tagsHeader">groups toolbar </div>
                            <Button onClick={displayallgroups} className="groupButton"> Show All Groups </Button> 
                                <br></br><br></br><br></br>
                            <Button onClick={showmygroups} className="groupButton"> Show My Groups </Button> 
                                <br></br><br></br><br></br>
                            <input id="group_search"  className = 'input-lg groupButton' type="text" placeholder="New Group Name" name="newgroup" value={this.state.value} onChange = { (e) => this.handleChange(e)}/><br></br>
                            <Button onClick={addGroup} className="groupButton"> + Make New Group </Button>
                            <br></br><br></br><br></br>
                            <input id="group_search"  className = 'input-lg groupButton' type="text" placeholder="Find Group" name="searchTerm" value={this.state.value} onChange = { (e) => this.handleChange(e)}/><br></br>
                            <Button onClick={searchGroups} className="groupButton"> Search Groups </Button>

                         
                        </ButtonToolbar>
                    
                   
                    </Col>
                    
                    <Col xs={4} md={4}>
                        <div className = "usernameDisplay groupdisplay"><div className="groupUser">{this._user}'s</div> <div className="groupsNoteable">Noteable:</div> </div> 
                        <div className = "usernameDisplay groupdisplay showingBlankGroups">showing {this.state.display} groups </div>
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