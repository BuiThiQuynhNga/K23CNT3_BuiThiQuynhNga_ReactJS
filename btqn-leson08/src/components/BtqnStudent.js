import React, { Component } from "react";

class BtqnStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    btqnHandleView = (btqnStudent)=>{
        // Chuyển lên btqnStudentList
        this.props.onBtqnHandleView(btqnStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ BtqnStudentList
    let {renderBtqnStudent, key} = this.props;
    console.log("Student:",renderBtqnStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderBtqnStudent.btqnId}</td>
          <td>{renderBtqnStudent.btqnStudentName}</td>
          <td>{renderBtqnStudent.btqnAge}</td>
          <td>{renderBtqnStudent.btqnGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.btqnHandleView(renderBtqnStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default BtqnStudent;