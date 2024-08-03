import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { UserData } from "./Data";
import { Chart as ChartJS } from "chart.js/auto";

const commonLineOptions = {
    backgroundColor: "#CE5151",
    borderColor: "#CE5151",
    borderWidth: 2,
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    capBezierPoints: true,
    tension: 0.4,
    borderJoinStyle: "round",
    cubicInterpolationMode: "monotone",
    fill: false,
    lineTension: 1,
    pointBackgroundColor: "white",
    pointBorderColor: "rgba(75,192,192,1)",
    pointBorderWidth: 2,
    pointHitRadius: 10,
    pointHoverBackgroundColor: "rgba(75,192,192,0.8)",
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointHoverBorderWidth: 2,
    pointHoverRadius: 5,
    pointRadius: 0,
    pointRotation: 0,
    pointStyle: "circle",
    showLine: true,
    spanGaps: false,
    stepped: false,
};

const commonPointOptions = {
    radius: 0,
    backgroundColor: "white",
    borderColor: "rgba(75,192,192,1)",
    borderWidth: 2,
    hitRadius: 5,
    hoverRadius: 5,
    hoverBackgroundColor: "rgba(75,192,192,0.8)",
    hoverBorderColor: "rgba(220,220,220,1)",
};

function LineChart() {
    const [userData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                ...commonLineOptions,
            },
            {
                label: "Users Lost",
                data: UserData.map((data) => data.userLost),
                ...commonLineOptions,
                borderColor: "#D9D9D9",
                backgroundColor: "#D9D9D9",
            },
        ],
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                position: "top",
                align: "center",
                labels: {
                    boxWidth: 20,
                    usePointStyle: false,
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: "rgba(255,255,255,0.8)",
                titleColor: "black",
                bodyColor: "black",
                borderColor: "black",
                borderWidth: 1,
                caretSize: 5,
                cornerRadius: 6,
                displayColors: true,
                intersect: true,
                mode: "nearest",
                position: "average",
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: "Years",
                    font: {
                        family: "Arial",
                        size: 12,
                        style: "normal",
                        weight: "bold",
                    },
                    color: "#9B9999",
                },
                ticks: {
                    display: true,
                    color: "#9B9999",
                    font: {
                        family: "Arial",
                        size: 10,
                        style: "normal",
                        weight: "normal",
                    },
                },
                grid: {
                    display: true,
                    color: "#9B9999",
                    borderColor: "#9B9999",
                    borderWidth: 1,
                    drawBorder: true,
                    drawOnChartArea: true,
                    drawTicks: true,
                    tickLength: 5,
                },
            },
            y: {
                display: true,
                title: {
                    display: false,
                    text: "Users",
                    font: {
                        size: 15,
                        weight: "bold",
                    },
                    color: "#9B9999",
                },
                ticks: {
                    display: true,
                    color: "#9B9999",
                    font: {
                        size: 15,
                        weight: "normal",
                    },
                },
                grid: {
                    display: true,
                    color: "#9B9999",
                    borderColor: "#9B9999",
                    borderWidth: 1,
                    drawBorder: false,
                    drawOnChartArea: true,
                    drawTicks: false,
                    tickLength: 0,
                },
            },

        },
        elements: {
            line: commonLineOptions,
            point: commonPointOptions,
        },
        grid: {
            display: true,
            color: "#9B9999 ",
            borderColor: "#9B9999",
            borderWidth: 0,
            drawBorder: false,
            drawOnChartArea: false,
            drawTicks: true,
            borderDash: [5, 5],
            borderDashOffset: 1,
            circular: false,
        },
        tension: 0.4,
    };

    return <Line data={userData} options={options} />;
}

export default LineChart;
