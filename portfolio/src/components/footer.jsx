// @ts-nocheck
import { Link } from "react-router-dom";

import { social_links } from "../utils/basic_utils";

const Footer = () => {
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p>
          © 2024 <strong>Rishi Karan Reddy</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {social_links.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.icon_url}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
