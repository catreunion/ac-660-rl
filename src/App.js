import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"

import ActivitiesLayout from "./layouts/ActivitiesLayout"
import Activities from "./pages/activities/Activities"
import ActivityDetails from "./pages/activities/ActivityDetails"

import About from "./pages/About"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="activities" element={<ActivitiesLayout />}>
        <Route index element={<Activities />} />
        <Route path=":id" element={<ActivityDetails />} />
      </Route>

      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
