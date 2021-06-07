import React from 'react';

import { TextEield, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';

import useStyles from './styles';
import { FormatBoldTwoTone } from '@material-ui/icons';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: new Date(),
}

const Form = () => {
    const classes = useStyles();
    const [ formData, setformData] = useState(initialState);

    console.log(formData);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={FormatBoldTwoTone.type} onChange={(e) => setformData({ ...formData, type: e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setformData({ ...formData, category: e.target.value})}>
                        <MenuItem value="business">Business</MenuItem>
                        <MenuItem value="salary">Salary</MenuItem> 
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setformData({ ...formData, amount: e.target.value })} /> 
            </Grid>
            <Grid item xs={6}>
                <TextField type="data" label="Data" fullWidth value={formData.date} onChange={(e) => setformData({ ...formData, date: e.target.value })}/> 
            </Grid>
            <Button className={classes.button} variavt="outlined" color="primary" fullWidth>Create</Button>
        </Grid>
    );
}

export default Form