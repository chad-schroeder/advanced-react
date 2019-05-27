import React, { Component } from 'react';
import Header from './Header';

class Page extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 render() {
   return (
     <div>
       <Header />
       {this.props.children}
     </div>
   );
 }
}

export default Page;