import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FindTutors from "../pages/FindTutors/FindTutors";
import FindTutorsByCategory from "../pages/FindTutors/FindTutorsByCategory";
import ProtectedRoute from "../components/ProtectedRoute";
import TutorDetails from "../pages/TutorDetails/TutorDetails";
import AddTutorials from "../pages/AddTutorials/AddTutorials";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import UpdateTutorial from "../pages/UpdateTutorial/UpdateTutorial";
import MyBookedTutors from "../pages/MyBookedTutors/MyBookedTutors";
import DashboardLayout from "../layouts/DashboardLayout";
import OurApp from "../pages/OurApp/OurApp";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'find-tutors',
                Component: FindTutors
            },
            {
                path: 'find-tutors/:category',
                Component: FindTutorsByCategory
            },
            {
                path: 'our-app',
                Component: OurApp
            }
        ]
    },
    {
        path: '/',
        element:
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>,
        errorElement: <NotFound />,
        children: [
            {
                path: 'tutor/:details',
                Component: TutorDetails
                // loader: tutorDetailsLoader,
            },
            {
                path: 'add-tutorials',
                Component: AddTutorials
            },
            {
                path: 'my-tutorials',
                Component: MyTutorials
            },
            {
                path: 'update-tutorial/:id',
                Component: UpdateTutorial
            },
            {
                path: 'my-booked-tutors',
                Component: MyBookedTutors
            }
        ]
    }
])
