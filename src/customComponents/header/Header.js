import Navlink from "../../components/Navlink/Navlink";
import styles from "./Header.module.css";
import miratsLogo from "../../assets/miratsLogo.png";
import Avatar from "../../components/Avatar/Avatar";

const Header = () => {
  return (
    <>
      <div className={styles.header_container}>
        <header>
          <div className={styles.header_left}>
            <img src={miratsLogo} alt="" />
            <nav>
              <Navlink to="/">Dashboard</Navlink>
              <Navlink to="/rfqs">RFQs</Navlink>
              <Navlink to="/project">Project</Navlink>
              <Navlink to="/report-log">Reports</Navlink>
              <Navlink to="/support-hub">Support</Navlink>
              <Navlink to="/user-guid">User Guid</Navlink>
            </nav>
          </div>
          <div className={styles.header_right}>
            <Avatar size="md" type="text" variant="primary">
              KS
            </Avatar>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
