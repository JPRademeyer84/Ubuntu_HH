import Footer from "./footer/Footer";
import Header from "./header/Header";
import Login from "./modal/Login";
import SignUp from "./modal/SignUp";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import Toast from './Toast/Toast';

const Layout = ({ children }) => {
  return (
    <>
      {/* SignUp Modal */}
      <SignUp />

      {/* Login Modal */}
      <Login />

      {/* Header section */}
      <Header />

      {/* Toast notifications */}
      <Toast />

      {children}

      {/* Footer section */}
      <Footer />

      {/* scroll-to-top start */}
      <ScrollToTop />
    </>
  );
};

export default Layout;
