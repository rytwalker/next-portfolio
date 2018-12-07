import Head from 'next/head';
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
      </Head>
      {props.children}
    </div>
  );
};

export default Layout;
