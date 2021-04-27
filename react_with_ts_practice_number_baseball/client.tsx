import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NumberBaseball from './numberBaseball';
import { hot } from 'react-hot-loader/root';

const Hot = hot(NumberBaseball); //HOC

ReactDOM.render(<Hot />, document.querySelector('#root'));