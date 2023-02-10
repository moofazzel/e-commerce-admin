import css from "../styles/HeroBanner.module.css";
import Image from "next/image";
import cherry from "../../public/Cherry.png";
import HeroImage from "../../public/HeroImage.png";
import Pizzal from "../../public/p1.jpg";
import { BsTelephone } from "react-icons/bs";

function Banner() {
  return (
    <div className={css.container}>
      {/* left */}
      <div className={css.left}>
        <div className={css.cherry}>
          <span>More then Faster</span>
          <Image src={cherry} width={60} height={25} alt="" />
        </div>

        <div className={css.heroText}>
          <span>Be The Fastest</span>
          <span>In Delivering</span>

          <span>
            Your{" "}
            <span
              style={{
                color: "var(--themeRed )",
              }}
            >
              Order
            </span>
          </span>
        </div>

        <span className={css.smallText}>
          Our Mission is to delivery your tummy with delicious product and with
          fast and free delivery
        </span>

        <button className={`btn ${css.btn} bg-[#f54749]`}>Get Started</button>
      </div>
      {/* right */}
      <div className={css.right}>
        <div className={css.heroImage}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>

        <div className={css.contactUs}>
          <span>Contact us</span>
          <div>
            <BsTelephone style={{ color: "#ffffff" }} />
          </div>
        </div>

        <div className={css.pizza}>
          <div>
            <Image src={Pizzal} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <div className={css.details}>
            <span>Best Outfit</span>
            <span>
              <span style={{ color: "var(--themeRed)" }}>$</span> 60.49
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
