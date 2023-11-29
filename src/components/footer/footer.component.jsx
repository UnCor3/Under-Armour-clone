import { Variant2 } from "../button/action-button/action-button.component";
import css from "./footer.styles.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { PiYoutubeLogoLight } from "react-icons/pi";
import withExtendable from "../../hocs/withExtendable.hoc.component";
import { forwardRef } from "react";
import Divider from "../divider/divider.component";
import {
  helpMeOptions,
  uaSocialOptions,
  aboutUAOptions,
} from "../../data/data";

const UALogo = () => (
  <svg
    viewBox="0 0 42 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    aria-hidden="true"
    data-ua-logo="true"
    data-testid="ua-logo"
  >
    <g fill="#000" data-testid="fill-element">
      <path d="M26.971 11.948c-.151.111-.331.24-.549.394-1.395.988-3.42 1.665-6.052 1.665h-.175c-2.63 0-4.657-.677-6.052-1.665-.216-.154-.396-.283-.548-.394.152-.114.332-.243.548-.396 1.395-.987 3.421-1.665 6.052-1.665h.175c2.633 0 4.659.678 6.052 1.665.218.153.398.282.55.396m13.6-8.147s-1.198-.915-4.987-2.307C32.258.274 29.75 0 29.75 0l.01 7.174c0 1.01-.275 1.932-1.046 2.983-2.826-1.03-5.5-1.664-8.42-1.664s-5.592.633-8.419 1.664c-.772-1.046-1.046-1.974-1.046-2.983L10.84 0S8.314.27 4.985 1.494C1.198 2.89 0 3.801 0 3.801c.157 3.256 3.008 6.15 7.498 8.147C3.004 13.942.153 16.83 0 20.094c0 0 1.198.914 4.985 2.307 3.327 1.22 5.838 1.494 5.838 1.494l-.012-7.175c0-1.01.277-1.932 1.046-2.982 2.827 1.03 5.498 1.662 8.419 1.662 2.92 0 5.593-.633 8.42-1.662.772 1.047 1.046 1.973 1.046 2.982l-.01 7.175s2.509-.272 5.836-1.494c3.789-1.395 4.987-2.307 4.987-2.307-.157-3.257-3.008-6.152-7.498-8.146C37.55 9.95 40.4 7.065 40.555 3.8M41.908 19.226c0 .17-.102.325-.26.39-.157.067-.339.031-.46-.09-.121-.12-.158-.302-.092-.46.065-.157.219-.26.39-.26.111 0 .219.043.298.122.08.079.124.186.124.298m.089 0c0-.207-.124-.394-.315-.473-.19-.08-.41-.037-.557.11-.146.145-.19.365-.112.556.08.191.266.316.473.316.281 0 .51-.228.51-.51"></path>
      <path d="M41.589 19.473h.092l-.148-.21c.034-.003.066-.019.088-.045.022-.027.032-.06.029-.095 0-.08-.044-.134-.157-.134h-.175v.484h.082v-.207h.044l.145.207zm-.196-.422h.077c.066 0 .094.023.094.075 0 .053-.024.079-.094.079h-.077v-.154z"></path>
    </g>
  </svg>
);
const UnderArmourFooterLogo = () => (
  <img
    alt="footer-logo"
    src="imgs/underarmourfooterlogo.svg"
    width="130"
    height="9"
  />
);
const UARunApp = () => (
  <img alt="ua-run" src="imgs/ua-run.jpg" width="40" height="40" />
);
const UAShopApp = () => (
  <img alt="ua-shop" src="imgs/ua-shop.jpg" width="40" height="40" />
);
const Chat = ({ width, height }) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="graphics-symbol"
    aria-hidden="true"
    width={width || "16"}
    height={height || "16"}
    color="currentColor"
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M42 6a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H21l-6.44 6.44a1.5 1.5 0 0 1-.912.431l-.148.008a1.5 1.5 0 0 1-1.5-1.5V36H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h36z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

const EmailSub = () => (
  <>
    <div className={css["email-sub"]}>
      <input type="text" />
      <Variant2 buttonText="Submit" style={{ width: "100%" }} />
      <span>Email Address</span>
    </div>
    <div className={css["policy"]}>
      By providing your email, you agree to the <span>Terms & Conditions</span>{" "}
      and <span>Privacy Policy</span>. You may unsubscribe later.
    </div>
  </>
);

const ExtendableText = withExtendable(
  forwardRef(function ExtendableText(
    {
      extendHandler,
      Arrow,
      text,
      iterableText,
      className,
      Logo,
      topDivider = true,
    },
    ref
  ) {
    const { isExtended, setIsExtended } = extendHandler;

    return (
      <div
        className={className}
        style={{
          cursor: "pointer",
          padding: isExtended ? "0rem 1rem 1rem 1rem" : "0rem 1rem 0rem 1rem",
          ...(!topDivider && { marginTop: "1rem" }),
        }}
        onClick={() => setIsExtended((prev) => !prev)}
      >
        {topDivider && (
          <Divider marginBottom="1rem" backgroundColor={"black"} />
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ display: "flex", gap: "1rem" }}>
            <Logo />
            {text}
          </span>
          <div style={{ display: "flex", alignItems: "end" }}>
            <Arrow />
          </div>
        </div>
        <ul
          ref={ref}
          className={css["footer-options"]}
          style={{ paddingTop: "0.5rem" }}
        >
          {iterableText.map((Text, i) => {
            if (typeof Text === "object")
              return (
                <li key={i}>
                  <Text.logo />
                  <span>{Text.key}</span>
                </li>
              );
            return (
              <li key={i}>
                <span>{Text}</span>
              </li>
            );
          })}
        </ul>
        <Divider marginTop="1rem" backgroundColor={"black"} />
      </div>
    );
  })
);

