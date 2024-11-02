// components/Navbar.tsx
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Importing CSS module

interface NavbarProps {
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  const pathname = usePathname(); // Get the current path
  const [token, setToken] = useState(localStorage.getItem('token')); 

const onLogout = ()=>{
  localStorage.removeItem('token');
  setToken('');
}
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link href="/" className={styles.navbar__brand}>Library System</Link>
      </div>
      <ul className={styles.navbar__links}>
        <li className={pathname === "/" ? styles.active : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/books" ? styles.active : ""}>
          <Link href="/books">Books</Link>
        </li>
        <li className={pathname === "/authors" ? styles.active : ""}>
          <Link href="/authors">Authors</Link>
        </li>
        {!token && <li className={pathname === "/login" ? styles.active : ""}>
          <Link href="/login">Login</Link>
        </li>}
        {!token && <li className={pathname === "/register" ? styles.active : ""}>
          <Link href="/register">Register</Link>
        </li>}
        {!!token && <li>
          <button className={styles.navbar__logout} onClick={onLogout}>
            Logout
          </button>
        </li>}
      </ul>
    </nav>
  );
};

export default Navbar;
