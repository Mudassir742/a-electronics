import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-top">
          <Typography className="footer-logo" variant="h3">
            A-Electro.
          </Typography>
          <p>
            A-Electro is an electronic store where you can buy all of the daily
            used used electrnoic appliances for you. Just in few clicks our
            rider will be at your door step.
          </p>
        </div>
        <div class="footer-link one">
          <div class="link-content">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-link two">
          <div class="link-content">
            <h3>Opportunity</h3>
            <ul>
              <li>
                <a href="#">Jobs</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-link three">
          <div class="link-content">
            <h3>Sitemap</h3>
            <ul>
              <li>
                <a href="#">HomePage</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-link four">
          <div class="link-content">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
