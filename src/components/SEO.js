import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const SEO = ({ title, description }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="google-site-verification" content="hLoUkG7zEdTk7YRyYRc8SuX_agsu4T5qmzYvXAyIg3A" />
            </Helmet>
        </HelmetProvider>
    )
}

export default SEO;
