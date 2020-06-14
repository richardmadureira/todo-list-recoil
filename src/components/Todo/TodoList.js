import React from 'react';
import { useRecoilValue } from 'recoil';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';
import { filteredTodoListState } from '../../states/todoListState/selectors';

export default function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);
    return (
        <>
            <h2 className="text-center text-primary">
                <svg className="bi bi-card-checklist" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path fillRule="evenodd" d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                </svg>
                &nbsp;&nbsp;Todo List
            </h2>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />
            <div className="table-responsive">
                <table className="table table-sm table-bordered table-hover table-striped">
                    <caption>Todo Items</caption>
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="text-center">Item</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList.length === 0 ? <tr><td colSpan={2} className="text-center">No todo items found!</td></tr> : null}
                        {todoList.map(todoItem => (<TodoItem key={todoItem.id} item={todoItem} />))}
                    </tbody>
                </table>
            </div>
        </>
    );
}