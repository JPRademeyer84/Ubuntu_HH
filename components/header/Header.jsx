"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import cartData from "../../data/cartData";
import tag from "/public/images/icon/btn/tag.png";
import logo from "/public/images/logo.png";
import { useAuth } from "@/context/AuthContext";

const Header = ({openModal}) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [show, setShow] = useState(false);
  const { isLoggedIn } = useAuth();

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  const pathName = usePathname();

  return (
    <header
      id="gotoTop"
      className={`header ${
        windowHeight > 50 && "menu-fixed animated fadeInDown"
      }`}
    >
      <div className="header__top">
        <div className="container">
          <div className="row align-items-center gap-2 gap-md-0">
            <div className="col-sm-6">
              <div className="left d-flex align-items-center gap-1">
                <a
                  href="tel:65655655"
                  className="d-flex align-items-center gap-1"
                >
                  <i className="las la-phone-volume"></i>
                  Customer Support
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="right">
                <div className="product__cart">
                  <span className="total__amount">0.00</span>
                  <Link href="/cart" className="amount__btn">
                    <i className="las la-shopping-basket"></i>
                    <span className="cart__num">{cartData.length}</span>
                  </Link>
                </div>
                {isLoggedIn ? (
                  <a href="/user-info" className="user__btn d-flex align-items-center justify-content-center">
                    <i className="las la-user"></i>
                  </a>
                ) : (
                  <a
                    href="#0"
                    className="user__btn d-flex align-items-center justify-content-center"
                    onClick={openModal}
                  >
                    <i className="las la-user"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <nav className="navbar navbar-expand-xl p-0 align-items-center">
            <Link href="/" className="site-logo site-title">
              <Image src={logo} alt="logo" />
              <span className="logo-icon">
                <i className="flaticon-fire"></i>
              </span>
            </Link>
            <button
              className="navbar-toggler ms-auto"
              type="button"
              onClick={() => setShow(!show)}
            >
              <span className="menu-toggle"></span>
              <span className="menu-toggle"></span>
              <span className="menu-toggle"></span>
            </button>
            <div className={`collapse navbar-collapse ${show && "show"}`}>
              <ul className="navbar-nav main-menu m-auto">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/contest">Contest</Link>
                </li>
                <li>
                  <Link href="/winner">Winners</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
              <div className="nav-right">
                <Link href="/contest" className="cmn-btn style--three btn--sm">
                  <Image src={tag} alt="icon" className="me-1" /> Buy Tickets
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
