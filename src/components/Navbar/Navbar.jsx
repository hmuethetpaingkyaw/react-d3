import routes from "../../routes";

export default function Navbar() {
  return (
    <div className="navbar bg-blue-800 px-8 text-white">
      <div className="flex-1">
        <a className="normal-case text-xl">D3 experiments</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="pr-40">
            <details>
              <summary>Menu</summary>
              <ul className=" bg-blue-800 ">
                {routes.map((route, index) => (
                  <li key={index}>
                    <a href={route.path}>{route.name}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
