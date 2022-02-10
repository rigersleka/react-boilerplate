import React from 'react';
import { render } from 'react-dom';

// function Hi() {
//   return <p>React Boilerplate Environment</p>;
// }

let  Hi = () => <p> React Boilerplate Environment</p>;

export default Hi;

render(<Hi />, document.getElementById('app'));
