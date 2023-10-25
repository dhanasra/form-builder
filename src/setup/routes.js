import AuthCallbackPage from "../pages/auth/AuthCallbackPage";
import FormListPage from "../pages/dashboard/formList/FormListPage";
import ProfilePage from "../pages/dashboard/profile/ProfilePage";
import ReportsPage from "../pages/dashboard/reports/ReportsPage";
import SettingsPage from "../pages/dashboard/settings/SettingsPage";
import FormBuilder from "../pages/formBuilder/FormBuilder";
import SigninPage from "../pages/signin/SigninPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: LandingPage } = require("../pages/landing/LandingPage");

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/signin',
        element: <SigninPage/>
    },
    {
        path: '/auth/callback',
        element: <AuthCallbackPage/>
    },
    {
        path: '/forms',
        element: <FormListPage/>
    },
    {
        path: '/form/builder',
        element: <FormBuilder/>
    },
    
    {
        path: '/profile',
        element: <ProfilePage/>
    },
    {
        path: '/settings',
        element: <SettingsPage/>
    },
    {
        path: '/reports',
        element: <ReportsPage/>
    }
])

export default router;