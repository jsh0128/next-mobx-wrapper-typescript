import React from 'react';
import { AppContext } from 'next/dist/pages/_app';
import { NextPage } from 'next';
import { withMobx } from 'next-mobx-wrapper';
import { configure } from 'mobx';
import { Provider, useStaticRendering } from 'mobx-react';
import * as stores from 'stores';
import StoreType from 'util/type/StoreType';

interface AppContextStore extends AppContext {
    store?: StoreType;
}

interface MyAppProps {
    pageProps: any;
    store: StoreType;
    Component: NextPage;
}

const isServer = !process.browser;

configure({ enforceActions: 'observed' });
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer); // NOT `true` value

const MyApp = ({ store, pageProps, Component }: MyAppProps) => {
    return (
        <Provider {...store}>
            <Component {...pageProps} />
        </Provider>
    );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContextStore) => {
    let pageProps = {};

    if (typeof Component.getInitialProps === 'function') {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
};

export default withMobx(stores)(MyApp);
