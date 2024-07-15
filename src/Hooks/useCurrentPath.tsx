import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useCurrentPath = () => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        const pathSegments = location.pathname.split('/');
        const firstSegment = pathSegments[1];
        setCurrentPath(firstSegment);
    }, [location]);

    return currentPath;
};

export default useCurrentPath;
