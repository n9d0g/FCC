import React from 'react';

interface Props {
    text: string
}

var statements = {
    'vision': 'VISION: a Christ-centred, Holy Spirit-led community committed to the building of strong relationships and planting of healthy reproducing churches.',
    'mission': 'MISSION: to introduce and represent Christ through our nurturing small group-driven ministries in the community.'
}

export const Statements: React.FC<Props> = ( {text} ) => {
    let statement: string = "empty";
    if (text === 'vision') {
        statement = statements.vision;
    }
    else if (text === 'mission') {
        statement = statements.mission;
    }

    return (
        <div>{statement}</div>
    );
}