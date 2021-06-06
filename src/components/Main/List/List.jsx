import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Slide, ListItemText } from '@material-ui/core';
import{ Delete, MonevOff } from '@material-ui/icons';

import useStyles from './styles';
import transitions from '@material-ui/core/styles/transitions';


const List = () => {
    const classes = useStyles();

    const transactions = [
        { id: 1, type: "Income", category: 'Salary', amount: 50, date: new Date() }
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide  direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MonevOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transitions.category} secondary={`$${transition.amount} - ${transition.data}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List