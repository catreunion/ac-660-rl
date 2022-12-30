import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
  const inactiveStyle = "text-black "
  const activeStyle = "bg-indigo-600 text-white"

  return (
    <>
      <header>
        <nav>
          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Jobarouter</h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
                Home
              </NavLink>
              <NavLink to="locations" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
                Locations
              </NavLink>
              <NavLink to="about" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
                About
              </NavLink>
              <NavLink to="help" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
                Help
              </NavLink>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
