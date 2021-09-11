import React from 'react';
import {Formik,Form} from 'formik';
import {API_URL} from '../constant/constant'
import axios from "axios"


export default class Register extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            email:'',
            password:'',
            confirmpassword:'',
            text:'Register',
            errorMessage:"",
            usererrorMessage:"",
            emailerrorMessage:"",
            passworderrorMessage:"",
            confirmerrorMessaage:"",

            status:false
           
        };
    
    }
    userHandler=(event)=>{
      
        this.setState({username:event.target.value})
        this.setState({disable:false})
        this.setState({usererrorMessage:""})
   
    }
    emailHandler=(event)=>{
        
       
        this.setState({email:event.target.value})
        
        this.setState({disable:false})
        this.setState({emailerrorMessage:""})
   
    }
    passwordHandler=async (event)=>{
        
        
       await this.setState({password:event.target.value})
       
        this.setState({disable:false})
        this.setState({passworderrorMessage:""})
        console.log(this.state)
    }
    confirmpasswordHandler=async function(event){
       
       await  this.setState({confirmpassword:event.target.value})
        this.setState({disable:false})
        this.setState({confirmerrorMessaage:""})
        console.log(this.state)
   
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state.password===this.state.confirmpassword)
        if(this.state.username==""){
            this.setState({usererrorMessage:"Please enter the username"})
            
        }else if(this.state.email==""){
            this.setState({emailerrorMessage:"Please enter the email"})

        }else if(this.state.password==""){
            this.setState({passworderrorMessage:"Please enter the password"})

        }else if(this.state.confirmpassword==""){
            this.setState({confirmerrorMessaage:"Please enter the confirmpassword"})

        }else if(this.state.password!==this.state.confirmpassword){
            this.setState({confirmerrorMessaage:"Please enter Same password"})

        }else{
        this.setState({disable:true})
        this.setState({text:"Loading"})
        
        const URL=API_URL+'/register'
       
     
        console.log(this.state)
        let data={
            
            name:this.state.username,
            email:this.state.email,
            password:this.state.password
            
        }

        return axios.post(URL,data)
        .then((response) =>{
            console.log(response)
            if(response.status==200){
                if(response.data.status){
                    this.setState({status:response.data.status})
                    this.setState({message:response.data.message})
                    this.setState({update:true})
                    this.setState({error:false})
                    this.render()
                 }
                 else{
                    this.setState({update:false})
                    this.setState({disable:false})
                    this.setState({text:"Register"})
                    this.setState({emailerrorMessage:"This Email is already registered"})
                 }

            }
            
        })
        
    }

        }


    

        
        
     
        
    


  
   
    render(){
        if(!this.state.status)
        
        {
            return (
                <div className="auth-wrapper">
                    <div className="auth-inner">
                       <h3> Sign Up </h3>
                       <Formik>
                            {
                               (formik) => (
                                    <Form onSubmit={this.submitHandler} className="box">
                                
                                        <div className="form-group inputBox">
                                         <label>User Name</label>
                                         <input type="text"  className="form-control input" value={this.state.username} onChange={this.userHandler} placeholder="User Name"/>
                                         {this.state.usererrorMessage && <div className="error"> {this.state.usererrorMessage} </div>}
                                        </div>
                                        <div className="form-group inputBox">
                                            <label>Email</label>
                                            <input type="email"  className="form-control input" value={this.state.email} onChange={this.emailHandler}  placeholder="Email"/>
                                            {this.state.emailerrorMessage && <div className="error"> {this.state.emailerrorMessage} </div>}
                                        </div>
                                        <div className="form-group inputBox">
                                          <label>Password</label>
                                          <input type="password"  className="form-control input" value={this.state.password} onChange={(e)=>{this.passwordHandler(e)}} placeholder="Password"/>
                                          {this.state.passworderrorMessage && <div className="error"> {this.state.passworderrorMessage} </div>}
                                        </div>
                                        <div className="form-group inputBox">
                                          <label>Confirm Password</label>
                                          <input type="password"  className="form-control input"value={this.state.confirmpassword} onChange={(e)=>{this.confirmpasswordHandler(e)}} placeholder="Confirm Password"/>
                                          {this.state.confirmerrorMessaage && <div className="error"> {this.state.confirmerrorMessaage} </div>}
                                        </div>
                                                    
                                        
                                        <button disabled={this.state.disable} className="btn btn-primary btn-block mt-3">{this.state.text}</button>

                                        <p className="mt-2 pl-3">Already Registered <a href="/login">Click here to Login </a></p>
    
                                   </Form>
                                )
                            }
                       </Formik>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="auth-wrapper">
                    <div className="auth-inner">
                       <h3> Sign Up</h3>
                       <p className="pt-3 text-center">User Registered Successfully</p>
                    </div>
                </div>
            )
        }
       
    }
}