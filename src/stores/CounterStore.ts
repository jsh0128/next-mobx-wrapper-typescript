import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper';
import { observable, action } from 'mobx';

class CountStore extends BaseStore {
    @observable count = 10;

    @action increment() {
        this.count++;
    }

    @action decrement() {
        this.count--;
    }
}

export default CountStore;
export const CounterStore = getOrCreateStore('counterStore', CountStore);
