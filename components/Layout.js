import Head from 'next/head';
import Navbar from './Navbar';
import '../styles/layout.css';

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Ryan Walker | Full-Stack Dev</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
