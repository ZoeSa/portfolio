// Layout.js
import Menu from '../componentes/Menu';


const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <Menu />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
