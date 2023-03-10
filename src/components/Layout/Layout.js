import React from 'react';
import Header from '../Header/Header';
import classNames from 'classnames/bind';
import styles from './layout.module.scss';
import Sidebar from '../Sidebar/Sidebar';
const cx = classNames.bind(styles);

const Layout = ({ children }) => {
  return (
    <div className={cx('layout')}>
      <Header />
      <div className={cx('layout_body')}>
        <Sidebar />
        <p className="text-[red]">ada</p>
        <div className={cx('layout_content')}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
