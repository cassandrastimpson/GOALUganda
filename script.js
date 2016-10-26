$(function () {
    // This otherData section is the part where you need to enter the district and group info.

    otherData = [
//         {
//             "name": "Omoro",
//             "value": 3,
//             "programs": [
//                 {
//                     "programName": "DYNAMIC",
//                     "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
//                 }
//             ]
//         },
        {
            "name": "Iganga",
            "value": 1,
            "programs": [
                {
                    "programName": "WASH - Private Sector Partners",
                    "programPartners": ['Post Bank']
                }
            ]
        },
        {
            "name": "Namayingo",
            "value": 2,
            "programs": [
                {
                    "programName": "WASH",
                    "programPartners": ['UMURDA']
                },
                {
                    "programName": "WASH - Private Sector Partners",
                    "programPartners": ['Gema Investments Ltd']
                }
            ]
        },
        {
            "name": "Bugiri",
            "value": 4,
            "programs": [
                {
                    "programName": "WASH",
                    "programPartners": ['COPISED','UMURDA']
                },
                {
                    "programName": "WASH - Private Sector Partners",
                    "programPartners": ['Gema Investments Ltd', 'Expert Concrete']
                }
            ]
        },
        {
            "name": "Kaabong",
            "value": 4,
            "programs": [
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                },
                {
                    "programName": "WASH",
                    "programPartners": ["KAPDA"]
                }
            ]
        },
        {
            "name": "Katakwi",
            "value": 2,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ['GOAL Uganda', "Innovations for Poverty Action"]
                }
            ]
        },
        {
            "name": "Bukedea",
            "value": 2,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ['GOAL Uganda', "Innovations for Poverty Action"]
                }
            ]
        },
        {
            "name": "Manafwa",
            "value": 2,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ['GOAL Uganda', "Innovations for Poverty Action"]
                }
            ]
        },
        {
            "name": "Tororo",
            "value": 2,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ['GOAL Uganda', "Innovations for Poverty Action"]
                }
            ]
        },
        {    
            "name": "Mubende",
            "value": 2,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action", "Kabarole Research & Resource Centre"]
                }
            ]
        },
        {
            "name": "Kibale",
            "value": 2,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action", "Kabarole Research & Resource Centre"]
                }
            ]
        },
        {
            "name": "Bundibugyo",
            "value": 2,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action", "Kabarole Research & Resource Centre"]
                }
            ]
        },
        {
            "name": "Kabarole",
            "value": 2,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action", "Kabarole Research & Resource Centre"]
                }
            ]
        },
        {    
            "name": "Abim",
            "value": 11,
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
                    "programPartners": ['Agrinet', 'Equator Seeds', 'Acila Enterprises Ltd','FIT Uganda', 'Farmers Center Ltd', 'Sunshine Agro-Products Ltd', 'Jolah Company Ltd']
                }
            ]
        }, 
        {
            "name": "Agago",
            "value": 13,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action", "MUCOBADI"]
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
                    "programPartners": ['Agrinet', 'Equator Seeds', 'Acila Enterprises Ltd', 'FIT Uganda', 'Farmers Center Ltd', 'Sunshine Agro-Products Ltd', 'Jolah Company Ltd']
                }
            ]
        }, 
        {
            "name": "Lamwo",
            "value": 5,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action", "MUCOBADI"]
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                }
            ]
        }, 
        {
            "name": "Pader",
            "value": 5,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action", "MUCOBADI"]
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                }
            ]
        }, 
        {  
            "name": "Kitgum",
            "value": 5,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action", "MUCOBADI"]
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                }
            ]
        },
        {
            "name": "Lira",
            "value": 5,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action", "HEPS"]
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                }
            ]
        },
        {
            "name": "Gulu",
            "value": 5,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action", "HEPS"]
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                }
            ]
         },
         {    
            "name": "Apac",
            "value": 2,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action", "HEPS"]
                }
                ]
          },
           {
                "name": "Nakaseke",
            "value": 2,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ["Innovations for Poverty Action", "HEPS"]
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
