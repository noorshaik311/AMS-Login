import React from "react";
import './login.css';
import axios from 'axios';
import { withRouter } from './withRouter'

class Login extends React.Component{
    constructor() {
      super()
    
      this.state = {
         userName: '',
         password: '',
         falseCase: false,
      }

    }

    componentDidUpdate() {
        console.log(this.state.userName, this.state.password, 'The users credentials');
    }

    onSubmit = () => {
        const { userName, password } = this.state;
        this.setState({ falseCase: false })
        const body = {
            user: userName,
            pass: password,
        }
        console.log('calling login API', userName, password);
        axios.post('http://localhost:4000/api/login', body)
            .then((result) => {
                if(result.data.status) {
                    this.props.navigate('/home');
                }
                else {
                    this.setState({ userName: '', password: '', falseCase: true});
                }
            })

    }

    render(){
        return(
        <div className="login-container">
            <div className="center">
            <h1>Login</h1>
            <div className='form'>
            <div className="txt-field">
                <input type="text" required value={this.state.userName} onChange={(e) => this.setState({ userName: e.target.value})} />
                <label>Username</label>
            </div>
            <div className="txt-field">
                <input type="password" required value={this.state.password} onChange={(e) => this.setState({ password: e.target.value})}/>
                <label>Password</label>
            </div>
            <div className="pass" >Forget Password?</div>
            <div className="error-message">{this.state.falseCase && ('*Please enter valid credentials*')} </div>
            <div className="submit" onClick={this.onSubmit}><p>Login</p></div>
            </div>
         </div>
        </div>
        );
    }
}
export default withRouter(Login); 