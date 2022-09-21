import '../styles/globals.css'
import { AuthProvider } from "../contexts/Auth";
import Head from 'next/head'
import NavBar from "../components/NavBar";
import Footer from '../components/Footer'
import dynamic from "next/dynamic";
// import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <Head>
        <title>  Helping Hands  </title>
        <link rel="icon" href="image/hand-13.jpg" />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        /> */}
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>

  )
}

// export default MyApp

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
