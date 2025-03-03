import React, { Component } from 'react';

class BtqnEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            btqnStudentName:'quỳnh Nga',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (btqnStudentName) thay đổi
    btqnHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            btqnStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    btqnHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.btqnStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.btqnHandleSubmit}>
                    <label htmlFor='btqnStudentName'>
                        <input type='text' name='btqnStudentName' id='btqnStudentName' 
                            value={this.state.btqnStudentName}
                            onChange={this.btqnHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default BtqnEventForm1;