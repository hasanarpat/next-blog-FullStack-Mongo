import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "About Crowgenstein",
  description: "A multifunctional web app for showing skills.",
};
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1600"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting - Award Winning Digital Experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are we?</h1>
          <p className={styles.desc}>
            Aliqua nostrud laborum id amet ipsum non aliquip occaecat
            exercitation pariatur reprehenderit tempor tempor. Mollit aliqua eu
            voluptate nisi ut aliquip nulla officia excepteur aute dolor Lorem.
            Est dolor sint cupidatat magna elit eiusmod nulla.
            <br />
            <br />
            Enim Lorem consectetur consectetur ullamco est commodo ad aliquip
            cupidatat velit dolore labore. In ipsum irure ex tempor incididunt
            ad id ut excepteur magna. Sint incididunt ea et eiusmod quis quis.
            Sint et in proident nisi dolore ullamco dolor ut non adipisicing.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are we?</h1>
          <p className={styles.desc}>
            Ad sint nostrud eiusmod commodo veniam deserunt voluptate non dolor
            irure. Voluptate dolore occaecat excepteur Lorem commodo duis enim
            ullamco adipisicing culpa mollit ad. Reprehenderit nisi fugiat
            incididunt et magna. Et id cillum adipisicing cillum dolore dolor
            ipsum adipisicing mollit. 
            <br/><br/>
            - Dynamic Websites <br/><br/>- Fast and Handy 
            <br/><br/>- Mobile Apps
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
