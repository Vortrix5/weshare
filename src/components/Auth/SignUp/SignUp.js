import React from "react";
import { withRouter } from "react-router";
import SignUpView from "./SignUpView";



class SignUp extends React.Component {
    // handleSignUp = async event => {
    //     event.preventDefault();
    //     const { email, password } = event.target.elements;
    //     try {
    //       const user = await config
    //         .auth()
    //         .createUserWithEmailAndPassword(email.value, password.value);
    //         this.props.dispatch({type:"ON_AUTH"})
    //       this.props.history.push("/");
    //     } catch (error) {
    //       alert(error);
    //     }
    // }
        render(){
            return (
                <>
                <SignUpView/>
                </>
            )
            }

}

export default SignUp;


