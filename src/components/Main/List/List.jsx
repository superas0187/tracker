import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Slide, ListItemText, Card } from '@material-ui/core';
import{ Delete, MoneyOff } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';



import useStyles from './styles';
import transactions from '@material-ui/core/styles';



const List = () => {
    const classes = useStyles();
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

    
    return (
        <Card style={{boxShadow: ' 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide  direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
        </Card>
    )
}

export default List