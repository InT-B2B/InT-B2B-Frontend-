import { useMutation } from "@tanstack/react-query"; 
import { useEffect, useState } from "react";
import { authorizeToken } from "@/http/auth";


const useIsAuthenticated = () => {
    const [authenticatedState, setAuthenticatedState] = useState<boolean>();

    const { mutate } = useMutation(authorizeToken, {
        onSuccess: (res) => {
            if (res.status === 200) {
                console.log(res, "Authenticated User")
                setAuthenticatedState(true);
                return true;
            }
        },
        onError : (error: any) => {
            console.error("Error:", error);
            console.log("Not Authenticated")
            if (error.status === 401 || error.status === 400) {
                setAuthenticatedState(false);
                return false;
            }
        },
    });

    useEffect(() => {
        let token = '';

        if (typeof window !== 'undefined') {
            token = localStorage.getItem('accessToken') as string;
        }

        mutate({ token: token as string});
    }, []);

    return { mutate, authenticatedState };
};

export default useIsAuthenticated;