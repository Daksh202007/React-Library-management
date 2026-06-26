

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-900 px-6 py-4 shadow-lg">
      <div className="text-xl font-bold tracking-wide">bookHaven</div>
      <div className="flex items-center gap-2 rounded-full bg-slate-800 px-3 py-2">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search books"
          className="bg-transparent text-sm outline-none"
        />
        <button className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium hover:bg-blue-500">
          Search
        </button>
      </div>
    </nav>
  )
}

export default Navbar