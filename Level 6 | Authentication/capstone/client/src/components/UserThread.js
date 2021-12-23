import React, { useContext } from "react";
import { AppContext } from "../Context/AppProvider";

import { Button, Container, CssBaseline, Grid, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid';


export default function UserThread(props){
  const { deleteThread } = useContext(AppContext)
  const {threadName, topic, user, _id, dateCreated} = props
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const date = new Date(dateCreated).toLocaleDateString()
  return (
    <div className="userthread">
      <CssBaseline/>
      <Container >
        <Box>
          <Typography>Title: {threadName}</Typography>
          <Typography>Topic: {topic}</Typography>
          <Typography>Created on: {date}</Typography>
          <Button onClick={() => deleteThread(_id)}><Typography variant="caption">Delete</Typography></Button>
        </Box>
        <Divider/>
        {/* <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>{threadName}</Item>  
          </Grid>
        </Grid> */}
        {/* <DataGrid
        columns={[{ field: 'title' }, { field: 'topic' }, { field: 'user' }]}
        rows={[
          {
            id: 1,
            username: {threadName},
            age: 20,
          },
        ]}
      /> */}
      </Container>
    </div>
  )
}