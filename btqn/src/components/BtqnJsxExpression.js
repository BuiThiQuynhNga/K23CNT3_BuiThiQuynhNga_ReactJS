import React from "react";
export default function BtqnJsxExpression(){
    //bien
    const name = "Bui Thi Quynh Nga"
    const user = {
        firtsName:"Nga",
        lastName:"Quynh"
    }
    //ham
    const fullName=(user)=>{
        return  user.firtsName + '' + user.lastName ;

    }
    //element
    const element = (
        <div>
            {/*bieu thuc js*/}
                <h2>{fullName(user)}</h2>
            <hr/>
            <h3> Welcome to , {name}</h3>
        </div>
    );
    //ham
    const sayWelcome = (name)=>{
        if(name){
            return <h3> Welcome to {name}</h3>
        }
        else{
            return <h3> Welcome to NTU - K23CNT3</h3>
        }
    }
    return(
        <div>
            <h1>BTQN- JSX Expression</h1>
            {/*su dung bien element*/}
            {element}
            <hr/>
            {sayWelcome()}
            <hr/>
            {sayWelcome("Bui Thi Quynh Nga")}
        </div>
    )
}