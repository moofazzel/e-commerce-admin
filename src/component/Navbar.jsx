import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="container flex items-center justify-between py-5">
        <div>
          <a className="text-3xl font-bold" href="/">
            Daroz
          </a>
        </div>

        <ul className="flex items-center gap-5 text-lg font-semibold ">
          <li className="py-1 cursor-pointer hover:border-[#f54749] hover:border-b-4">
            <Link href="/">Home</Link>
          </li>
        </ul>
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="cursor-pointer hover:bg-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="#f54749"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <Link href={"/cart"} className="btn bg-[#f54749] p-10">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
