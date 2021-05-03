import React from 'react';
import { render } from 'react-dom';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'self Monitoring',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [5, 5, 6, 7, 12, 18, 20],
        }
    ]
};

const lineOptions = {
    scales: {
        xAxes: [{
            gridLines: {
                display: true,
            },
        }],
        yAxes: [{
            // stacked: true,
            gridLines: {
                display: true,
            },
            ticks: {
                beginAtZero: true,
                // Return an empty string to draw the tick line but hide the tick label
                // Return `null` or `undefined` to hide the tick line entirely
                userCallback(value) {
                    // Convert the number to a string and splite the string every 3 charaters from the end
                    value = value.toString();
                    value = value.split(/(?=(?:...)*$)/);

                    // Convert the array to a string and format the output
                    value = value.join('.');
                    return `Score.${value}`;
                },
            },
        }],
    },
    legend: {
        display: true,
    },
    tooltips: {
        enabled: true,
    },
};


const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};



function LineChart(props) {
    return (
        <div style={styles}>
            <Line data={props.data} options={lineOptions} />
        </div>
    )
}

export default LineChart


// const LineChart = (props) => (
//     <div style={styles}>
//         <Line data={props.data} options={props.options} />
//     </div>
// );


// render(<App />, document.getElementById('root'));
