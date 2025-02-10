var x=100; //khai báo global
function varDemo(){
    console.log("x ben trong ham:",x);
}
//
    console.log("x ben ngoai ham:",x);
// thực thi hàm:
varDemo();
//local
function fn_demo(){
    var y=200; //local
    console.log("y bên trong hàm:",y);
}
fn_demo()
//y bên ngoài hàm
console.log("y bên ngoài hàm:", y); //==error
 

//ví dụ

