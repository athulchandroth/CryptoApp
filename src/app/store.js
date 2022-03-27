import {configureStore} from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptosNewsApi } from '../services/cryptosNewsApi';
export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptosNewsApi.reducerPath]:cryptosNewsApi.reducer
    },
});
