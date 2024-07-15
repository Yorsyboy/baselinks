import { useRoutes } from 'react-router-dom';
import { AuthRoute, PasswordResetRoute, Home, User } from './AppRoutes';

export default function Routes() {
    return useRoutes([AuthRoute, Home, PasswordResetRoute, User]);
}
