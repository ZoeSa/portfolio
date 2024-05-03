// Menu.js
import Link from 'next/link';
import styles from '../Styles/menu.module.css'

const Menu = () => {
  return (
    <nav  className={styles.nav}>
      <ul>
        <li><Link href="#inicio" >Inicio</Link></li>
        <li><Link href="#programacion">Programación</Link></li>
        <li><Link href="#diseno">Diseño</Link></li>
        <li><Link href="#sobre-mi">Sobre mí</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
