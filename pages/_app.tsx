import { AppProps } from 'next/app';
import Head from 'next/head';
import ConversationItems from '../components/ConversationItems';
import SpecificConversation from '../components/SpecificConversation';
import { StoreProvider } from '../store/storeContext';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StoreProvider>
        <ConversationItems></ConversationItems>
        <SpecificConversation></SpecificConversation>
        {/* <Head>
          <title>Welcome to admin-front!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main> */}
      </StoreProvider>
    </>
  );
}

export default CustomApp;
