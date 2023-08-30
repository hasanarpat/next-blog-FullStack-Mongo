import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 Crowgenstein. All rights reserved.</div>
      <div className={styles.social}>
        <Image alt="" src="/1.png" width={15} height={15} className={styles.icon}/>
        <Image alt="" src="/2.png" width={15} height={15} className={styles.icon}/>
        <Image alt="" src="/3.png" width={15} height={15} className={styles.icon}/>
        <Image alt="" src="/4.png" width={15} height={15} className={styles.icon}/>
      </div>
    </div>
  );
};

export default Footer;
