import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePageTitle = (baseTitle) => {
    const location = useLocation();

    useEffect(() => {
        const routeTitle = getRouteTitle(location.pathname);
        document.title = `${baseTitle} | ${routeTitle}`;
    }, [location, baseTitle]);
};
const getRouteTitle = (pathname) => {
    switch (pathname) {
        case '/':
            return 'Home';
        case '/blog':
            return 'Blog';
        case '/register':
            return 'Sign Up';
        case '/login':
            return 'Log In';
        case '/alltoys':
            return 'All Toys';
        case '/mytoys':
            return 'My Toys';
        case '/addtoys':
            return 'Add Toys';
        // Add more cases for other routes
        default:
            return '';
    }
};
