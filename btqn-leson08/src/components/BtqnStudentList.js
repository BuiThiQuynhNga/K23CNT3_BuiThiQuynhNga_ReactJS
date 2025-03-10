import React, { Component } from "react";
import BtqnStudent from "./BtqnStudent";

class BtqnStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    btqnHandleView = (btqnStudent)=>{
        // Chuyển dữ liệu lên BtqnApp
        this.props.onBtqnHandleView(btqnStudent);
    }


  render() {
    // lấy dữ liệu trong props từ BtqnApp chuyển xuống
    let {renderBtqnStudents} = this.props;
    console.log("List:",renderBtqnStudents);
    
    // chuyển dữ liệu vào BtqnStudent để hiển thị
    let btqnElementStudent = renderBtqnStudents.map((btqnItem,index)=>{
        return <BtqnStudent key={index} renderBtqnStudent={btqnItem} onBtqnHandleView={this.btqnHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {btqnElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default BtqnStudentList;