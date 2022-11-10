import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { BsExclamationLg } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  // Keeps track of current url, used for highlighting anchor tag.
  const [page, setPage] = useState("/");

  // Changes the page state based on the current url.
  useEffect(() => {
    // if rooturl/new, changes page state to "/new"
    if (window.location.href.includes("/new")) {
      setPage("/new");
    } else if (window.location.href.includes("/completed")) {
      setPage("/completed");
    } else {
      setPage("/");
    }
  }, []);

  // Returns a string based on url parameter. Used for setting className.
  const setClass = (url: string) => {
    if (page === url) {
      return "secondary";
    }
    return "";
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Logo */}
        <h1 className={`center ${styles.heading}`}>
          <Link to="/">Quest Log</Link>
        </h1>

        {/* Exclamation Icon */}
        <div className={styles.iconContainer}>
          <BsExclamationLg className={styles.icon} size={37} />
        </div>
      </div>

      {/* Nav list */}
      <nav>
        <ul className={styles.navlist}>
          <li>
            <Link to="/" className={setClass("/")}>
              Current
            </Link>
          </li>

          <li>
            <Link to="/completed" className={setClass("/completed")}>
              Completed
            </Link>
          </li>

          <li>
            <Link to="/new" className={setClass("/new")}>
              New Quest
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
