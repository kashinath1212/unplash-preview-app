import '../styles/globals.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { wrapper } from '../Redux/store';


function MyApp({ Component, ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest)
  return (
    <>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </>
  )
}

export default MyApp;