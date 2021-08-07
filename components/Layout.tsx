import Head from "next/head";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="m-4 flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
