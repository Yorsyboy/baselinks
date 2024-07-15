import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthLayout from '../Layouts/AuthLayout/Index';
import ForgotPassword from '../Pages/Auth/ForgotPassword';
import PasswordReset from '../Pages/Auth/PasswordReset';
import EmailVerify from '../Pages/Auth/EmailVerify';
import LogIn from '../Pages/Auth/LogIn';
import SignUp from '../Pages/Auth/Signup';
import DashboardLayout from '../Layouts/DashboardLayout';
import Dashboard from '../Pages/Dashboard';
import Assessment from '../Pages/Dashboard/Assessment';
import Instructions from '../Components/Assesment/Instructions';
import Questions from '../Components/Assesment/Questions';
import Completed from '../Components/Assesment/Completed';
import Course from '../Pages/Dashboard/Course';
import MyCourse from '../Pages/Dashboard/Mycourse';
import CourseDetail from '../Pages/Dashboard/CourseDetail';
import LessonDetail from '../Pages/Dashboard/LessonDetail';
import Profile from '../Pages/Dashboard/Profile';
import Video from '../Pages/Dashboard/Video';
import StudentForum from '../Pages/Dashboard/StudentForum';
import Faq from '../Pages/Dashboard/Faq';
import HomePage from '../Pages/Home';

export const AuthRoute = {
    path: '/auth',
    element: <AuthLayout />,
    children: [
        {
            path: 'signup',
            element: <SignUp />
        },
        {
            path: 'login',
            element: <LogIn />
        }
    ]
};

export const PasswordResetRoute = {
    path: '/auth',
    children: [
        {
            path: '/auth/forgot-password',
            element: <ForgotPassword />
        },
        {
            path: '/auth/reset-password',
            element: <PasswordReset />
        },
        {
            path: '/auth/email-verify',
            element: <EmailVerify />
        }
    ]
};

export const Home = {
    path: '/',
    element: <HomePage />
};

export const User = {
    path: '/user',
    element: <DashboardLayout />,
    children: [
        {
            path: 'dashboard',
            element: <Dashboard />
        },
        {
            path: 'profile',
            element: <Profile />
        },
        {
            path: 'my-courses',
            element: <MyCourse />
        },
        {
            path: 'assessments',
            element: <Assessment />
        },
        {
            path: 'course/instruction/:id',
            element: <Instructions />
        },
        {
            path: 'courses/:id',
            element: <CourseDetail />
        },
        {
            path: 'courses/:id/course',
            element: <LessonDetail />
        },
        {
            path: 'assessment/program',
            element: <Questions />
        },
        {
            path: 'assessment/program/complete',
            element: <Completed />
        },
        {
            path: 'learning',
            element: <Course />
        },
        {
            path: 'video',
            element: <Video />
        },
        {
            path: 'forum',
            element: <StudentForum />
        },
        {
            path: 'faqs',
            element: <Faq />
        },
    ]
};
