"use client";

import { useState, useEffect } from 'react';
import PageLoader from './PageLoader'; // Import your PageLoader

interface LoadingWrapperProps {
    children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false)
        };

        if (document.readyState === 'complete') {
            setIsLoading(false);
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad)
        };
    }, []);

    if (isLoading) {
        return <PageLoader />;
    }

    return <>{children}</>;
}