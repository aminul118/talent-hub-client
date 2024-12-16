import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import JobPost from "../pages/JobPost/JobPost";
import MyJobs from "../pages/MyJobs/MyJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "job-post",
        element: (
          <PrivateRoute>
            <JobPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-applications",
        element: <MyJobs />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
