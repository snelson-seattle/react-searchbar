import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      return setSearchResults(posts);
    }

    const results = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );

    setSearchResults(results);
  };

  return (
    <header className="mt-4">
      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex items-stretch w-full mb-4">
            <input
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              type="text"
              id="search"
              onChange={handleSearchChange}
            />
            <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
