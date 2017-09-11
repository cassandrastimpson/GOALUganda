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
            "name": "Namayingo",
            "value": 4,
            "programs": [
                {
                    "programName": "WASH",
                    "programPartners": []
                },
                {
                    "programName": "WASH - Private Sector Partners",
                    "programPartners": ['Gema Investments Ltd', 'Expert Concrete', 'Post Bank']
                }
            ]
        },
        {
            "name": "Bugiri",
            "value": 4,
            "programs": [
                {
                    "programName": "WASH",
                    "programPartners": ['GOAL Field Office']
                },
                {
                    "programName": "WASH - Private Sector Partners",
                    "programPartners": ['Gema Investments Ltd', 'Expert Concrete', 'Post Bank']
                }
            ]
        },
        {
            "name": "Kaabong",
            "value": 4,
            "programs": [
                {
                    "programName": "GOAL Field Office",
                    "programPartners": []
                },
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
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ['GOAL Uganda']
                }
            ]
        },
        {
            "name": "Bukedea",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ['GOAL Uganda']
                }
            ]
        },
        {
            "name": "Manafwa",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ['GOAL Uganda']
                }
            ]
        },
        {
            "name": "Tororo",
            "value": 1,
            "programs": [
                {
                    "programName": "ACT Health",
                    "programPartners": ['GOAL Uganda']
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
            "value": 11,
            "programs": [
                {
                    "programName": "GOAL Field Office",
                    "programPartners": []
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                },
                {
                    "programName": "Livelihoods - Private Sector Partners",
                    "programPartners": ['Agrinet', 'Alito', 'Aryodi', 'The HIVE', 'Mukusu Motors', 'Equator Seeds', 'Acila Enterprises','FIT Uganda', 'Farmers Center Ltd', 'Sunshine Agro-Products', 'Jolah']
                }
            ]
        },
        {
            "name": "Agago",
            "value": 13,
            "programs": [
                {
                    "programName": "GOAL Field Office",
                    "programPartners": []
                },
                {
                    "programName": "ACT Health",
                    "programPartners": ["MUCOBADI"]
                },
                {
                    "programName": "DYNAMIC",
                    "programPartners": ['Restless Development', 'Mercy Corps', 'VSO']
                },
                {
                    "programName": "Livelihoods - Private Sector Partners",
                    "programPartners": ['Agrinet', 'Alito', 'Aryodi', 'The HIVE', 'Mukusu Motors', 'Equator Seeds', 'Acila Enterprises', 'FIT Uganda', 'Farmers Center Ltd', 'Sunshine Agro-Products', 'Jolah']
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
                    "programName": "GOAL Field Office",
                    "programPartners": []
                },
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
            text : 'GOAL Uganda and Partner Organizations'
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
                    var text = "<b>" + program.programName + "</b>";

                    if (program.programPartners.length > 0) {
                        text = text + "<br />- " + program.programPartners.join("<br />- ");
                    }

                    return text;
                }).join("<br />")
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
                    this.renderer.image('Where We Work.jpg', 100, 191, 180, 40).add();
                }
            }
        },
    });
});
