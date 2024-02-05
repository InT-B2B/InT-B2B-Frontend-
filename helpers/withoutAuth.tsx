import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useIsAuthenticated from "@/hooks/useIsAuthenticated";
import Loader from "@/components/ui/Loader";

const withoutAuth = <P extends { children: React.ReactNode }>(WrappedComponent: React.ComponentType<p>) => {
    const Wrapper: React.FC<P> = (props) => {
        const [isPageLoading, setIsPageLoading] = useState(true)
        const router = useRouter();
        const { authenticatedState } = useIsAuthenticated();

        useEffect(() => {
            if (authenticatedState) {
                router.replace('/');
            }
            setIsPageLoading(false);
        }, []);

        if (isPageLoading) {
            return (
                <div className="flex items-center justify-center h-screen">
                    <Loader />
                </div>
            );
        }

        const WrappedComponentInstance = React.createElement(WrappedComponent, props);
        return WrappedComponentInstance;
    };

    return Wrapper;
};

export default withoutAuth;