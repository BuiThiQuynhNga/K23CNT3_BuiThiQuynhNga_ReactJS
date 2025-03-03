import React, { Component } from 'react';

class BtqnEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            btqnGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    btqnHandleChange = (event)=>{
        this.setState({
            btqnGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    btqnHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.btqnGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='btqnGioiTinh'  id='btqnNam' className='mx-2'
                            value="Nam" checked={this.state.btqnGioiTinh === 'Nam'} onChange={this.btqnHandleChange}/> 
                            <label htmlFor='btqnNam'>Nam</label>  
                        <input type='radio' name='btqnGioiTinh'  id='btqnNu' className='mx-2'
                            value="Nữ" checked={this.state.btqnGioiTinh === 'Nữ'} onChange={this.btqnHandleChange}/> 
                            <label htmlFor='btqnNu'>Nữ</label>  
                        <input type='radio' name='btqnGioiTinh' id='btqnKhac' className='mx-2'
                            value="Khác" checked={this.state.btqnGioiTinh === 'Khác'} onChange={this.btqnHandleChange}/> 
                            <label htmlFor='btqnKhac'>Khác</label>
                    </div>
                    <button onClick={this.btqnHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default BtqnEventForm3;