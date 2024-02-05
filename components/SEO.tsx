import Head from "next/head";
import React from "react";
import logo from '../public/assets/images/logo/INT_logo.png';

const SEO = ({ title, description, image, url }) => {
    return (
        <Head>
            <title>{title} U2R Technologies</title>
            <meta name="description" content={description} />
            <meta name="og:title" content= {title} />
            <meta name="og:description" content={description} />
            <meta name="og:image" content={image} />
            <meta name="og:url" content={url} />
        </Head>
    );
};

export default SEO;