import { MainLayoutContextProvider } from "@/context/LayoutContext";
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContextProvider } from '../context/AuthContext';
import '../styles/globals.css';


const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    const AnyComponent = Component as any;

    return (
        <>
            <QueryClientProvider client={queryClient}>
                    <AuthContextProvider>
                        <MainLayoutContextProvider>
                            <AnyComponent {...pageProps} />
                        </MainLayoutContextProvider>
                    </AuthContextProvider>
            </QueryClientProvider>
            <ToastContainer />
        </>
    );
}
