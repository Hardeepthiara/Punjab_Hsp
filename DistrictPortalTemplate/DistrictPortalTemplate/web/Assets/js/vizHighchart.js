/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {


    $("#summaryBtn").click(function() {

        $('#genderRatio').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
                backgroundColor: '#efefef'
            },
            title: {
                text: 'Gender Ratio',
                align: 'left',
                verticalAlign: 'middle',
                y: -30,
                style: {
                    fontSize: '13px'
                }

            },
            credits: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        formatter: function() {
                            return Highcharts.numberFormat(this.y, 0, "", ",");
                        },
                        distance: 1,
                        style: {
                            fontSize: '10px',
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                            textShadow: '0px 1px 2px white',
                            "fontWeight": "normal"
                        },
                        zIndex: 20,
                        padding: 0,
                        format: '{point.name} :<br> {point.percentage:.1f}%',
                        allowOverlap: false,
                        verticalAlign: 'top'

                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '110%']
                }
            },
            series: [{
                    type: 'pie',
                    name: 'Gender Ratio',
                    innerSize: '50%',
                    data: [
                        ['Male', 50.9],
                        ['Female', 49.1],
                        {
                            name: 'Proprietary or Undetectable',
                            y: 0.5,
                            dataLabels: {
                                enabled: false
                            }
                        }
                    ]
                }]
        });


        $('#RuralUrbanRatio').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
                backgroundColor: '#fefefe'
            },
            title: {
                text: 'Rural / Urban<br>Ratio',
                align: 'left',
                verticalAlign: 'middle',
                y: -30,
                style: {
                    fontSize: '13px'
                }

            },
            credits: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        distance: 1,
                        style: {
                            fontSize: '10px',
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                            textShadow: '0px 1px 2px white',
                            "fontWeight": "normal"
                        },
                        zIndex: 20,
                        padding: 0,
                        format: '{point.name} :<br> {point.percentage:.1f}%',
                        allowOverlap: false,
                        verticalAlign: 'top'

                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '110%']
                }
            },
            series: [{
                    type: 'pie',
                    name: 'Rural / Urban Ratio',
                    innerSize: '50%',
                    data: [
                        ['Rural', 31.2],
                        ['Urban', 68.5],
                        {
                            name: 'Proprietary or Undetectable',
                            y: 0.5,
                            dataLabels: {
                                enabled: false
                            }
                        }
                    ]
                }]
        });


        $('#litracyRatio').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
                backgroundColor: '#efefef'
            },
            title: {
                text: 'Literacy Rate',
                align: 'left',
                verticalAlign: 'middle',
                y: -30,
                style: {
                    fontSize: '13px'
                }

            },
            credits: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        distance: 1,
                        style: {
                            fontSize: '10px',
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                            textShadow: '0px 1px 2px white',
                            "fontWeight": "normal"
                        },
                        zIndex: 20,
                        padding: 0,
                        format: '{point.name} :<br> {point.percentage:.1f}%',
                        allowOverlap: false,
                        verticalAlign: 'top'

                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '110%']
                }
            },
            series: [{
                    type: 'pie',
                    name: 'Literacy Rate',
                    innerSize: '50%',
                    data: [
                        ['Literate', 73.4],
                        ['Illitrate', 26.6],
                        {
                            name: 'Proprietary or Undetectable',
                            y: 0.5,
                            dataLabels: {
                                enabled: false
                            }
                        }
                    ]
                }]
        });

        $('#religionRatio').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
                backgroundColor: '#fefefe'
            },
            title: {
                text: 'Religion Ratio',
                align: 'left',
                verticalAlign: 'middle',
                y: -30,
                style: {
                    fontSize: '13px'
                }

            },
            credits: {
                enabled: false
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        distance: 1,
                        style: {
                            fontSize: '10px',
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                            textShadow: '0px 1px 2px white',
                            "fontWeight": "normal"
                        },
                        zIndex: 20,
                        padding: 0,
                        format: '{point.name} :<br> {point.percentage:.1f}%',
                        allowOverlap: false,
                        verticalAlign: 'top'

                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '110%']
                }
            },
            series: [{
                    type: 'pie',
                    name: 'Religion Ratio',
                    innerSize: '50%',
                    data: [
                        ['Hindu', 1408801],
                        ['Muslim', 70842],
                        ['Christian', 9725],
                        ['Sikh', 15097],
                        ['Buddhist', 944],
                        ['Jain', 7451],
                        ['Religion not stated', 1318],
                        ['Other', 254],
                        {
                            name: 'Proprietary or Undetectable',
                            y: 0.5,
                            dataLabels: {
                                enabled: false
                            }
                        }
                    ]
                }]
        });


    });

});

