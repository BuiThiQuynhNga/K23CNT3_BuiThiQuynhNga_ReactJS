import React, {Component} from 'react';
 class BtqnEvenForm1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            btqnStudentName:"Quỳnh Nga"
        }
    }
    //hàm sử lý sự kiện phi dữ liệu trên text box
    btqnHandleChange = (event)=>{
        this.setState({
            btqnStudentName:event.target.value,
        })
    }
    btqnHandleSubmit =(ev)=>{
        alert('Xin chào:' + this.state.btqnStudentName);
        
    }
    render(){
       return(
        <div className='alert alert-info'>
            <h2>Form input</h2>
            <form onSubmit={this.btqnHandleChange}>
                <label htmlFor='btqnStudentName'>
                    <input type='text' name='btqnStudentName' id='btqnStudentName'
                     value={this.state.btqnStudentName}
                     onChange={this.btqnHandleChange}
                     ></input>
                
                </label>
            </form>
        </div>
    )
}
 }