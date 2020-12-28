import React, {useState, useEffect} from 'react';
import {useStrapi, prefixFileUrlWithBackendUrl} from 'strapi-helper-plugin';
import PropTypes from 'prop-types';

const MediaLib = ({isOpen, onChange, onToggle}) => {
    const {
        strapi: {
            componentApi: {getComponent},
        },
    } = useStrapi();

    const [data, setData] = useState(null);
    const [isDesplayed, setIsDesplayed] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsDesplayed(true);
        }
    }, [isOpen]);

    const Component = getComponent('media-library').Component;

    const handleInputChange = data => {
        if (data) {
            const {url} = data;
            setData({...data, url: prefixFileUrlWithBackendUrl(url)});
        }
    };

    const handleClosed = () => {
        if (data) {
            onChange(data);
        }
        setData(null);
        setIsDesplayed(false);
    };

    if (Component && isDesplayed) {
        return (
            <Component
                allowedTypes={['images', 'videos', 'files']}
                isOpen={isOpen}
                multiple={false}
                noNavigation
                onClosed={handleClosed}
                onInputMediaChange={handleInputChange}
                onToggle={onToggle}
            />
        );
    } else return null;
};

export default MediaLib;
