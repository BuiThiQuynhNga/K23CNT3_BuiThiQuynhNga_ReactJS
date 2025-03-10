import React, { Component } from "react";
import BtqnControl from "./components/BtqnControl";
import BtqnStudentList from "./components/BtqnStudentList";
import BtqnForm from "./components/BtqnForm";

class BtqnApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      btqnStudents:[
        {btqnId:"SV001",btqnStudentName:"Bùi Thị Quỳnh Nga",btqnAge:46,btqnGender:"Nam",btqnBirthday:"25/05/1979",btqnBirthPlace:"HN", btqnAddress:"Bắc Ninh"},
        {btqnId:"SV002",btqnStudentName:"Bùi Thị Quỳnh Nga",btqnAge:1,btqnGender:"Nữ",btqnBirthday:"25/05/1179",btqnBirthPlace:"HP", btqnAddress:"Trung quốc"},
        {btqnId:"SV002",btqnStudentName:"Bùi Thị Quỳnh Nga",btqnAge:18,btqnGender:"Nữ",btqnBirthday:"25/05/1179",btqnBirthPlace:"HP", btqnAddress:"Trung quốc"},
        {btqnId:"SV002",btqnStudentName:"Bùi Thị Quỳnh Nga",btqnAge:18,btqnGender:"Nữ",btqnBirthday:"25/05/1179",btqnBirthPlace:"HP", btqnAddress:"Trung quốc"},
        {btqnId:"SV002",btqnStudentName:"Bùi Thị Quỳnh Nga",btqnAge:18,btqnGender:"Nữ",btqnBirthday:"25/05/1179",btqnBirthPlace:"HP", btqnAddress:"Trung quốc"},
        {btqnId:"SV003",btqnStudentName:"Bùi Thị Quỳnh Nga",btqnAge:25,btqnGender:"Nam",btqnBirthday:"25/05/1079",btqnBirthPlace:"TpHCM", btqnAddress:"Trung Quốc"},
        {btqnId:"SV004",btqnStudentName:"Bùi Thị Quỳnh Nga",btqnAge:15,btqnGender:"Nam",btqnBirthday:"25/05/1079",btqnBirthPlace:"TpHCM", btqnAddress:"Hồ chí minh"},
      ],
      btqnStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  btqnHandleView = (btqnStudent)=>{
    this.setState({
      btqnStudent:btqnStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.btqnStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Bùi Thị Quynh - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <BtqnControl  />
                {/* danh sách sinh vien  */}
                <BtqnStudentList  renderBtqnStudents={this.state.btqnStudents} onbtqnHandleView={this.btqnHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <BtqnForm  renderBtqnStudent = {this.state.btqnStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BtqnApp;