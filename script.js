$(function () {
    // This otherData section is the part where you need to enter the district and group info.

    otherData = [
        // {
        //     "name": "Lamwo", // District Name: Check on rendered map to make sure the spelling matches
        //     "value": 5,      // value: # of groups in this district
        //     "groupNames": ['Drew', 'Cassandra', 'Beef', 'Pork', 'Veggies'] // Names of groups operating
        // },   // these sections are comma-separated
        // {
        //     "name": "Gulu",
        //     "value": 3,
        //     "groupNames": ['Call', 'Me', 'Ishmael']
        // },
        {
            "name": "Lira",
            "value": 4,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["HEPS"]
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                }
            ]
        },
        {
            "name": "Nakaseke",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["HEPS"]
                }
            ]
            // "groupNames": ['ACT HEALTH:', 'HEPS']
        }
        // {
        //     "name": "Kaabong",
        //     "value": 20,
        //     "groupNames": ['Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F', 'Group G', 'Group H', 'Group I', 'Group J', 'Group K', 'Group L', 'Group M', 'Group N', 'Group O', 'Group P', 'Group Q', 'Group R', 'Group S', 'Group T', 'Group U', 'Group V', 'Group W', 'Group X', 'Group Y', 'Group Z']
        // }   // no comma after the last section
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Where We Work'
        },

        subtitle : {
            text: 'GOAL Uganda and Partner Organizations'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0,
            maxColor: '#0d5e2d'
        },

        tooltip: {
            formatter: function() {
                return $.map(this.point.programs, function(program) {
                    return "<b>" + program.programName + "</b><br />- " + program.programPartners.join("<br />- ") + "<br />";
                })
            }
        },

        series : [{
            // data : data,
            data : otherData,
            mapData: Highcharts.maps['countries/ug/ug-all'],
            // joinBy: 'hc-key',
            joinBy: 'name',
            name: 'Groups:',
            states: {
                hover: {
                    // color: '#000000'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
