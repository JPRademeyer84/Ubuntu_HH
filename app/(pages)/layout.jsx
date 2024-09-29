"use client";

import { useState } from 'react';
import Login from "@/components/modal/Login";
import SignUp from "@/components/modal/SignUp";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import Toast from '@/components/Toast/Toast';
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openLoginModal = () => {setIsLoginModalOpen(true);setIsSignUpModalOpen(false)};
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const openSignUpModal = () => {setIsSignUpModalOpen(true);setIsLoginModalOpen(false)};
  const closeSignUpModal = () => setIsSignUpModalOpen(false);

  return (
    <>
      <AuthProvider>
      {/* Toast notifications */}
      <Toast />
      {/* Header section */}
      <Header openModal={openLoginModal}/>

      {children}

      {/* Footer section */}
      <Footer />
      {/* scroll-to-top start */}
      <ScrollToTop />
      {/* SignUp Modal */}
      {isSignUpModalOpen && <SignUp closeModal={closeSignUpModal} openModel={openLoginModal} />}
      {/* Login Modal */}
      {isLoginModalOpen && <Login closeModal={closeLoginModal} openModel={openSignUpModal} />}
      </AuthProvider>
    </>
  );
}
