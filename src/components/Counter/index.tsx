import useStores from 'hooks/common/useStore';
import { observer } from 'mobx-react';

const Counter = () => {
    const { CounterStore } = useStores();
    return (
        <div>
            <h1>카운터 예시</h1>
            <span>{CounterStore.count}</span>
            <button onClick={() => CounterStore.increment()}>+</button>
            <button onClick={() => CounterStore.decrement()}>-</button>
        </div>
    );
};

export default observer(Counter);
