import React from 'react'
import BtqnLoginComp from './BtqnLoginComp';
import BtqnLogoutComp from './BtqnLogoutComp';

export default function BtqnLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var btqnLoginControl = isLoggedIn?<BtqnLoginComp />: <BtqnLogoutComp />;
  return (
    <div>
      {btqnLoginControl}
    </div>
  )
}