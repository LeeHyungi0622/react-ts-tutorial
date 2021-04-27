import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ResponseCheck from './ResponseCheck';
import { hot } from 'react-hot-loader/root';

const Hot = hot(ResponseCheck); //HOC

ReactDOM.render(<Hot />, document.querySelector('#root'));