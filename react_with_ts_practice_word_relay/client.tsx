import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WordRelay from './wordRelay';
import { hot } from 'react-hot-loader/root';

const Hot = hot(WordRelay); //HOC

ReactDOM.render(<Hot />, document.querySelector('#root'));