import React, { useState } from 'react';

const ProgressBar = ({ completed }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev = [...prev, progress]) => {
                if (prevProgress >= completed) {
                    clearInterval(interval);
                    return completed;
                }
                return prevProgress + 1;
            });
        }, 10);

        return () => clearInterval(interval);
    }, [completed]);
}

const containerStyles = {
    height: 15,
    width: '100%',
    backgroundColor: 'color: light blue',
    borderRadius: 4,
    margine: 45,
};

const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor:  'color: white',
    borderRadius: 'inherit',
    textAlign: 'center',
    transition: 'width 1s ease-in-out'
};

return (
    <div style={containerStyles}>
        <div style={fillerStyles}>
            <span style={{ color: 'gray', paddingRight: '8px' }}>{`${progress}%`}</span>
        </div>
    </div>
);

export default ProgressBar;
