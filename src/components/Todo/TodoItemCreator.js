import React, { useState, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../states/todoListState';
import { useEffect } from 'react';

export default function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
    const textRef = useRef(null);

    useEffect(() => textRef.current.focus(), [])

    const addItem = e => {
        e.preventDefault();
        setTodoList(oldTodoList => [
            ...oldTodoList,
            { id: getId(), text: inputValue, isComplete: false }
        ]);
        setInputValue('');
        textRef.current.focus();
    }

    const onChange = ({ target: { value } }) => setInputValue(value);

    return (
        <div>
            <form id="form-todo-item-creator" onSubmit={addItem}>
                <div className="row">
                    <div className="col form-group form-group-sm">
                        <label htmlFor="text">Texto</label>
                        <div className="input-group">
                            <input id="text" className="border-primary form-control" ref={textRef} placeholder="Add Todo..." type="text" value={inputValue} onChange={onChange} title="Add here anything" />
                            <div className="input-group-append">
                                <button className="btn btn-primary btn-outlined-primary" type="submit" title="Clique here to confirm add todo item">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

let id = 0;
function getId() {
    return id++;
}