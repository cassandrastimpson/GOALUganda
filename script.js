$(function () {
    // This otherData section is the part where you need to enter the district and group info.

    otherData = [
        {
            "name": "Kawakwi",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action"]
                }
            ]
        },
        {
            "name": "Bukedea",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action"]
                }
            ]
        },
        {
            "name": "Manafwa",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action"]
                }
            ]
        },
        {
            "name": "Tororo",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action"]
                }
            ]
        },
        {    
            "name": "Mubende",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Kabarole Research & Resource Centre"]
                }
            ]
        },
        {
            "name": "Kibale",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Kabarole Research & Resource Centre"]
                }
            ]
        },
        {
            "name": "Bundibugyo",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Kabarole Research & Resource Centre"]
                }
            ]
        },
        {
            "name": "Kabarole",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Kabarole Research & Resource Centre"]
                }
            ]
        },
        {    
            "name": "Abim",
            "value": 9,
            "programs": [
                {
                    "programName": "WASH",
                    "programPartners": ["MUCOBADI"]
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                },
                {
                    "programName": "Livelihoods - Private Sector Partners",
                    "programPartners": ['Acila Enterprises Ltd','FIT Uganda', 'Farmers Center Ltd', 'Sunshine Agro-Products Ltd', 'Jolah Company Ltd']
                }
            ]
        }, 
        {
            "name": "Agago",
            "value": 9,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["MUCOBADI"]
                },
                {
                    "programName": "WASH",
                    "programPartners": ["Wagwoke Wunu"]
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                },
                {
                    "programName": "Livelihoods - Private Sector Partners",
                    "programPartners": ['FIT Uganda', 'Farmers Center Ltd', 'Sunshine Agro-Products Ltd', 'Jolah Company Ltd']
                }
            ]
        }, 
        {
            "name": "Lamwo",
            "value": 4,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["MUCOBADI"]
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                }
            ]
        }, 
        {
            "name": "Pader",
            "value": 4,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["MUCOBADI"]
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                }
            ]
        }, 
        {  
            "name": "Kitgum",
            "value": 4,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["MUCOBADI"]
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                }
            ]
        },
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
            "name": "Gulu",
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
            "name": "Apac",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["HEPS"]
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
            data : otherData,
            mapData: Highcharts.maps['countries/ug/ug-all'],
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
        }],
        chart: {
            renderTo: 'container',
            events: {
                load: function() {
                    this.renderer.image('GOAL_Logo.png', 0, 80, 312, 120).add();
                }
            }
        },
    });
});
