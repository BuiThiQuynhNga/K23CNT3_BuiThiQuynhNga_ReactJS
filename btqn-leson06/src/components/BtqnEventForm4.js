import React, { Component } from "react";

class BtqnEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            btqnSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    btqnHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.btqnSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            btqnSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    btqnHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.btqnSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.btqnSelectCheckBox.includes("Apple")}
              onChange={this.btqnHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.btqnSelectCheckBox.includes("Banana")}
              onChange={this.btqnHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.btqnSelectCheckBox.includes("Orange")}
              onChange={this.btqnHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.btqnHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default BtqnEventForm4;