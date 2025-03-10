import React, { Component } from 'react';

export default class BtqnForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btqnID: '',
      btqnStudentName: '',
      btqnAge: '',
      btqnGender: 'Nữ',
      btqnBirthday: '',
      btqnBirthPlace: 'BN',
      btqnAddress: ''
    };
  }

  // Cập nhật form khi nhận dữ liệu từ props
  componentDidUpdate(prevProps) {
    if (prevProps.renderBtqnStudent !== this.props.renderBtqnStudent) {
      if (this.props.renderBtqnStudent) {
        this.setState({ ...this.props.renderBtqnStudent });
      } else {
        // Nếu đang ở chế độ "Thêm mới", reset form
        this.setState({
          btqnID: '',
          btqnStudentName: '',
          btqnAge: '',
          btqnGender: 'Nữ',
          btqnBirthday: '',
          btqnBirthPlace: 'BN',
          btqnAddress: ''
        });
      }
    }
  }

  // Xử lý thay đổi dữ liệu input
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Gửi dữ liệu khi nhấn "Lưu"
  handleSubmit = (event) => {
    event.preventDefault();
    const { btqnID, ...otherState } = this.state;

    if (!btqnID || btqnID.trim() === "") {
        alert("Vui lòng nhập mã sinh viên (btqnID).");
        return;
    }

    if (this.props.isAddingNew) {
        this.props.onBtqnHandleSaveNew({ btqnID, ...otherState });
    } else {
        this.props.onBtqnHandleUpdate({ btqnID, ...otherState });
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{this.props.isAddingNew ? "Thêm sinh viên mới" : "Chỉnh sửa thông tin"}</h3>
          <form onSubmit={this.handleSubmit}>
            
            {/* Nhập mã sinh viên khi thêm mới */}
            {this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="btqnID" value={this.state.btqnID} onChange={this.handleChange} required />
                </div>
              </div>
            )}
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="btqnStudentName" value={this.state.btqnStudentName} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" name="btqnAge" value={this.state.btqnAge} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" name="btqnGender" value={this.state.btqnGender} onChange={this.handleChange}>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input type="date" className="form-control" name="btqnBirthday" value={this.state.btqnBirthday} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="btqnBirthPlace" value={this.state.btqnBirthPlace} onChange={this.handleChange}>
                  <option value="HN">Hà Nội</option>
                  <option value="TpHCM">TP. Hồ Chí Minh</option>
                  <option value="ĐN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                  <option value="BN">Bắc Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" name="btqnAddress" value={this.state.btqnAddress} onChange={this.handleChange} required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">{this.props.isAddingNew ? "Thêm" : "Lưu"}</button>
          </form>
        </div>
      </div>
    );
  }
}