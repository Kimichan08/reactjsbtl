import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from "./New.module.css";
import MaskGroup11 from "../../../Assets/MaskGroup11.png";
import MaskGroup8 from "../../../Assets/MaskGroup8.png";
import axios from 'axios';
import NewLeft from './Components/NewLeft/NewLeft';
import NewRight from './Components/NewRight/NewRight';

const cx = classNames.bind(style);

function New() {
  

  return (
    <div className={cx('container', "mt-5")}>
      <h3 className={cx('mb-4')}>TIN TỨC</h3>
      <div className={cx("row")}>
        
        <div className={cx("col-lg-4", 'col-md-4', 'col-sm-12')}>
          <h4>BÀI VIẾT NỔI BẬT</h4>
          <NewRight />
        </div>
      </div>
    </div >
  )
}

export default New;