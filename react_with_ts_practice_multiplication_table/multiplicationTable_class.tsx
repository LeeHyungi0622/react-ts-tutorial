import * as React from 'react';

interface IState {
    first: number,
    second: number,
    value: string,
    result: string
}


class MultiplicationTable extends React.Component<{}, IState>{
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.ceil(Math.random() * 9)),
        value: '',
        result: '',
    }

    inputEl: HTMLInputElement | null = null;

    inputRef = (c: HTMLInputElement) =>{
        this.inputEl = c;
    };

    onSubmitForm(e: React.FormEvent<HTMLFormElement>){
        const { first, second, value } = this.state;
        e.preventDefault();
        if(parseInt(value) === (first * second)){
            this.setState((prevState) => {
                return {
                    value: '',
                    result: '정답입니다.' + prevState.value,
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9)
                }
            });
            // input focus
            if(this.inputEl){
                this.inputEl.focus();
            }
        } else {
            this.setState({
                value: '',
                result: '땡'
            });
            if(this.inputEl){
                this.inputEl.focus();
            }
        }
    }

    onChange(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            value: e.target.value
        });
    }

    render(){
        const { first, second, value, result } = this.state;
        return (
            <>
                <div>{first} X {second}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input
                        type="number"
                        ref={this.inputRef}
                        value={value}
                        onChange={this.onChange}
                    />
                </form>
                <div>{result}</div>
            </>
        )
    }
}

export default MultiplicationTable;