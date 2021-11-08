import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const SEO = ({ title, description }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        </HelmetProvider>
    )
}

export default SEO;