const Footer = () => {
  return (
    <footer className={css["ua-footer"]}>
      <div className={css["footer-container"]}>
        <div className={css["logo"]}>
          <UnderArmourFooterLogo />
        </div>
        <div className={css["footer-content"]}>
          <div>
            <div style={{ marginBottom: "1.5rem", fontWeight: "500" }}>
              Stay in the loop
            </div>
            <EmailSub />
            <div
              style={{ marginTop: "1.5rem", display: "flex", gap: "0.5rem" }}
            >
              <UAShopApp />
              <UARunApp />
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <dir>Accepted Payment Methods</dir>
              <div className={css["payment-methods"]}>
                <img
                  alt="payment-method"
                  src="imgs/mastercard.svg"
                  width="40"
                  height="40"
                />
                <img
                  alt="payment-method"
                  src="imgs/discover.svg"
                  width="40"
                  height="40"
                />
                <img
                  alt="payment-method"
                  src="imgs/visa.svg"
                  width="40"
                  height="40"
                />
                <img
                  alt="payment-method"
                  src="imgs/amex.svg"
                  width="40"
                  height="40"
                />
                <img
                  alt="payment-method"
                  src="imgs/apple-pay.svg"
                  width="40"
                  height="40"
                />
                <img
                  alt="payment-method"
                  src="imgs/pay-pal.svg"
                  width="40"
                  height="40"
                />
                <img
                  alt="payment-method"
                  src="imgs/klarna.svg"
                  width="40"
                  height="40"
                />
              </div>
            </div>
          </div>
          <div className={css["footer-options-container"]}>
            <ExtendableText
              text={"Need Help?"}
              iterableText={helpMeOptions}
              Logo={() => <Chat width="1.5rem" height="1.5rem" />}
            />
            <ExtendableText
              text={"About Under Armour"}
              topDivider={false}
              iterableText={aboutUAOptions}
              Logo={() => <UALogo width="1.5rem" height="1.5rem" />}
            />
            <ExtendableText
              text={"UA Socials"}
              topDivider={false}
              iterableText={uaSocialOptions}
              Logo={() => (
                <AiOutlineInstagram
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />
              )}
            />
          </div>
          <div>
            <div className={css["title"]}>Live Chat</div>
            <div className={css["content"]}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Chat /> <span style={{ marginLeft: "0.4rem" }}>Chat Now</span>
              </div>
              <div>
                <span>Monday-Sunday</span>
              </div>
            </div>
          </div>
          <div>
            <div className={css["title"]}>Need Help</div>
            <div className={css["content"]}>
              <div>
                <span>Help Center</span>
              </div>
              <div>
                <span>Size Guide</span>
              </div>
              <div>
                <span>Shipping & Delivery</span>
              </div>
              <div>
                <span>Returns & Exchanges</span>
              </div>
              <div>
                <span>Store Locator</span>
              </div>
              <div>
                <span>Order Tracking</span>
              </div>
              <div>
                <span>Gift Cards</span>
              </div>
              <div>
                <span>Sitemap</span>
              </div>
              <div>
                <span>Student Discount</span>
              </div>
            </div>
          </div>
          <div>
            <div className={css["title"]}>About Under Armour</div>
            <div className={css["content"]}>
              <div>
                <span>Affiliates</span>
              </div>
              <div>
                <span>About Us/Our Story</span>
              </div>
              <div>
                <span>UA Rewards</span>
              </div>
              <div>
                <span>Careers</span>
              </div>
              <div>
                <span>UA Community</span>
              </div>
              <div>
                <span>UA Access To Sports</span>
              </div>
              <div>
                <span>Investor Relations</span>
              </div>
              <div>
                <span>Product Recalls</span>
              </div>
              <div>
                <span>Corporate Sales</span>
              </div>
              <div>
                <span>UA Newsroom</span>
              </div>
              <div>
                <span>Do Not Sell or Share My Personal Information</span>
              </div>
              <div>
                <span>Innovation Idea House</span>
              </div>
            </div>
          </div>
          <div>
            <div className={css["title"]}>UA Socials</div>
            <div className={css["socials"]}>
              <div>
                <AiOutlineInstagram /> <span>Instagram</span>{" "}
              </div>
              <div>
                <CiFacebook /> <span>Facebook</span>{" "}
              </div>
              <div>
                <TiSocialTwitterCircular /> <span>Twitter</span>
              </div>
              <div>
                <PiYoutubeLogoLight /> <span>Youtube</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
