import { IoLogoFirebase } from 'react-icons/io5';

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-3 rounded-md bg-gray-100 p-6 text-3xl">
      <IoLogoFirebase />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Header;
