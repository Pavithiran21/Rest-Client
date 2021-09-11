import React from 'react';
import {Formik,Form} from 'formik';
import * as Yup from 'yup'
import axios from 'axios';

export default class Regi extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            email:'',
            password:'',
            confirmpassword:''
           
        };
        
        myChangeHandler=(event)=>{
            console.log(event.target)
            this.setState({name:event.target.value})
            this.setState({email:event.target.value})
            this.setState({password:event.target.value})
            this.setState({confirmpassword:event.target.value})
            this.setState({disable:false})
            this.setState({errorMessage:""})
       
        }
        submitHandler=(event) =>{
            event.preventDefault()
            if(this.state.username!="")
            {
                this.setState({disable:true})
                this.setState({text:"Loading"})

                
                const URL=API_URL+'/check-user/'+this.state.username
               //const URL="http://localhost:9001/user/check-user/register"
                console.log(URL)
                var options={
                    method:"GET",
                    headers:{
                        "content-type": "application/json",
                        "accept": "application/json"
                    }
                    
                }
                return axios.get(URL)
                .then((response) =>{
                    console.log(response)
                    if(response.status==200){
                      if(response.data.status){
                         this.setState({status:response.data.status})
                         this.setState({message:response.data.message})
                        this.render()
                      }
                      else{
                        this.setState({disable:false})
                        this.setState({text:"Registered Successfully"})
                        this.setState({username:""})
                        this.setState({errorMessage:response.data.message})
                      }
                    }
                    else{
        
                    }
                });
            }
             else{
                this.setState({errorMessage:"Please Register for New User"})
            }
                
            }
        }
    
    }
}
    render(){
        if(!this.state.status)
        
        {
            return (
                <div className="auth-wrapper">
                    <div className="auth-inner">
                       <h3> Forgot Password </h3>
                       <Formik>
                            {
                               (formik) => (
                                    <Form onSubmit={this.submitHandler}>
                                
                                        <div className="form-group pb-3">
                                            <label>Email</label>
                                            <input type="email"  className="form-control" value={this.state.email} onChange={this.myChangeHandler} placeholder="Email"/>
                                            {this.state.errorMessage && <div className="error"> {this.state.errorMessage} </div>}
                                        </div>                 
                                        
                                        <button disabled={this.state.disable} className="btn btn-primary btn-block">{this.state.text}</button>
    
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
                       <h3> Forgot Password </h3>
                       <p className="pt-3">An Email has sent to {this.state.message}</p>
                      <p>Not yet recieved Please <a href="/">Click here</a> to send an mail</p> 
                    </div>
                </div>
            )
        }
       
    }
    
    render(){
        if(!this.state.status)
        {
            return (
                <div className="auth-wrapper">
                    <div className="auth-inner">
                       <h3>Sign Up</h3>
                       <Formik>
                            {
                               (formik) => (
                                    <Form onSubmit={this.submitHandler}>
                                
                                        <div className="form-group">
                                         <label>User Name</label>
                                         <input type="text"  className="form-control" value={this.state.username} onChange={this.myChangeHandler} placeholder="User Name"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email"  className="form-control" value={this.state.email} onChange={this.myChangeHandler}  placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                          <label>Password</label>
                                          <input type="password"  className="form-control"value={this.state.password} onChange={this.myChangeHandler} placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                          <label>Confirm Password</label>
                                          <input type="password"  className="form-control"value={this.state.confirmpassword} onChange={this.myChangeHandler} placeholder="Confirm Password"/>
                                        </div>
                                        <button className="btn btn-primary btn-block">Register</button>
                                   </Form>
                                )
                            }
                       </Formik>
                    </div>
                </div>
            )
         }
    }
        




        
    
           
          
          

       

    
    
    

}
