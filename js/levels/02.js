export default {
    steps: [
        {
            text: "Die Suche beginnt natürlich direkt bei dir <em>zu Hause</em>! Na, weißt du noch, wo du wohnst?",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.56496535016903, lng: 9.91551786661148},
                    {lat: 53.56488530218056, lng: 9.91547092795372},
                    {lat: 53.56484627375314, lng: 9.915647953748703},
                    {lat: 53.56493667628013, lng: 9.91569422185421}
                ]
            }
        },
        {
            text: "Folge der Bahrenfelder Chaussee stadtaus-wärts, vorbei an der Trabrennbahn bis zur Bushaltestelle <em>Stadionstraße</em>.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.58062237185363, lng: 9.884549081325531},
                    {lat: 53.58053001234735, lng: 9.884377419948578},
                    {lat: 53.58043287540748, lng: 9.884519577026367},
                    {lat: 53.58053001234735, lng: 9.88471269607544}
                ]
            }
        },
        {
            text: "Südwestlich befindet sich ein Trampelpfad. Gehe diesen entlang bis an sein Ende. Wenn du alles richtig gemacht hast, befindest du dich jetzt genau an einer <em>Biegung</em>, wo sich zwei Straßen treffen.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.58033971928006, lng: 9.874803274869919},
                    {lat: 53.5801494253562, lng: 9.874824732542038},
                    {lat: 53.58021869562848, lng: 9.87508624792099},
                    {lat: 53.58038988029727, lng: 9.87496554851532}
                ]
            }
        },
        {
            text: "Marschiere weiter geradeaus, bis du zu deiner rechten ein <em>Ballettstudio</em> siehst.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.5796302928061, lng: 9.868841394782066},
                    {lat: 53.57950608223241, lng: 9.868821948766708},
                    {lat: 53.57950170300679, lng: 9.869062006473541},
                    {lat: 53.57962432115225, lng: 9.86904390156269}
                ]
            },
            important: true
        },
        {
            text: "Nanu? Ein Marker mit Sternchen? Das heißt wohl, dass hier dein erstes Geschenk versteckt ist! Na fein!"
        },
        {
            text: "Weiter geht's! Unweit westlich von hier siehst du einen Straßenkreisel. Von dort geht's ab nach Süden, und zwar ganz bis zur Elbe. Du landest in der Nähe einer Fährstation. Wie heißt sie?",
            answer: {
                type: 'string',
                value: 'teufelsbrück'
            }
        },
        {
            text: "Folge der Elbchaussee nach Osten, bis du zu deiner linken ein ostasiatisches <em>General-konsulat</em> siehst.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.54744915272274, lng: 9.878138601779938},
                    {lat: 53.54721010410924, lng: 9.878122508525848},
                    {lat: 53.54719098016182, lng: 9.878557026386261},
                    {lat: 53.5473710636575, lng: 9.878570437431335},
                    {lat: 53.54737265731332, lng: 9.8783478140831},
                    {lat: 53.54744118445737, lng: 9.87835317850113}
                ]
            }
        },
        {
            text: "Unmittelbar nördlich befindet sich eine Gebäudegruppe mit babyblauen Dächern. Von hier flatterst du fröhlich nach Osten, bis du bei einem <em>Spielplatz</em> landest, der direkt über dem Elbtunnel angelegt ist.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.5517458518738, lng: 9.89870309829712},
                    {lat: 53.55155204726808, lng: 9.898727238178253},
                    {lat: 53.55137627023021, lng: 9.898990094661713},
                    {lat: 53.55143711621056, lng: 9.899266362190247},
                    {lat: 53.551644442597784, lng: 9.899381697177887},
                    {lat: 53.55179768318766, lng: 9.899126887321472}
                ]
            }
        },
        {
            text: "Finde den Punkt, wo der Elbtunnel die Elbchaussee kreuzt. In der Nähe befindet sich eine <em>Kita</em>.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.54608177642704, lng: 9.909600913524628},
                    {lat: 53.54589053146579, lng: 9.90968406200409},
                    {lat: 53.545919218265055, lng: 9.909987151622772},
                    {lat: 53.54611046309669, lng: 9.909933507442474}
                ]
            },
            important: true
        },
        {
            text: "Woohoo! Das nächste Geschenk! Ist das nicht fett?"
        },
        {
            text: "Hey, es sieht so aus, als wären bei dem Geschenk noch zwei Zettel dabei gewesen... Sie scheinen einen Hinweis darauf zu geben, wo die Suche weiter geht. Schau mal in dein Inventar!",
            answer: {
                type: 'string',
                value: 'niendorfer gehege'
            },
            items: [0, 1]
        },
        {
            text: "Südlich und westlich des Geheges fließt die Kollau. In ihre Biegung schmiegt sich der Kleingartenverein Waldfrieden. Markiere sein <em>Vereinshaus</em>.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.61118069059853, lng: 9.926342591643333},
                    {lat: 53.61115761743574, lng: 9.926388189196587},
                    {lat: 53.61113533988731, lng: 9.926358684897423},
                    {lat: 53.61105458367567, lng: 9.926517605781555},
                    {lat: 53.61112141641354, lng: 9.926609471440315},
                    {lat: 53.61120257031019, lng: 9.926448538899422},
                    {lat: 53.61118944248456, lng: 9.926432445645332},
                    {lat: 53.61121251562993, lng: 9.926385506987572}
                ]
            }
        },
        {
            text: "Folge der anliegenden Straße nach Süden bis zu der <em>Kreuzung</em>, an der du vorbeikommst, sobald du das Informatikum hinter dir gelassen hast.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.597933029914536, lng: 9.931297302246094},
                    {lat: 53.59776271217469, lng: 9.931216835975647},
                    {lat: 53.59769745005503, lng: 9.93153065443039},
                    {lat: 53.597902786627685, lng: 9.93165671825409}
                ]
            }
        },
        {
            text: "Unmittelbar östlich findest du Hagenbecks Tierpark! An der Straße, die dessen nördliche Grenze bildet, befindet sich ein <em>Restaurant</em>, das seinen Namen von dem Ort bekommen hat, wo Spongebob seine Burger brät.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.598906374663514, lng: 9.939048886299133},
                    {lat: 53.59884588946183, lng: 9.939048886299133},
                    {lat: 53.59885663355001, lng: 9.939166903495789},
                    {lat: 53.59891950630769, lng: 9.93915282189846}
                ]
            },
            important: true
        },
        {
            text: "Zeit für ein weiteres Geschenk! Harte Arbeit will belohnt werden. Und eines steht noch aus!"
        },
        {
            text: "Hüpf auf die gegenüber liegende Seite des Tierparks und steige in die nahe gelegene U-Bahn. Fahre in Richtung Innenstadt und steige frühstmöglich in die U3 um, mit der du bis zum <em>Millerntorplatz</em> düst.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.55051522987958, lng: 9.970012307167053},
                    {lat: 53.55019970828437, lng: 9.969945251941681},
                    {lat: 53.5502172373236, lng: 9.97020274400711},
                    {lat: 53.550454675412404, lng: 9.970173239707947}
                ]
            }
        },
        {
            text: "Mache einen Abstecher auf die Reeperbahn und folge ihr bis zu dem Ort, wo du kürzlich die Schwestern der Gnade so großartig fandst!",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.54929137540641, lng: 9.964387714862823},
                    {lat: 53.549155123793184, lng: 9.964433312416077},
                    {lat: 53.549179027616724, lng: 9.96465191245079},
                    {lat: 53.54931727113127, lng: 9.964608326554298}
                ]
            }
        },
        {
            text: "Am westlichen Ende des Häuserblocks befindet sich ein Polizeikommissariat. Wie heißt es?",
            answer: {
                type: 'string',
                value: 'davidwache'
            }
        },
        {
            text: "Von hier aus gehst du weiter nach Süden, bis du an dem Restaurant Halt machst, wo wir uns einst an unserem Jahrestag vollge-schlagen haben.",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.547924058629256, lng: 9.962767660617828},
                    {lat: 53.547754336157155, lng: 9.962794482707977},
                    {lat: 53.547756726619234, lng: 9.962925910949707},
                    {lat: 53.547741587023786, lng: 9.963426142930984},
                    {lat: 53.54795593131809, lng: 9.96339663863182}
                ]
            },
            important: true
        },
        {
            text: "Und hier ist dein letztes Geschenk! Gratu-lation! Du hast den Gewaltmarsch durch Hamburg überstanden!"
        },
        {
            text: "Moment... Es geht noch weiter? Was ist das? Da ist etwas in deinem Inventar aufgetaucht...",
            answer: {
                type: 'external'
            },
            items: [2]
        },
        {
            text: "Sieht aus, als wäre etwas an der Stelle versteckt, wo sich die Linien kreuzen, die beim Verbinden der mit Sternen versehenen Marker entstehen! Dann wollen wir doch mal..."
        },
        {
            text: "Und los! Auf zum Mittelpunkt!",
            answer: {
                type: 'latLng',
                value: [
                    {lat: 53.56309433817069, lng: 9.918696284294128},
                    {lat: 53.56289361166132, lng: 9.918690919876099},
                    {lat: 53.562895204732584, lng: 9.918562173843384},
                    {lat: 53.562753421153324, lng: 9.918554127216339},
                    {lat: 53.562750235, lng: 9.918685555458069},
                    {lat: 53.56236152249567, lng: 9.918680191040039},
                    {lat: 53.56235515012977, lng: 9.919189810752869},
                    {lat: 53.56309115204307, lng: 9.919232726097107}
                ]
            },
            polylines: [
                [
                    {lat: 53.57957376111589, lng: 9.868914484977722},
                    {lat: 53.547849157716094, lng: 9.963038563728333}
                ],
                [
                    {lat: 53.59887175485472, lng: 9.939097166061401},
                    {lat: 53.5459953178745, lng: 9.909800738096237}
                ]
            ]
        },
        {
            text: "Bam! Keine 300 Meter von zu Hause befindet sich das Gastwerk-Hotel, und dort lassen wir es uns gut gehen. Am Sonntag, den 17.4. um 12 Uhr gönnen wir uns eine 50 Minuten lange Ganzkörpermassage mit Aromaölen, um so richtig tiefenentspannt anschließend im Restaurant Mangold Mittag zu essen. Alles Liebe zum Geburtstag!"
        }
    ]
};
