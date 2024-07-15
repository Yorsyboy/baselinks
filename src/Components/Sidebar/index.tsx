import React from 'react'; 
import SidebarLayout from './SidebarLayout';
import { useNavigate } from 'react-router-dom';
import useCurrentPath from '../../Hooks/useCurrentPath';
// import { useSelector } from 'react-redux';
import { UserAccountType } from '../../types';
import { guestSidebarLinks, adminSidebarLinks} from './data';
import { User, UserOne } from '../../Assets/Index';

const Sidebar = () => {
    const navigate = useNavigate();
    const activeLink = useCurrentPath();
    // const { 
    //     // user

    //  } = useSelector((state: any) => state.auth);

    // Check if current path contains 'admin'
    const isAdminRoute = activeLink.includes('admin');

    // Determine account type based on current path
    const accountType = isAdminRoute ? UserAccountType.ADMIN : UserAccountType.GUEST;

    // Determine sidebar links based on account type
    const sidebarLinks = accountType === UserAccountType.GUEST ? guestSidebarLinks : adminSidebarLinks;

    return (
        <div className="flex flex-col h-full justify-between">
            <div className="flex items-center justify-center mt-4 mb-4">
                <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                        src={UserOne} alt="Avatar"/>
            </div>
            <div>
                {sidebarLinks.map(({ id, title, image, url }) => (
                    <div
                        onClick={() => navigate(url)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => navigate(url)}
                        key={id}
                        className="py-[1px]"
                        style={{
                            background: url === activeLink[2]
                                ? 'linear-gradient(305deg, rgba(92,0,0,1) 24%, rgba(239,221,145,1) 100%)'
                                : '',
                        }}
                    >
                        <SidebarLayout title={title} image={image} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Sidebar;
