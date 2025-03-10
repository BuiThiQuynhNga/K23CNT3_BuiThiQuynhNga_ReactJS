import React, { Component } from 'react';
import BtqnControl from './components/BtqnControl';
import BtqnStudentList from './components/BtqnStudentList';
import BtqnForm from './components/BtqnForm';
import BtqnStudentDetail from './components/BtqnStudentDetail'; 

class BtqnApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btqnStudents: [ 
        { btqnID: "SV001", btqnStudentName: "Bùi Thị Quỳnh Nga", btqnAge: 20, btqnGender: "Nữ", btqnBirthday: "15/08/2005", btqnBirthPlace: "BN", btqnAddress: "Lương Tài" },
        { btqnID: "SV002", btqnStudentName: "Bùi Thị Vân Anh", btqnAge: 23, btqnGender: "Nữ", btqnBirthday: "06/12/2002", btqnBirthPlace: "BN", btqnAddress: "Lương Tài" },
        { btqnID: "SV003", btqnStudentName: "Nguyễn Văn Nam", btqnAge: 20, btqnGender: "Nam", btqnBirthday: "04/08/2005", btqnBirthPlace: "HD", btqnAddress: "Hải Dương" },
        { btqnID: "SV004", btqnStudentName: "Phạm Gia Bảo", btqnAge: 20, btqnGender: "Nam", btqnBirthday: "13/04/2005", btqnBirthPlace: "HN", btqnAddress: "Thanh Xuân" }
      ],
      filteredStudents: [],
      selectedStudent: null,
      showDetail: false, 
      isAddingNew: false,
      searchKeyword: ''
    };
  }

  componentDidMount() {
    this.setState({ filteredStudents: this.state.btqnStudents });
  }

  // 🔎 Xử lý tìm kiếm sinh viên theo tên
  onBtqnHandleSearch = (keyword) => {
    this.setState({ searchKeyword: keyword }, this.filterStudents);
  };

  // Hàm lọc danh sách sinh viên dựa vào từ khóa tìm kiếm
  filterStudents = () => {
    const { btqnStudents, searchKeyword } = this.state;
    const filtered = btqnStudents.filter(student =>
      student.btqnStudentName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    this.setState({ filteredStudents: filtered });
  };

  // 🔎 Xử lý khi bấm "Xem"
  onBtqnHandleView = (BtqnStudent) => {
    this.setState({
      selectedStudent: BtqnStudent,
      showDetail: true,
      isAddingNew: false
    });
  };

  // ❌ Xử lý khi bấm "Đóng"
  onBtqnHandleCloseDetail = () => {
    this.setState({ showDetail: false });
  };

  // ✏️ Xử lý khi bấm "Sửa"
  onBtqnHandleEdit = (btqnStudent) => {
    this.setState({ selectedStudent: btqnStudent, showDetail: false, isAddingNew: false });
  };

  // 🗑 Xử lý khi bấm "Xóa"
  onBtqnHandleDelete = (studentID) => {
    this.setState(prevState => {
      const updatedStudents = prevState.btqnStudents.filter(student => student.btqnID !== studentID);
      return { btqnStudents: updatedStudents, showDetail: false };
    }, this.filterStudents);
  };

  // ✅ Cập nhật sinh viên sau khi chỉnh sửa
  onBtqnHandleUpdate = (updatedStudent) => {
    this.setState(prevState => {
      const updatedStudents = prevState.btqnStudents.map(student => 
        student.btqnID === updatedStudent.btqnID ? updatedStudent : student
      );
      return { btqnStudents: updatedStudents, selectedStudent: null, isAddingNew: false };
    }, this.filterStudents);
  };

  // 🆕 Xử lý khi bấm "Thêm mới"
  onBtqnHandleAddNew = () => {
    this.setState({
      selectedStudent: null,
      showDetail: false,
      isAddingNew: true
    });
  };

  // 🆕 Xử lý khi lưu sinh viên mới
  onBtqnHandleSaveNew = (newStudent) => {
    this.setState(prevState => ({
      btqnStudents: [...prevState.btqnStudents, newStudent],
      selectedStudent: null,
      isAddingNew: false
    }), this.filterStudents);
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Bùi Thị Quỳnh Nga - K23CNT3 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <BtqnControl 
                  onBtqnHandleAddNew={this.onBtqnHandleAddNew} 
                  onBtqnHandleSearch={this.onBtqnHandleSearch} 
                />
                <BtqnStudentList
                  renderBtqnStudents={this.state.filteredStudents} 
                  onBtqnHandleView={this.onBtqnHandleView} 
                  onBtqnHandleEdit={this.onBtqnHandleEdit}
                  onBtqnHandleDelete={this.onBtqnHandleDelete}
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {this.state.showDetail ? (
                <BtqnStudentDetail 
                  student={this.state.selectedStudent} 
                  onClose={this.onBtqnHandleCloseDetail} 
                />
              ) : (
                <BtqnForm 
                  renderBtqnStudent={this.state.selectedStudent} 
                  onBtqnHandleUpdate={this.onBtqnHandleUpdate} 
                  onBtqnHandleSaveNew={this.onBtqnHandleSaveNew} 
                  isAddingNew={this.state.isAddingNew} 
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BtqnApp;