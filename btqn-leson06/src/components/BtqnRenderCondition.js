import React, { Component } from 'react';
import BtqnLoginControl from './BtqnLoginControl';

class BtqnRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
        }
    }
        // Hàm xử lý sự kiện login
        btqnHandleLogin = ()=>{
            this.setState({
                isLoggedIn:true
            })
        }
        // Hàm xử lý sự kiện logout
        btqnHandleLogout=()=>{
            this.setState({
                isLoggedIn:false
            })
        }
    render() {
        let flag = this.state.isLoggedIn;
        return (
            <div className='alert alert-danger'>
                <h2>Render Condition</h2>
                <hr/>
                <BtqnLoginControl isLoggedIn={flag} />
                <hr/>
                {
                   flag?<button onClick={this.btqnHandleLogout}>Logout</button>
                        :<button onClick={this.btqnHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default BtqnRenderCondition;