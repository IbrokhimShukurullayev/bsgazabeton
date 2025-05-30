"use client";
import React from "react";
import Image from "next/image";
import "./aboutMijoz.scss";
import xonsaroy from "../../../assets/images/xonsaroy.png";
import ClientCarousel from "../../../components/clientCarousel/ClientCarousel";
import caricon from "../../../assets/images/caricon.png";
import Title from "../../../components/title/Title";
import { useTranslation } from "react-i18next";

const AboutMijoz = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div id="aboutMijoz">
      <Title title={"BS gazobeton"} text={t("mijoz.title1")} />
      <ClientCarousel />
      <div className="aboutMijoz__mijzolar">
        <div>
          <Image src={xonsaroy} alt="xonsaroy" />
        </div>
        <div>
          <Image src={xonsaroy} alt="xonsaroy" />
        </div>
        <div>
          <Image src={xonsaroy} alt="xonsaroy" />
        </div>
        <div>
          <Image src={xonsaroy} alt="xonsaroy" />
        </div>
        <div>
          <Image src={xonsaroy} alt="xonsaroy" />
        </div>
        <div>
          <Image src={xonsaroy} alt="xonsaroy" />
        </div>
      </div>
      <div className="aboutMijoz__banner">
        <div className="aboutMijoz__hero">
          <h2>{t("mijoz.title2")}</h2>
          <button>{t("aboutkompany.title10")}</button>
        </div>
        <div className="aboutMijoz__banner__end">
          <Image src={caricon} alt="carison" />
          <p>{t("mijoz.title3")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMijoz;
