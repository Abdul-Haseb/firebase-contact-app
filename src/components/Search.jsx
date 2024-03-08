import { FaPlus } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

const Search = () => {
  return (
    <div className="mt-5 flex items-center gap-4">
      <div className="relative flex-1">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Contact..."
          className="bg-customGray h-10 w-full rounded-md border py-2 pl-8 text-white outline-none"
        />
        <IoSearchOutline className="absolute left-1 top-2 text-2xl text-white" />
      </div>
      <button className="rounded-full bg-white p-4">
        <FaPlus />
      </button>
    </div>
  );
};

export default Search;
