import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Form from './Form'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



import { ContactsOutlined } from '@material-ui/icons';



const SendMoney=(props)=>{



  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    pos: {
      fontSize:"18px",
      marginBottom: 12,
    },
    title:
    {
      marginBottom:15,
      textAlign:"center"
    }
  });





  const classes = useStyles();
  const [name,setName]=useState();
  const [amount,setAmount]=useState();

  const val=(props.match.params.id)
  // console.log(val)
  const url = 'http://localhost:9000/customer/'+val;


  // For showing the data
  const [data,setData]=useState([])
  const [present,setPresent]=useState([])


  useEffect(()=>{
    
    const url = 'http://localhost:9000/customer/'; 
    fetch(url,{
      headers:{
        method: 'GET',
        "Content-type":"application/json"
      }
    }).then(res=>res.json())
    .then(result=>{
      // console.log(result)
      setData(result)
      
    })

    
  },[])

    useEffect(()=>
    {
      const url1 = 'http://localhost:9000/customer/'+val; 
    fetch(url1,{
      headers:{
        method: 'GET',
        "Content-type":"application/json"
      }
    }).then(res=>res.json())
    .then(result=>{

      console.log(result)
      setPresent(result)
      if(present.length>0)
      console.log(present)
      // console.log(typeof(result),typeof(present))
      
    })
    },val)

    



// return function starts


    return(<>
     <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" color="black" >
          Money transaction
        </Typography>
        <div style={{display:"flex",justifyContent:"center"}}>
        
        <Typography className={classes.pos} color="textSecondary">
          Name  :
        </Typography>
        <Typography style={{marginLeft:"8px",fontSize:"20px"}}>
        {present.name}
          
        </Typography>
        </div>


        <div style={{display:"flex",justifyContent:"center"}}>
        
        <Typography className={classes.pos} color="textSecondary">
         Present Amount  : 
        </Typography>
        <Typography style={{marginLeft:"8px",fontSize:"20px"}}>
        {present.amount}</Typography>
        </div>


      </CardContent>
      <CardActions>    
      {present.name!=undefined ?
        <Form sendername={present.name} id1={val}/>:""}
       
      </CardActions>
    </Card>
    </>
    )
}

export default SendMoney;




























