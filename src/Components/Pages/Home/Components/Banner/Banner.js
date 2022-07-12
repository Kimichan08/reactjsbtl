import React from 'react';
import classNames from 'classnames/bind';
import style from "./Banner.module.css";
import slider_1 from "../../../../../Assets/slider_1.png";
import banner_t_01 from "../../../../../Assets/banner_t_01.png";
import banner_t_02 from "../../../../../Assets/banner_t_02.png";


const cx = classNames.bind(style);

function Banner() {
    return (
        <div>
            <div className={cx("mt-1")}>
                <img src={slider_1} className={cx('w-100')} />
            </div>
            <div className={cx("container", "mt-4")}>
                <div className={cx("banner")}>
                    <div className={cx("banner-img")}>
                        <img src={banner_t_01} className={cx("w-100")} />
                    </div>
                    <div className={cx("banner-img")}>
                        <img src={banner_t_02} className={cx("w-100")} />
                    </div>
                </div>
                <div className={cx("row","products", "mt-5")}>
                    <h3>Hàng mới về</h3>
                    <p className={cx("products-all")}>Xem tất cả</p>
                </div>
            </div>

        </div>
    )
}

export default Banner