import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { headerData, headerDataType } from "./headerData";
import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";
import { setUrl } from "../../app/features/appSlice";
import logo from "../../assets/logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Header() {
  // Handles mobile sidebar display
  const [isOpen, setIsOpen] = useState(false);

  // Keeps track of current url, used for highlighting anchor tag.
  const url = useAppSelector((state) => state.app.url);

  const dispatch = useDispatch();

  // On first component load, change the url global state to match the current route.
  useEffect(() => {
    // if rooturl/new, changes url state to "/new"
    if (window.location.href.includes("/new")) {
      dispatch(setUrl("/new"));
    } else if (window.location.href.includes("/completed")) {
      dispatch(setUrl("/completed"));
    } else {
      dispatch(setUrl("/"));
    }
  }, [dispatch]);

  // Handles click event for <Link />
  const handleLink = (data: headerDataType) => {
    dispatch(setUrl(data.url));
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      {/* Mobile Menu Icon */}
      <div onClick={() => setIsOpen(!isOpen)}>
        <HiMenuAlt3
          className={
            isOpen
              ? `${styles.menuIcon} secondary-light`
              : `${styles.menuIcon} light`
          }
        />
      </div>

      {/* Navbar */}
      <nav className={isOpen ? `${styles.nav} ${styles.showNav}` : styles.nav}>
        {/* Mobile sidebar logo */}
        <div className={`${styles.logo} mt-2 ${styles.hideLogo}`}>
          <img src={logo} alt="logo" />
        </div>

        <ul className={styles.navlist}>
          {headerData.map((data) => (
            <li key={data.url}>
              <Link
                to={data.url}
                className={url === data.url ? styles.selected : ""}
                onClick={() => handleLink(data)}
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
