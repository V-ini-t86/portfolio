import { Link } from 'react-router';

// NavBar Component
const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">Vinit</div>
        <ul className="flex space-x-6">
          {['Home', 'Skills', 'Work', 'Education', 'Achievements', 'Contact'].map((item) => (
            <li key={item}>
              <Link to={`#${item.toLowerCase()}`} className="hover:text-blue-600">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;