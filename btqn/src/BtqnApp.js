import BtqnClassComp from "./components/BtqnClassComp";
import BtqnFuncComp from "./components/BtqnFuncComp";
import BtqnJsxExpression from "./components/BtqnJsxExpression";

function BtqnApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1> React-app BTQN leson03 </h1>
      <BtqnJsxExpression />

      <hr/>
      {/* Su dung function component*/}
      <BtqnFuncComp/>
       {/* su dung class component */}
       <BtqnClassComp></BtqnClassComp>
    </div>
  );
}

export default BtqnApp;
