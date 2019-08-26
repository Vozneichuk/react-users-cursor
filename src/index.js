import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';



// <div class='red'>
//   <a href='#'>About</a>
// </div>

// React.createElement() == // document.createElement  //VirtualDOM
// React.createElement('div', {className: "red"}, React.createElement("a",{href: "#"}, "About"))




ReactDOM.render(<App/>, document.getElementById('root'));  //приложение


// ReactDOM.createPortal(<div>Hello team</div>, document.getElementById('root2')); // второе приложение в приложении












// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
