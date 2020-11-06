import React from 'react'
import Image from './home.jpg'

const Home=()=>{
    return(
        <div className="home-body">
            <img  className="responsive" src={Image} alt="Image"/>
            <h2 style={{textAlign:"center"}}>A one step banking solution for transanctions</h2>
        </div>
    )
};
export default Home