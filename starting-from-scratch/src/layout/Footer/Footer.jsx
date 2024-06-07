import styles from "./Footer.module.css";

const URL_PREFIX = "https://docs.github.com/ko/site-policy";

const footerItems = [
  {
    title: "Terms",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: "Privacy",
    link: `${URL_PREFIX}/privacy-policies/github-general-privacy-statement`,
  },
  {
    title: "Security",
    link: "https://github.com/security",
  },
  {
    title: "Status",
    link: "https://www.githubstatus.com/",
  },
  {
    title: "Docs",
    link: "https://docs.github.com/ko",
  },
  {
    title: "Contact",
    link: "https://support.github.com/?tags=dotcom-footer",
  },
];

const Footer = () => {
  return (
    <ul className={styles.footer}>
      {footerItems.map(({ link, title }, idx) => (
        <li key={idx} className={styles.item}>
          <a className={styles.link} href={link}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Footer;
