import ScrollToTop from "./ScrollToTop";
import PropTypes from "prop-types";

export default function Layout({children}) {
  return (
    <div>
      <main>{children}</main>
      <ScrollToTop />
    </div>
  );
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};