import React from "react";
import fashionHouseFooterImage from "../../../assest/images/fashionHouseFooterImage.png";
import Image from "next/image";
import styles from "../../../style/footer.module.css";
import BrandLogo from "../../../assest/logo/brandLogo.png";
import PaymentMethod from "../../../assest/images/PaymentMethod.png";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="w-3/4 m-auto">
      <div className={`${styles.h2}`}>
        <h1 aria-label="FASHIONHOUSE" className={`${styles.h1}`}></h1>
      </div>
      <div className="lg:flex justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="text-black">
            <div>
              <Image
                src={BrandLogo}
                className={`${styles.brandImageStyle}`}
              ></Image>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-items-center lg:ml-10 ml-10">
          <a
            href="https://github.com/shahariarraghib"
            target="_blank"
            alt="github"
          >
            <div className={`${styles.bannerIconStyle} lg:ml-0 `}>
              <AiFillGithub className="h-5 w-5" aria-hidden="true" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/shahariar-bhuiyan-2a6b04130/"
            target="_blank"
            alt="linkedin"
          >
            <div className={`${styles.bannerIconStyle} lg:ml-5 ml-5`}>
              <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
            </div>
          </a>

          <a href="mailto: sr.raghib@gmail.com?" target="_blank" alt="gmail">
            <div className={`${styles.bannerIconStyle} lg:ml-5 ml-5`}>
              <AiFillMail className="h-5 w-5" aria-hidden="true" />
            </div>
          </a>
        </div>
      </div>

      <div className="lg:flex justify-between items-start lg:mt-8">
        <div className="lg:w-1/4">
          <h2 className={`${styles.footerH2TagStyle}`}>Who We Are</h2>
          <p className={`${styles.footerPTagStyle}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            sunt similique neque beatae? Illo facilis dicta quod, quam corrupti
            quis.
          </p>
        </div>
        <div className="lg:w-1/4">
          <h2 className={`${styles.footerH2TagStyle}`}>Shop Locations</h2>
          <p className={`${styles.footerPTagStyle}`}>Dhaka</p>
          <p className={`${styles.footerPTagStyle}`}> Chittagong</p>
          <p className={`${styles.footerPTagStyle}`}> Sylhet</p>
          <p className={`${styles.footerPTagStyle}`}> Mymensingh</p>
        </div>
        <div className="lg:w-1/4">
          <h2 className={`${styles.footerH2TagStyle}`}>Payment Methods</h2>{" "}
          <div className="flex-shrink-0">
            <div>
              <Image
                src={PaymentMethod}
                className={`${styles.brandImageStyle}`}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-5">
        <hr className={`${styles.animationhr}`} />
      </div>

      <div className="lg:flex justify-between items-center lg:mt-5 lg:mb-5">
        <div>
          <div className="flex items-center">
            <span className={`${styles.getAprojectgmail} `}>@</span>
            <span className={`${styles.getAprojectGmailStyle} `}>
              <a
                href="https://shahariar-bhuiyan.vercel.app/"
                target="_blank"
                alt="portfolio"
              >
                Shahariar Bhuiyan
              </a>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-items-center lg:ml-10">
            <a
              href="https://github.com/shahariarraghib"
              target="_blank"
              alt="github"
            >
              <div className=" lg:ml-0">
                <AiFillGithub className="h-5 w-5" aria-hidden="true" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/shahariar-bhuiyan-2a6b04130/"
              target="_blank"
              alt="linkedin"
            >
              <div className=" lg:ml-5 ml-2">
                <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
              </div>
            </a>

            <a href="mailto: sr.raghib@gmail.com?" target="_blank" alt="gmail">
              <div className=" lg:ml-5 ml-2">
                <AiFillMail className="h-5 w-5" aria-hidden="true" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
