import React from 'react';
import { MobXProviderContext } from 'mobx-react';
import StoreType from 'util/type/StoreType';

const useStores = () => React.useContext(MobXProviderContext) as StoreType;
export default useStores;
