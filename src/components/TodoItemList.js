import React , {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    //성능 최적화 - 컴포넌트 라이프 사이클 메소드 중 하나로 컴포넌트가 리렌더링 할지 결정해줌
    //업데이트에 영향을 끼치는 조건을 return해주면 됨
    //todos 값이 바뀔 때 리렌더링 하면 되니까 this.props.todos 와 nextProps.todos 를 비교해서 이 값이 다를때만 리렌더링하게 설정하면 끝
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }

    render() {

        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id,text,checked,color}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                    color={color}
                />
            )
        )

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;