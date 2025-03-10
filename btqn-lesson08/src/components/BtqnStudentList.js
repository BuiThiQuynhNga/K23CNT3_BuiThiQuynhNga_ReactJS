import React, { Component } from 'react';
import BtqnStudent from './BtqnStudent';

export default class BtqnStudentList extends Component {
  render() {
    let { renderBtqnStudents, onBtqnHandleView, onBtqnHandleEdit, onBtqnHandleDelete } = this.props;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderBtqnStudents.map((student, index) => (
            <BtqnStudent 
              key={student.btqnID} 
              btqnIndex={index + 1} 
              renderBtqnStudent={student} 
              onBtqnHandleView={onBtqnHandleView} 
              onBtqnHandleEdit={onBtqnHandleEdit}
              onBtqnHandleDelete={onBtqnHandleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}