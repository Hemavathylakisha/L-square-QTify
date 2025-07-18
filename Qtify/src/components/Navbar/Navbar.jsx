import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

const Navbar = () => {
  const handleFeedbackClick = () => {
    window.alert("Feedback button clicked!");
  };

  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search />
      <Button text="Give Feedback" onClick={handleFeedbackClick} />
    </nav>
  );
};

export default Navbar;