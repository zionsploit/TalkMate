import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux';
import { store } from './app/store';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}