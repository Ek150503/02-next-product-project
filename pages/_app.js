import Navbar from "@/components/Navbar";
import "@/MyStyle/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
