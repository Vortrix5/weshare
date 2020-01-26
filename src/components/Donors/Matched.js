import React from "react"
import work from "../../images/world.webp"
import matched from "../../images/matched.PNG"
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class Matched extends React.Component{
    render(){
        return(
            <div style={{height:"100%", background:"#668fff"}}>
            <br/>   
            <center>
                <h1 style={{color:"white"}}>Matches found: 5</h1>
            <img src={work} style={{width:"70%"}}/>

            <img src={matched} style={{width:"70%"}}/>

            </center> 
            <div style={{width:"100%",background:"#668fff", display:"flex", justifyContent:"flex-end", paddingRight:30}}>
            <Button style={{width:100}} type='submit'>Continue</Button>
            </div>  
            <br/>
            </div>

        )
    }
}