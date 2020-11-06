import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Form from './Form'

import { ContactsOutlined } from '@material-ui/icons';

const SendMoney=(props)=>{
  const [name,setName]=useState();
  const [amount,setAmount]=useState();

  const val=(props.match.params.id)
  // console.log(val)
  const url = 'http://localhost:9000/customer/'+val;


  // For showing the data
  const [data,setData]=useState([])
  const [present,setPresent]=useState([])


  // useEffect(()=>{
    
  //   const url = 'http://localhost:9000/customer/'; 
  //   fetch(url,{
  //     headers:{
  //       method: 'GET',
  //       "Content-type":"application/json"
  //     }
  //   }).then(res=>res.json())
  //   .then(result=>{
  //     console.log(result)
  //     setData(result)
      
  //   })


    // const url1 = 'http://localhost:9000/customer/'+val; 
    // fetch(url1,{
    //   headers:{
    //     method: 'GET',
    //     "Content-type":"application/json"
    //   }
    // }).then(res=>res.json())
    // .then(result=>{

    //   console.log(result.id)
    //   setPresent(result)
    //   console.log(present)
      
    // })
    
  // },[])

  // const add= data.find(x => {return x._id===val}
  //   )
  // console.log(add);



// Call the API
// fetch('http://localhost:9000/customer/').then(function (response) {
// 	if (response.ok) {
// 		return response.json();}
// }).then(function (first) {

// 	// Store the post data to a variable
// 	 setData(first);

// 	// Fetch another API
// 	return fetch('http://localhost:9000/customer/'+val );

// }).then(function (response) {
// 	if (response.ok) {
// 		return response.json();
// 	} 
// }).then(function (userData) {
// 	setPresent(userData)
// }).catch(function (error) {
// 	console.warn(error);
// });
  
    useEffect(()=>{

      const url1 = 'http://localhost:9000/customer/'+val; 
      fetch(url1,{
        headers:{
          method: 'GET',
          "Content-type":"application/json"
        }
      }).then(res=>res.json())
      .then(result=>{
        // console.log(result)
        setPresent(result)
      })
      
      
    },[])

  

  // For showing the data






    
    









// return function starts


    return(<>
        <h1>Name:{present.name}</h1>
        <h3> Present Amount:{present.amount}</h3>
        <Form sendername={present.name} id1={url}/>
        </>
    )
}

export default SendMoney;






























