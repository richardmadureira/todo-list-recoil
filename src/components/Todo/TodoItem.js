import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../states/todoListState';

export default function TodoItem({ item }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex(listItem => listItem === item);
    const editItemText = ({ target: { value } }) => {
        const newList = replaceItemAtIndex(todoList, index, { ...item, text: value });
        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });
        setTodoList(newList);
    }

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    }
    return (
        <tr>
            <td className="p-0">
                <div className="input-group my-1">
                    <input type="text" className="form-control" aria-label="Text input with checkbox" value={item.text} onChange={editItemText} />
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <input type="checkbox" aria-label="Checkbox para toggle completed" checked={item.isComplete} onChange={toggleItemCompletion} />
                        </div>
                    </div>
                </div>
            </td>
            <td className="p-0 text-center align-middle" style={{ width: '40px' }}>
                <button className="btn btn-sm btn-danger" onClick={deleteItem}>
                    <svg className="bi bi-x-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z" />
                    </svg>
                </button>
            </td>
        </tr>
    );
}

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}