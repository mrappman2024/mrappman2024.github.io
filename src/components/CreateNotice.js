import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Container,TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NoteCard from './NoteCard';

const componentStyles = makeStyles({
  btn:{
    fontSize: 60,
    backgroundColor: 'violet'
  },
  title:{
     fontSize:20
  },
  field:{
     marginTop: 20,
     marginBottom: 20,
     display: 'block'
  }
})

const Item = styled(Paper)(() => ({
  backgroundColor: '#98d6a9',
  padding: 8,
  textAlign: 'center',
  color: 'black',
}));

function CreateNotice() {
  const classes = componentStyles();

  const submitClicked = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Typography className={classes.title} color="primary" align="center">
        Create a new notice
      </Typography>
      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("Button clicked");
        }}
      >
        Submit
      </Button>

      <form noValidate autoComplete="off" onSubmit={submitClicked}>
        <TextField
          onChange={(e) => {
            console.log(e.target.value);
          }}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        ></TextField>
      </form>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <NoteCard></NoteCard>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CreateNotice