function showsoilChart() {
    // Make monochrome colors and set them as default for all pies
//    Highcharts.getOptions().plotOptions.pie.colors = (function() {
//        var colors = [],
//                base = Highcharts.getOptions().colors[2],
//                i;
//
//        for (i = 0; i < 10; i += 1) {
//            // Start out with a darkened base color (negative brighten), and end
//            // up with a much brighter color
//            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
//        }
//        return colors;
//    }());

    // Build the chart
    $('#soilchartinner').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Types of Soil'
        },
        tooltip: {
            pointFormat: '{name}{point.percentage:.1f}%'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return Highcharts.numberFormat(this.y, 0, "", ",");
                    },
                    format: '{point.name}: <b>{point.percentage:.1f} %</b>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                        fontWeight: "normal"
                    }
                }
            }
        },
        series: [{
                name: "Soil",
                data: [
                    
                    {name: "Kandi Soils", y: 70.0},
                    {name: "Reddish Chestnut Soil", y: 30.0}
                ]
            }]
    });
}

function showRainfallChart() {
    $('#rainfallChartinner').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Rainfall'
        },
        credits: {
            enabled: false
        },
        xAxis:
                [{
                        categories: ['SW monsoon (June-Sep)', 'NE Monsoon(Oct-Dec)', 'Winter (Jan-March)', 'Summer (April-May)'],
                        crosshair: true
                    }
                 ],
        yAxis: [{// Primary yAxis                
                gridLineWidth: 0,
                title: {
                    text: 'Rainfall',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value} mm',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true,
                            formatter: function() {
                            return Highcharts.numberFormat(this.y, 0, "", ",");
                        }
                        }
                    }
                },
                credits: {
                    enabled: false
                }

            }],
//        tooltip: {
//            shared: true,
//             formatter: function() {
//                        return Highcharts.numberFormat(this.y,0,"",",");
//                    }
//
//        },
        series: [{
                name: 'Rainfall',
                type: 'column',
                data: [619.9, 24.9, 42.1, 45.6],
                tooltip: {
                    valueSuffix: ' mm'
//                    font-weight:'',
                }

            }]
    });
}

function showCropChart() {

    $('#cropChartinner').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Major Crops'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: ['Sugarcane', 'Paddy', 'Maize', 'Potato']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total crop production Area(000 ha)'
            }
        },
        legend: {
            reversed: true
        },
         tooltip: {
            headerFormat:'{point.x} :',
             pointFormat: '{point.y}',
            valueSuffix: ''
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            },
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return Highcharts.numberFormat(this.y, 0, "", ",");
                }

            }
        },
        series: [{
                name: 'Kharif',
                data: [0, 2.1, 0, 85.144]
            }, {
                name: 'Rabi',
                data: [65, 0, 1.29, 0]
            }]
    });
}

function showirrigation() {

    $('#irrigationCharinner').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Sources of Irrigation'
        },
        tooltip: {
            pointFormat: '{name} <b>{point.percentage:.1f}%</b>'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                        fontWeight: "normal"
                    }
                }
            }
        },
        series: [{
                name: "Irrigation",
                data: [
                    {name: "Dams", y: 1.3},
                    {name: "Borewell", y: 98.7}
                ]
            }]
    });
}

function showHorticulture() {
    $('#horticultureCharinner').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Horticulture Crops'
        },
        xAxis: {
            categories: ['Kinnow', 'Peas', 'Mango', 'Guava', 'Carrot'],
            title: {
                text: "Horticulture crops"
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total crop production Area(000 ha)'
            },
            labels: {
                overflow: 'justify'
            }
        },
         tooltip: {
            headerFormat:'{point.x}: ',
             pointFormat: '{point.y}',
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
                name: 'horticulture',
                data: [1.7, 2.1, 1.1, 0.5, 0.3]
            }]
    });
}

function  showLivestock() {
    $('#livestockCharinner').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Livestock'
        },
        xAxis: {
            categories: ['Buffaloes', 'Cow', 'Goat', 'Sheep'],
            title: {
                text: "Livestock type"
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Population (000)'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            headerFormat:'{point.x}: ',
             pointFormat: '{point.y}',
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
                name: 'Livestock',
                data: [248632, 160162, 17392, 1255]
            }]
    });
}