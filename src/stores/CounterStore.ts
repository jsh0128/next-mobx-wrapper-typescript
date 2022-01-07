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

// Make sure the CountStore’s unique name
// AND getCounterStore, counterStore must be same formula
// Example: getUserStore => userStore
// Example: getProductStore => productStore
export default CountStore;
export const CounterStore = getOrCreateStore('counterStore', CountStore);
