export default function FooterDate() {
  // set date in footer
  const footerDate = new Date();
  const currentYear = footerDate.getFullYear().toString();

  return (
    <p className="copyright">
      &copy;{" "}
      <time id="footer__date" dateTime={currentYear}>
        {currentYear}
      </time>{" "}
      — Kyle Masuga
    </p>
  );
}
