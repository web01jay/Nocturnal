/* This example requires Tailwind CSS v2.0+ */
import react from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="customHeader text-center">
        <Link to="/" >Header</Link>
        <Link to="/about">About</Link>
    </header>
  )
}
export default Header;