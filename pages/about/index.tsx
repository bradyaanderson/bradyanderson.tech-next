import type { NextPage } from "next";
import styles from "../../styles/about.module.scss";
import Head from "next/head";
import Image from "next/image";
import Paragraph from "../../components/general/Paragraph";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - bradyanderson.tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.aboutContainer}>
          <div className={styles.title}>
            <h1>About</h1>
          </div>
          <div className={styles.profile}>
            <Image
              src="/about/Profile.jpg"
              alt="Logo"
              height="100%"
              width="100%"
              layout={"responsive"}
            />
          </div>
          <div className={styles.body}>
            <div>
              <div>
                <Paragraph>
                  Hey, I'm Brady and this is the part where I talk about myself.
                  I'm a programmer. It's my day job and also something I like to
                  do for fun. That's probably something most programmers can
                  relate to.
                </Paragraph>
                <Paragraph>
                  I grew up in Illinois, but I went to college in Louisiana at
                  Louisiana Tech University. I got my degree in computer science
                  and moved to Kansas City, Missouri.
                </Paragraph>
                <Paragraph>
                  One of the great things about being a programmer is that you
                  can essentially work in whatever field you want. So far I've
                  worked as a programmer in the banking, insurance, aerospace,
                  marketing, and medical records fields. Even something as
                  boring-sounding as insurance gets a lot more interesting when
                  you are tackling problems from a programming perspective.
                </Paragraph>
                <Paragraph>
                  When I'm not working, video games, reading, running; and of
                  course; more programming keep me occupied. I also have a dog,
                  Indy, who you can see pictured with me above.
                </Paragraph>
                <Paragraph>
                  I find myself bouncing between different interests a lot, but
                  one consistent love of mine is retro hardware. It started with
                  old home video game consoles. Soon enough, I had collected
                  most of the more popular (and cheaper) consoles through
                  history and moved onto retro computers. I think it's the
                  simplicity of the hardware, yet complexity (at least compared
                  to a lot of programming today) that fascinates me.
                </Paragraph>
                <Paragraph>
                  So that's about it for now. I'll drop a few links below of
                  other places you can find me. Thanks for dropping by!
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
