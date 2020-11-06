import React, { useEffect,useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'
import SendMoney from './SendMoney'

import Data from '../Data'

// ui styling

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name,amount) {
  return { name, amount };
}



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


// export function starts

export default function CustomizedTables() {
  const [data,setData]=useState([])
  useEffect(()=>{
    
    const url = 'http://localhost:9000/customer/'; // site that doesn’t send Access-Control-*
    fetch(url,{
      headers:{
        method: 'GET',
        "Content-type":"application/json"
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      setData(result)
    })
  },[])

  const classes = useStyles();

  return (
    <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Customer Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Amount Present</StyledTableCell>
            <StyledTableCell align="right">Money Transanction</StyledTableCell>
            
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((Data) => (
            <StyledTableRow key={Data._id}>
              <StyledTableCell component="th" scope="row" >{Data.name}</StyledTableCell>
              <StyledTableCell align="center">{Data.email}</StyledTableCell>
              <StyledTableCell align="center">{Data.amount}</StyledTableCell>
              <StyledTableCell align="right"><Button color="inherit">
              <Link to={"/sendmoney/"+Data._id} style={{textDecoration:"none"}}>Send Money</Link>
              </Button></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    
    </>
  );
}
