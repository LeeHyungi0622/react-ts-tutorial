import * as React from 'react';
import { setConstantValue } from 'typescript';
import { useState, useRef, useCallback } from 'react';
import Try from './Try';
import { TryInfo } from './types';
const getNumbers = () => {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i < 4; i += 1){
        const chosen = candidate.splice(Math.floor(Math.random() * (9-1)), 1)[0];
        array.push(chosen);
    }
    return array;
};

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState<TryInfo[]>([]);
    const inputEl = useRef<HTMLInputElement>(null);

    const onSubmitForm = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(value === answer.join('')){
            setResult('홈런!');
            setTries(tries => 
                [
                    ...tries, 
                    { 
                        try: value, 
                        result: '홈런!'
                    }
                ]
            );
            alert('게임을 다시 시작합니다!');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9){ // 10번이상 틀린 경우
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다.`);
                alert('게임을 다시 시작합니다!');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for(let i = 0; i < 4; i += 1){
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    } else if(answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
                setTries(tries => {
                    return [...tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}];
                });
                console.log('after tries : ',tries);
                setValue('');
            }
        }
    }, []);

    const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);
    
    
    
    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input ref={inputEl} maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>시도: { tries.length }</div>
            <ul>
                {tries.map((v, i) => <Try key={`${i + 1}차 시도 :`} tryInfo={v}/>)}
            </ul>
        </>
    );
};

export default NumberBaseball;