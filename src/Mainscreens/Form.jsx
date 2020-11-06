import { Button, FormControl, Icon, IconButton, Input, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import { AirlineSeatIndividualSuiteSharp } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Form = (props) => {


  console.log(props)

  let history = useHistory();

  const [data, setData] = useState([])
  const [id, setid] = useState()
  const [val, setVal] = useState()
  const [name, setName] = useState(0)
  const [amount, setAmount] = useState()



  const url = 'http://localhost:9000/customer/';



  const classes = useStyles();


  useEffect(() => {

    fetch(url, {
      headers: {
        method: 'GET',
        "accept": "application/json",
        "Content-type": "application/json"
      }
    }).then(res => res.json())
      .then(result => {
        //entire list
        // console.log(result)
        setData(result)
        // console.log(result)

      })

  }, [])


  const sendData = () => {


    fetch(url + props.id1 + "/" + val,
      {
        headers:
        {
          "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify(
          {
            amt: amount
          }
        )
      }).then(res => res.json())
      .then(result => {
        console.log(result)
      }).catch(err => console.log(err))





    fetch(url + props.id1 + "/" + val,
      {
        headers:
        {
          "Content-Type": "application/json"
        },
        method: "put",
        body: JSON.stringify({
          amt: amount
        })

        // mode:'no-cors'
      }).then(res => res.json())
      .then(result => {
        console.log(result);
        history.push("/customer");
      }).catch(err => console.log(err))



  }


  return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <Select id="Select id" name="name" value={id}
            onChange={e => {
              setVal(e.target.value)
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >

            {data.map((Data) => (
              <MenuItem value={Data._id}>{Data.name}</MenuItem>
            ))}

          </Select>
        </FormControl>
        <TextField id="standard-basic" label="Amount"
          type="Number" onChange={(e) => setAmount(e.target.value)} placeholder="Enter the amount" />
        <Button
          variant="contained"
          color="primary"
          type="Submit"
          onClick={() => {
            sendData();
          }}>
          Send Money
</Button>
      </div>
  )

}

export default Form


