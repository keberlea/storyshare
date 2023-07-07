// In ./components/Story.js

import React from 'react';
import { useParams } from 'react-router-dom';

const Story = () => {
    let { id } = useParams();

    return (
        <div>
            <h2>Story {id}</h2>
            {/* fetch and display story data here */}
        </div>
    );
};

export default Story;