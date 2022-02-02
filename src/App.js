import React, { useEffect, useRef,useContext } from 'react';
import { Grid, Typography, Card } from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import Details from './components/Details'; 
import Main from './components/Main/Main';
import Footer from './components/Footer'
import { SpeechState, useSpeechContext } from '@speechly/react-client';
import { ExpenseTrackerContext } from './context/context';
import {  CardHeader, Tooltip} from '@material-ui/core';
import List from './components/Main/List/List';
import InfoCard from './components/InfoCard';
import Form from './components/Main/Form/Form';
import speech from './assets/speech.jpg'
import  './styles';
// import Tooltip from '@mui/material/Tooltip';

const App = () => {
    // const classes = useStyles();
    const { speechState } = useSpeechContext();
    const { balance } = useContext(ExpenseTrackerContext);
    const main = useRef(null);

    const executeScroll = () => main.current.scrollIntoView();

    useEffect(() => {
        if(speechState === SpeechState.Recording) {
            executeScroll();
        }
    
    }, [speechState]);

    return (
        <>
            <div className="header">
                <h1>Simple,voice enabled </h1>
                <p>income/expense report tool.</p>
            </div>
            <div className="navbar">
                <InfoCard/>
            </div>
            <div class="row">
                <div class="side">
                    <h2>Details</h2>
                    <h5>Details of me Income:</h5>
                    <Details title="Income"/>
                    <p>Apply with react-chartjs-2</p>
                    <h3>Details of me Expense:</h3>
                    <Details title="Expense"/>
                    <p>Apply with react-chartjs-2</p>
                </div>
                <div class="main">
                    <h2>FORM</h2>
                    <h5>Enter a new record</h5>
                    <br/>
                    <Form/>
                    <br/>
                    <p>You need to get approval after creating a record..</p>
                    <Typography align="center" variant="h5" style={{backgroundColor: 'black', color: 'white', opacity: '0.8', padding: '10px'}} >Total Balance ${balance}</Typography>
                    <br/>
                    <h2>LIST</h2>
                    <h5>You can track and delete records from your list</h5>
                    <br/>
                    <List/>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel/>
            </PushToTalkButtonContainer>
            <div class="">
                <Footer/>
            </div>
            
        </>
        
        );
    }

export default App;

