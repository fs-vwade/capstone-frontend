import React, { useState } from 'react';

const ProgressBar = ({ completed }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
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




export default ProgressBar;
