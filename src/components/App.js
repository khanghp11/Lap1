//import React, { Component } from "react";

import '../styles/App.css';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>My Demo React App!</h1>
//             </div>
//         );
//     }
// }
// export default App;
import React from 'react';

function HelloWorld() {
    return <div > < h1 > Huỳnh Phúc Khang - CE170373 </h1></div > ;
}
export default HelloWorld;

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person = new Person("Khang", 21);
person.sayHello();