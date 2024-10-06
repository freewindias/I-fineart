import Head from "next/head";
import Header from "./Header";
import style from './layout.module.css';
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>I-fineart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={style.body}>{children}</main>
      <Footer />
    </>
  );
}