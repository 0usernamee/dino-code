"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import navLogo from "../images/navLogo.svg";
import SlideOutMenu from "./SlideOutMenu";

export default function Navbar({ theme = "default" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Show navbar when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Define theme classes
  const getThemeClass = () => {
    switch (theme) {
      case "html":
        return styles.htmlTheme;
      case "javascript":
        return styles.jsTheme;
      case "css":
        return styles.cssTheme;
      default:
        return "";
    }
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          isVisible ? styles.visible : styles.hidden
        } ${getThemeClass()}`}
      >
        <div className={styles.menuButton} onClick={toggleMenu}>
          <span className={styles.menuIcon}>≡</span>
        </div>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoContent}>
            <div className={styles.logoIcon}>
              <Image
                src={navLogo}
                alt="DinoCode Logo"
                width={120}
                height={120}
                className={styles.dino}
              />
            </div>
          </div>
        </Link>
      </nav>

      <SlideOutMenu isOpen={isMenuOpen} onClose={closeMenu} theme={theme} />
    </>
  );
}
