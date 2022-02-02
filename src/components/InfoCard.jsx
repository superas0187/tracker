import React from 'react';
import {Card} from '@material-ui/core'
import speech from '../assets/speech.jpg'


const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return(
        <div style={{ textAlign: 'center', padding: '0 10%', color: 'white' }}>
            <div style={{display: 'flex',  textAlign: 'center', justifyContent: 'center', color: 'width'}}>
                <img className="img" src={speech} alt="..." style={{width: '35px', height: '35px'}}/>
                <h2>Try saying:</h2>
            </div>
             
            Add {isIncome ? 'Income ' : 'Expense '}
            for { isIncome ? '$100 ' : '$50 '}
            in Category {isIncome ? 'Business ' : 'House '}
            for {isIncome ? 'Monday ' : 'Tueseday '}

        </div>
    )

}

export default InfoCard