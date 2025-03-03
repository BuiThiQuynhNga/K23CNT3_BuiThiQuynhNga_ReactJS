import React, { Component } from 'react';

class BtqnEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            btqnName:'Nga',
            btqnAge:20,
            btqnGender:'Male',
            btqnCourse:'123'
        }
    }

    // Hàm xử lý sự kiện change
    btqnHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    btqnHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.btqnName + "\n" + this.state.btqnAge);

        // Chuyển dữ liệu trên form lên App component (BtqnApp);
        this.props.onBtqnHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='btqnName'>Student Name:</label>
                        <input type='text' name='btqnName' id='btqnName' 
                            value={this.state.btqnName}
                            onChange={this.btqnHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='btqnAge'>Student Age:</label>
                        <input type='text' name='btqnAge' id='btqnAge' 
                            value={this.state.btqnAge}
                            onChange={this.btqnHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='btqnGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='btqnGender' id='btqnMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.btqnGender === 'Male'}
                                onChange={this.btqnHandleChange} />
                            <label htmlFor='btqnMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='btqnGender' id='btqnFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.btqnGender === 'Female'}
                                onChange={this.btqnHandleChange} />
                            <label htmlFor='btqnFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='btqnGender' id='btqnNone' className='mx-2'
                                value={'None'}
                                checked={this.state.btqnGender === 'None'}
                                onChange={this.btqnHandleChange} />
                            <label htmlFor='btqnNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='btqnCourse'>
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
                    </div>
                    <button onClick={this.btqnHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default BtqnEventForm5;