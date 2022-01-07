import Counter from 'components/Counter';
import { NextPage } from 'next';
import CustomNextPage from 'util/type/CustomNextPage';

const Count: NextPage = () => {
    return <Counter />;
};

Count.getInitialProps = async ({ store: { CounterStore } }: CustomNextPage) => {
    CounterStore.increment();

    return {
        count: CounterStore.count,
    };
};

export default Count;
