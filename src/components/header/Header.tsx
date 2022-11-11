import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { BsExclamationLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { headerData } from "./headerData";

export default function Header() {
  // Keeps track of current url, used for highlighting anchor tag.
  const [url, setUrl] = useState("/");

  // On first component load, change the url state to match the current route.
  useEffect(() => {
    // if rooturl/new, changes url state to "/new"
    if (window.location.href.includes("/new")) {
      setUrl("/new");
    } else if (window.location.href.includes("/completed")) {
      setUrl("/completed");
    } else {
      setUrl("/");
    }
  }, []);

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
          {headerData.map((data) => (
            <li key={data.url}>
              <Link
                to={data.url}
                className={url === data.url ? "secondary" : ""}
                onClick={() => setUrl(data.url)}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
