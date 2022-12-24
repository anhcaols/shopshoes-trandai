/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faHome, faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

const Sidebar = () => {
  const { pathname } = useLocation();
  const [activeMenu, setActiveMenu] = useState("/");
  const listMenu = [
    { name: "Trang chủ", href: "/", icon: faHome },
    { name: " Sản phẩm", href: "/product", icon: faShoePrints },
    { name: "Hóa đơn bán", href: "/order", icon: faBorderAll },
  ];
  useEffect(() => {
    setActiveMenu(pathname);
  }, []);

  return (
    <ul className={cx("sidebar")}>
      {listMenu.map((item, index) => (
        <li
          key={index}
          className={cx({ "item-active": activeMenu === item.href })}
          onClick={() => {
            setActiveMenu(item.href);
          }}
        >
          <Link to={item.href}>
            <FontAwesomeIcon className={cx("item-icon")} icon={item.icon} /> {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
