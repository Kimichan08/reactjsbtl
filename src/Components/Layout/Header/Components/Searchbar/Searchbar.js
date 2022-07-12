import React from 'react';
import classNames from 'classnames/bind';
import style from "./Searchbar.module.css";
import { MdSearch } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";

const cx = classNames.bind(style);

function Searchbar() {
    return (
        <div className={cx("searchbar")}>
            <div className={cx("container", "p-1")}>
                <div className={cx("row", 'align-items-center', 'justify-content-between')}>
                    <div>
                        <MdSearch />
                        <input className={cx("mr-sm-2", "search-input")} type="text" placeholder="Tìm kiếm..." />
                    </div>
                    <div className={cx("d-flex")}>
                        <div className={cx("search-icon")}>
                            <IoPersonCircle />
                        </div>
                        <div className={cx("search-icon")}>
                            <MdShoppingCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar