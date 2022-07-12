import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from "./Product.module.css";
import axios from 'axios';


const cx = classNames.bind(style);

function Product() {

    const [apiData, setapiData] = useState([]);

    const getData = () => {
        axios.get("http://localhost:1108/products")
            .then(
                (response) => {
                    setapiData(response.data);
                }
            )
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className={cx("container")}>
                <div className={cx("row",'mt-5')}>
                    <div className={cx('col-lg')}>
                    {
                            apiData.map((items, index) => {
                                return (
                                    <div className={cx('card', 'prod', 'd-inline-block', "mt-5")} key={index}>
                                        <img className="card-img" src={items.main_image} alt="Card image cap" />
                                            <div className="card-body">
                                                <p>{items.prod_name}</p>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product