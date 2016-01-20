export default {
    steps: [
        {
            text: "Go to Sydney, Australia."
        },
        {
            text: "Find Sydney Airport by the Botany Bay."
        },
        {
            text: "Find the point where Airport Drive crosses the North Pond.",
            answer: {
                type: 'latLng',
                value: {
                    lat: -33.92639828837397,
                    lng: 151.1751902103424
                }
            }
        },
        {
            text: "Go to the spot where the pond connects into the Alexandra Canal and follow it northwest until you come across the <em>second bridge</em>.",
            answer: {
                type: 'latLng',
                value: {
                    lat: -33.920161993523735,
                    lng: 151.17934226989746
                }
            }
        },
        {
            text: "Get up onto the bridge, follow the road northwest and stop at the axe-throwing venue.",
            answer: {
                type: 'latLng',
                value: {
                    lat: -33.913234096554376,
                    lng: 151.172596514225
                }
            }
        },
        {
            text: "Go into the alley and keep straight on until you come back out on the road, then head southeast until you see a building with this shape on the left-hand side:",
            image: '01-01',
            answer: {
                type: 'latLng',
                value: {
                    lat: -33.91374049203933,
                    lng: 151.17481470108032
                }
            }
        },
        {
            text: "From here, fly across the map directly eastward and keep going until there's a church right below you.",
            answer: {
                type: 'latLng',
                value: {
                    lat: -33.91367371478497,
                    lng: 151.17696046829224
                }
            }
        },
        {
            text: "Walk across the street to the McDonald's.",
            answer: {
                type: 'latLng',
                value: {
                    lat: -33.914352614432644,
                    lng: 151.17797166109085
                }
            }
        },
        {
            text: "Across the parking lot, there's a hotel. What kind of bird is part of its name?",
            answer: {
                type: 'string',
                value: 'ibis'
            }
        },
        {
            text: "Get onto the highway and follow it northeast until you can see the railway station on your left.",
            answer: {
                type: 'latLng',
                value: {
                    lat: -33.90721388104591,
                    lng: 151.1807182431221
                }
            }
        },
        {
            text: "Board the train going northeast and get off at the second stop. Head over to the police station on your right.",
            answer: {
                type: 'latLng',
                value: {
                    lat: -33.8919371648134,
                    lng: 151.19988530874252
                }
            }
        },
        {
            text: "Passing the south side of the police station is the street that the railway station you just got off from is named after. Follow it east until you can go no further, then head left and keep going that way until you come across a checkerboard pattern on the road.",
            answer: {
                type: 'latLng',
                value: {
                    lat: -33.89180134961242,
                    lng: 151.21053367853165
                }
            }
        },
        {
            text: "Immediately to the east of here, there's a shopping mall. What's the first word in its name?",
            answer: {
                type: 'string',
                value: 'surry'
            }
        }
    ]
};
