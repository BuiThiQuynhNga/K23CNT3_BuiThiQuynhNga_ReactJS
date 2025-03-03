import React, { Component } from 'react';

class BtqnEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            btqnCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    btqnHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            btqnCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    btqnHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.btqnCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='btqnCourse' id='btqnCourse' 
                            value={this.state.btqnCourse}
                            onChange={this.btqnHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.btqnHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default BtqnEventForm2;