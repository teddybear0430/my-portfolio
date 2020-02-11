import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

import { chartData,options } from '../../chart_data/data.js';
import '../../styles/skills.scss';

const Skills = ({ skills }) => {
    return (
        <section id="Skills">
            <div className="container">
                <h2 className="heading">Skills</h2>
                <HorizontalBar data={chartData} options={options} />
                <div dangerouslySetInnerHTML={{ __html: skills }} />
            </div>
        </section>
    );
}

export default Skills;
