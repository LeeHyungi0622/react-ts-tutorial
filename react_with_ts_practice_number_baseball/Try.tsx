import * as React from 'react'; 
import { FunctionComponent, memo, PureComponent } from 'react';
import { TryInfo } from './types';


// class Try extends PureComponent {
//     render(){
//         const { tryInfo } = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>
//         )
//     }
// }

const Try: FunctionComponent<{ tryInfo: TryInfo}> = ({tryInfo}) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
};

export default Try;