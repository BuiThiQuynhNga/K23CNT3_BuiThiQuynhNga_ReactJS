import React, { Component } from 'react';

export default class BtqnStudent extends Component {
  render() {
    let { renderBtqnStudent, btqnIndex, onBtqnHandleView, onBtqnHandleEdit, onBtqnHandleDelete } = this.props;

    return (
      <tr>
        <td>{btqnIndex}</td>
        <td>{renderBtqnStudent.btqnID}</td>
        <td>{renderBtqnStudent.btqnStudentName}</td>
        <td>{renderBtqnStudent.btqnAge}</td>
        <td>{renderBtqnStudent.btqnGender}</td>
        <td>
          <button className="btn btn-info btn-sm me-2" onClick={() => onBtqnHandleView(renderBtqnStudent)}>Xem</button>
          <button className="btn btn-warning btn-sm me-2" onClick={() => onBtqnHandleEdit(renderBtqnStudent)}>Sửa</button>
          <button className="btn btn-danger btn-sm" onClick={() => onBtqnHandleDelete(renderBtqnStudent.btqnID)}>Xóa</button>
        </td>
      </tr>
    );
  }
}