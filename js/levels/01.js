export default {
    steps: [
        {
            text: "Go to Sydney, Australia."
        },
        {
            text: "Find Sydney Airport by the Botany Bay."
        },
        {
            text: "Find the point where Airport Drive <em>crosses</em> the North Pond.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: -33.926295911773224, lng: 151.17511242628098},
                    {lat: -33.9262870094543, lng: 151.17525726556778},
                    {lat: -33.926493988128605, lng: 151.17527335882187},
                    {lat: -33.92650511600008, lng: 151.17511242628098}
                ]
            }
        },
        {
            text: "Go to the spot where the pond connects into the Alexandra Canal and follow it northwest until you come across the <em>second bridge</em>.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: -33.92012638167841, lng: 151.17902040481567},
                    {lat: -33.91996167670018, lng: 151.1791491508484},
                    {lat: -33.920224314217236, lng: 151.17968559265137},
                    {lat: -33.920384567219756, lng: 151.1795675754547}
                ]
            }
        },
        {
            text: "Get up onto the bridge, follow the road northwest and stop at the <em>axe-throwing venue</em>.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: -33.9132174021465, lng: 151.17254421114922},
                    {lat: -33.913320907422644, lng: 151.17256566882133},
                    {lat: -33.9131895781261, lng: 151.17275208234787},
                    {lat: -33.91312502636377, lng: 151.17268100380898}
                ]
            }
        },
        {
            text: "Go into the alley and keep straight on until you come back out on the road, then head southeast until you see a <em>building with this shape</em> on your left:",
            image: '01-01',
            answer: {
                type: 'latLng',
                value: [
                    {lat: -33.913756073391134, lng: 151.17473289370537},
                    {lat: -33.913680948990056, lng: 151.17484085261822},
                    {lat: -33.91373103193147, lng: 151.17489114403725},
                    {lat: -33.913792244375465, lng: 151.17480732500553},
                    {lat: -33.91381227752939, lng: 151.17482475936413},
                    {lat: -33.91382897182075, lng: 151.17480129003525}
                ]
            }
        },
        {
            text: "From here, fly across the map directly eastward and keep going until there's a <em>church</em> right below you.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: -33.913634761362445, lng: 151.1767103523016},
                    {lat: -33.913585234842365, lng: 151.17677338421345},
                    {lat: -33.91356798402524, lng: 151.17675863206387},
                    {lat: -33.913500093678785, lng: 151.17685854434967},
                    {lat: -33.913512892682654, lng: 151.176875308156},
                    {lat: -33.91349564185089, lng: 151.1769101768732},
                    {lat: -33.91354238603212, lng: 151.17695979773998},
                    {lat: -33.91353181294575, lng: 151.1769825965166},
                    {lat: -33.91357633119525, lng: 151.17702886462212},
                    {lat: -33.9136119457781, lng: 151.1769799143076},
                    {lat: -33.91377777598357, lng: 151.17715023458004},
                    {lat: -33.91379391380512, lng: 151.17713078856468},
                    {lat: -33.913808938670726, lng: 151.17714554071426},
                    {lat: -33.91384010134648, lng: 151.17710262537003},
                    {lat: -33.91382897182075, lng: 151.17708384990692},
                    {lat: -33.913855682680094, lng: 151.1770462989807},
                    {lat: -33.913689852626234, lng: 151.176872625947},
                    {lat: -33.913734927270134, lng: 151.17681227624416}
                ]
            }
        },
        {
            text: "Walk across the street to the <em>McDonald's</em>.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: -33.91423519856891, lng: 151.1778100579977},
                    {lat: -33.91415284042577, lng: 151.1779200285673},
                    {lat: -33.914206261933096, lng: 151.17797903716564},
                    {lat: -33.91417565586529, lng: 151.17802061140537},
                    {lat: -33.91425411867164, lng: 151.17810375988483},
                    {lat: -33.914261352827445, lng: 151.17809772491455},
                    {lat: -33.91431533073989, lng: 151.17815740406513},
                    {lat: -33.91443274649321, lng: 151.17800250649452},
                    {lat: -33.91442106057241, lng: 151.17798775434494},
                    {lat: -33.914442762995485, lng: 151.1779609322548},
                    {lat: -33.91442217351731, lng: 151.1779361218214},
                    {lat: -33.914402140506745, lng: 151.17795892059803},
                    {lat: -33.91437988160061, lng: 151.17793209850788},
                    {lat: -33.914397688725984, lng: 151.17790795862675},
                    {lat: -33.914375986291425, lng: 151.17788448929787},
                    {lat: -33.914357622688634, lng: 151.17790795862675},
                    {lat: -33.9143381461359, lng: 151.17788650095463},
                    {lat: -33.914357066215764, lng: 151.1778623610735},
                    {lat: -33.91433202493269, lng: 151.17783285677433},
                    {lat: -33.91430754011546, lng: 151.17786303162575},
                    {lat: -33.914259683406925, lng: 151.1778100579977},
                    {lat: -33.91424799746239, lng: 151.17782548069954}
                ]
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
            text: "Get onto the highway and follow it northeast until you can see the <em>railway station</em> on your left.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: -33.90751217498429, lng: 151.1793851852417},
                    {lat: -33.907015759868166, lng: 151.18100255727768},
                    {lat: -33.90724282005581, lng: 151.18112057447433},
                    {lat: -33.90736748029381, lng: 151.18085235357285},
                    {lat: -33.90742090605428, lng: 151.18087112903595},
                    {lat: -33.90744984499389, lng: 151.18076920509338},
                    {lat: -33.90741645390885, lng: 151.18074506521225},
                    {lat: -33.90755001817052, lng: 151.180340051651},
                    {lat: -33.907639060895356, lng: 151.1799994111061},
                    {lat: -33.90772587746253, lng: 151.1794763803482}
                ]
            }
        },
        {
            text: "Board the train going northeast and get off at the second stop. Head over to the <em>police station</em> on your right.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: -33.891853671887596, lng: 151.19976460933685},
                    {lat: -33.89202511060685, lng: 151.199701577425},
                    {lat: -33.892121962198516, lng: 151.20001137256622},
                    {lat: -33.891947183959, lng: 151.2000784277916}
                ]
            }
        },
        {
            text: "Passing the south side of the police station is a street sharing the name of the railway station you just got off from. Follow it east until you can go no further, then head left and keep going that way until you come across a <em>checkerboard pattern</em> on the road.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: -33.89177351860192, lng: 151.21048606932163},
                    {lat: -33.891805802573266, lng: 151.2104780226946},
                    {lat: -33.8918236144143, lng: 151.21058262884617},
                    {lat: -33.8917868774881, lng: 151.21059134602547}
                ]
            }
        },
        {
            text: "Immediately to the east of here, there's a shopping mall. What's the first word in its name?",
            answer: {
                type: 'string',
                value: 'surry'
            }
        },
        {
            text: "Passing the mall, there's a street named after a city in Ohio. Follow it east and stop by the four <em>tennis courts</em>.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: -33.892420308939116, lng: 151.21813371777534},
                    {lat: -33.89211750925418, lng: 151.21874526143074},
                    {lat: -33.89235685468241, lng: 151.21892631053925},
                    {lat: -33.89266187997565, lng: 151.21830940246582}
                ]
            }
        }
    ]
};
