import { Typography } from "@mui/material";

const CustomerFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <Typography className="footer-logo" variant="h3">
            A-Electro.
          </Typography>
          <p>
            A-Electro is an electronic store where you can buy all of the daily
            used used electrnoic appliances for you. Just in few clicks our
            rider will be at your door step.
          </p>
        </div>
        <div className="footer-link one">
          <div className="link-content">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Customers</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-link two">
          <div className="link-content">
            <h3>Opportunity</h3>
            <ul>
              <li>
                <a href="/">Jobs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-link three">
          <div className="link-content">
            <h3>Sitemap</h3>
            <ul>
              <li>
                <a href="/">HomePage</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-link four">
          <div className="link-content">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomerFooter;
