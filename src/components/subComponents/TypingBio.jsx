// import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingBio = () => {
    return (
        <>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Born to be a JS inhaler',
                    1000,
                    'Multi Stack specialized',
                    1000,
                    'Bound with to be passionate',
                    1000,
                ]}
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
            />

        </>
    );
};

export default TypingBio;