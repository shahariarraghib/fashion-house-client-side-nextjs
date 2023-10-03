import React from "react";
import styles from "../../../style/banner.module.css";
import Image from "next/image";

import bannerModel from "../../../assest/images/bannerModel.png";
const Banner = () => {
  return (
    <div className={`${styles.bannerBackground}  `}>
      <div className="lg:flex tems-center justify-center">
        <div
          className={`${styles.FashionHouseDivLeft} flex items-center justify-center p-24`}
        >
          <div>
            <div className="flex items-center justify-center">
              <h2 className={`${styles.FashionHouseH2}`}>
                <span>FASHION HOUSE</span>
              </h2>
            </div>
            <div
              className={`${styles.FashionHouseHR} flex justify-center items-center m-4`}
            >
              <hr className={`${styles.animationhr}`} />
            </div>
            <div className={`${styles.FashionHousePDiv}`}>
              <p className={`${styles.FashionHouseP} text-center`}>
                As technology continues to advance, the future of fashion house
                e-commerce looks promising, offering even more innovative ways
                for consumers to engage with their favorite brands and stay
                ahead in the world of style.
              </p>
            </div>
          </div>
        </div>

        <div class={`${styles.imageDiv}`}>
          <Image
            src={bannerModel}
            className={`${styles.brandImageStyle}`}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
