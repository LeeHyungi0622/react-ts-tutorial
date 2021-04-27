import * as React from 'react';
import { setConstantValue } from 'typescript';
import { useState, useRef,useCallback } from 'react';

const WordRelay = () => {
    const [word, setWord] = useState('현기');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    const onSubmitForm = useCallback((e: React.FormEvent<HTMLFormElement>) => {

    },[value]);

    const onChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {
        setValue(e.currentTarget.value);
    }, []);

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    value={value}
                    onChange={onChange}
                />
            </form>
        </>
    )
}