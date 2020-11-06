import React,{useState,useEffect} from 'react'


const Form=(props)=>{
  const [data,setData]=useState([])
  const [name,setname]=useState([])


  const getdata=(e)=>{
    setname(e.target.value)

    console.log(e.target.value)
    const url = 'http://localhost:9000/customer/'+name; 
    fetch(url,{
      headers:{
        method: 'GET',
        "accept":"application/json",
        "Content-type":"application/json"
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      setname(result)
      
    })
    // console.log(e.target.value)
    // const value=(data.filter(v=>v._id===e.target.value).map(filtered =>(console.log(filtered.name))))
    // console.log(value)

  }

  useEffect(()=>{
    
        const url = 'http://localhost:9000/customer/'; 
        fetch(url,{
          headers:{
            method: 'GET',
            "accept":"application/json",
            "Content-type":"application/json"
          }
        }).then(res=>res.json())
        .then(result=>{
          console.log(result)
          setData(result)
          
        })
        
      },[])

    
      

      return(
        <>
          <select name="Select Name" 
          onChange={getdata}
        > 

        {data.map((Data) => (
            <option value={Data._id}>
              {Data.name}</option>
          ))}
        </select>
        <input type="Number"></input>
        <button type="Submit" onClick={()=>{console.log("Clicked")}}>Send</button>
        </>
      )

}

export default Form





// import React, { useState,useEffect } from 'react'
// import {Link} from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import { Button } from '@material-ui/core';

// const Form=(props)=>{

   
//     const [nameid,setNameId]=useState();
//     const [amount,setAmount]=useState();
//     const [data,setData]=useState([])
//     const [name,setName]=useState([])

//     useEffect(()=>{
    
//     const url = 'http://localhost:9000/customer'; 
//     fetch(url,{
//       headers:{
//         method: 'GET',
//         "Content-type":"application/json"
//       }
//     }).then(res=>res.json())
//     .then(result=>{
//       console.log(result)
//       setData(result)
      
//     })
    
//   },[])

// // const updateData=()=>{
// //   const data={
// //     "sender":props.sendername,
// //     "receiver":"",
// //     "amount":
// //   }
// //   axios.put
// // }

//   const Postnow=(e)=>{
//       e.preventDefault()
//       fetch(props.id1+'/'+nameid,{
//           method:"POST",
//           headers:{
//               "Accept":"appplication/json",
//               "Content-Type":"appplication/json"
//           },
//           body: JSON.stringify({
//               "sender":props.sendername,
//               "receiver":"Aman",
//               "amount":amount

//           })
//       })
//   }

//   const setvalues=(e)=>{
//     setNameId(e.target.value);
//     console.log(nameid)
//     // const value=(data.find((x)=>{
//     //   if(x._id===nameid)
//     //   return (x.name)
      
//     // }))
//     // console.log(value)

//   }

//     const useStyles = makeStyles((theme) => ({
//         root: {
//           '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//           },
//         },
//       }));
    
//     const classes = useStyles();

//     return(
//         <>
        
        
//         <select name="Select Name" value={nameid} onChange={(e)=>{
//           setNameId(e.target.value)
//           console.log(nameid)
//         }}> 

//         {data.map((Data) => (
//             <option value={Data._id}>
//               {Data.name}</option>
//           ))}
//         </select>

//         <input value={amount} onChange={(e)=>{setAmount(e.target.value)}} id="outlined-basic" label="Amount" variant="outlined" type="number"/>    
//         <br/>

            
        
//         <Button variant="contained" color="primary" onClick={console.log("HI")}>
//         Send 
//         </Button>
//         </>


//     )
// }

// export default Form;