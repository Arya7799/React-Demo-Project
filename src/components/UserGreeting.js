import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: false,
    };
  }

  render() {
    // let message
    // if(this.state.isLoggedin){
    //     message=<div>Welcome Hari</div>
    // }else{
    //     message=<div>Welcome Guest</div>
    // }

    return (
      // <div>
      //     {message}
      // </div>
      this.state.isLoggedin ? <div>Welcome Hari</div> : <div>Welcome Guest</div>
    );
    // if (this.state.isLoggedin) {
    //   return <div>Welcome Hari</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Hari</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
