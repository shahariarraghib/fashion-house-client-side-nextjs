import React from "react";
import styles from "../../../style/secondBanner.module.css";
import secondBannerModel from "../../../assest/images/secondBannerModel.png";
import Image from "next/image";
const SecondBanner = () => {
  return (
    <div className={`${styles.secondBannerBackground} `}>
      <div className="lg:flex items-center justify-center">
        <div class={`${styles.imageDiv}`}>
          <Image
            src={secondBannerModel}
            className={`${styles.brandImageStyle}`}
          ></Image>
        </div>

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
      </div>
    </div>
  );
};

export default SecondBanner;
