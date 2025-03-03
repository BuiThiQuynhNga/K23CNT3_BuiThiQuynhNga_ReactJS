import React, { Component } from 'react';
import BtqnEventForm1 from './components/BtqnEventForm3';
import BtqnEventForm2 from './components/BtqnEventForm2';
import BtqnEventForm3 from './components/BtqnEventForm3';
import BtqnEventForm4 from './components/BtqnEventForm4';
import BtqnEventForm5 from './components/BtqnEventForm5';

class BtqnApp extends Component {



  // Hàm xử lý nhận dữ liệu từ form student
  btqnHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <BtqnEventForm1 />
          <BtqnEventForm2 />
          <BtqnEventForm3 />
          <BtqnEventForm4 />
          <BtqnEventForm5 onBtqnHandleSubmit={this.btqnHandleSubmitForm}/>
      </div>
    );
  }
}

export default BtqnApp;