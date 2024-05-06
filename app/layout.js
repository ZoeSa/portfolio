// Layout.js
import Menu from '../componentes/Menu';
import styles from '../Styles/global.module.css';

const Layout = ({ children }) => {
  return (
    <html>
      <body className={styles.backgroundBody}>
        <Menu/>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
