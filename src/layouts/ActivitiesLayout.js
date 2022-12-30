import { Outlet } from 'react-router-dom'

const ActivitiesLayout = () => {
  return (
    <>
      <div className="space-y-5 pb-9 text-center sm:space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">🏃‍♂️</h2>
        <p className="text-xl text-gray-500">{`Keep normal life in the times of madness and non-sense.`} </p>
      </div>

      <Outlet />
    </>
  )
}

export default ActivitiesLayout
