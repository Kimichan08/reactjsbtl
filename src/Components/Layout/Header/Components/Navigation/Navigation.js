import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from "./Nav.module.css";
import logo from "../../../../../Assets/logo.png";

const cx = classNames.bind(style);

function Navigation() {
    return (
        <div>
            <div className={cx("bg-navigation")}>
                <div className={cx("container", "p-3")}>
                    <div className={cx("row", 'align-items-center', 'justify-content-between')}>
                        <div className={cx("logo")}>
                            <img src={logo} className={cx('card-img')}/>
                        </div>

                        <div className={cx("navigation")}>
                            <nav className="navbar navbar-expand-lg p-0">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNavAltMarkup"
                                    aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <Link to="/" className="nav-link" href="#">
                                            Trang chủ
                                        </Link>
                                        <Link to="/product" className="nav-link" href="#">
                                            Tất cả sản phẩm
                                        </Link>
                                        <Link to="/new" className="nav-link" href="#">
                                            Tin tức
                                        </Link>
                                        <Link to="/about" className="nav-link"  href="#">Về Ego Garden</Link>
                                        <Link to="/contact" className="nav-link"  href="#">Liên hệ</Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation