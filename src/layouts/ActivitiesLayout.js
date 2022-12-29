import { Outlet } from "react-router-dom"

const ActivitiesLayout = () => {
  return (
    <>
      <h2>
        Go running.
        <span role="img" aria-label="rocket">
          🏃‍♂️
        </span>
      </h2>

      <Outlet />
    </>
  )
}

export default ActivitiesLayout
