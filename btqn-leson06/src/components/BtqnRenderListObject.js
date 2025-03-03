import React, { Component } from 'react';

class BtqnRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            btqnStudents :[
                {btqnId:1,btqnName:"Bùi thị quỳnh nga", btqnAge:20},
                {btqnId:2,btqnName:"Bùi Thị Vân Anh", btqnAge:23},
                {btqnId:3,btqnName:"Bùi Nguyễn Bảo Nam", btqnAge:15},
                {btqnId:4,btqnName:"Bùi Văn Hiếu", btqnAge:22},
            ],
        }
    }

    
    render() {
        // Hiển thị dữ liệu
        let {btqnStudents} = this.state;
        let btqnElement = btqnStudents.map((btqnItem)=>{
            return (
                <li>{btqnItem.btqnId} - {btqnItem.btqnName}</li>
            );
        })

        let btqnRenderElement = btqnStudents.map((btqnItem,index)=>{
            return (
                <tr key={index}>
                    <td>{btqnItem.btqnId}</td>
                    <td>{btqnItem.btqnName}</td>
                    <td>{btqnItem.btqnAge}</td>
                    <td>
                        <button className='btn btn-success mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h2>Danh sách sinh viên</h2>
                {btqnElement}
                <hr/>
                <h2> Ở trên xấu quá; -- sử dụng css</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>BtqnID</th>
                            <th>BtqnName</th>
                            <th>BtqnAge</th>
                            <th>BtqnAction</th>
                        </tr>
                    </thead>
                    <tbody>
                       {btqnRenderElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BtqnRenderListObject;