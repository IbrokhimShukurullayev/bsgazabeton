import React from "react";
import "./taqoslash.scss";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const TaqoslashHeaderLink = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div id="sotuvlink">
      <div className="container sotuvlink">
        <div className="sotuvlink__link">
          <Link href={"/"}>Bosh sahifa</Link>
          <span>
            <ChevronRight className="icon" />
          </span>
          <p>Mahsulotlarni taqqoslash</p>
        </div>
        <h2>Mahsulotlarni taqqoslash</h2>
      </div>
    </div>
  );
};

export default TaqoslashHeaderLink;
