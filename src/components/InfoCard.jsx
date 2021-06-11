import React from 'react';


const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return(
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            <h2>Try saying:</h2> 
            Add {isIncome ? 'Income ' : 'Expense '}
            for { isIncome ? '$100 ' : '$50 '}
            in Category {isIncome ? 'Business ' : 'House '}
            for {isIncome ? 'Monday ' : 'Tueseday '}

        </div>
    )

}

export default InfoCard