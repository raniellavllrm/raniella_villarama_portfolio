import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const SEO = ({ title, description }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <head>
                    <meta name="google-site-verification" content="hLoUkG7zEdTk7YRyYRc8SuX_agsu4T5qmzYvXAyIg3A" />
                    <html lang="en" />
                </head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        </HelmetProvider>
    )
}

export default SEO;
