import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from "../../New.module.css";
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
function NewLeft() {
    const [apiData, setapiData] = useState([]);

    const setData = () => {
        axios.get('http://localhost:1108/news')
            .then((response) => {
                setapiData(response.data)
            })
            .catch((error) => {
                alert(error)
            })
    }

    useEffect(() => {
        setData()
    }, [])
    return (
        <div>
            {
            apiData.map((items, index) => {
              return items.id < 5 ? (
                <div className={cx('col-lg-4', 'col-md-4', 'col-sm-12', 'p-0')}>
                  <div className={cx('card')} key={index}>
                    <img src={items.images} className={cx("card-img-top", 'card-img')} alt="..." />
                    <div className={cx("card-body")}>
                      <a className={cx("card-title")}>{items.title}</a>
                      <p className={cx("card-text", "text-truncate")}>{items.content}</p>
                    </div>
                  </div>
                </div>
              ) :
                <div key={index}></div>
            })
          }
        </div>
    )
}

export default NewLeft