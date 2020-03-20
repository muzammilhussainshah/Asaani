export default  [
    // ac technitian
    {
        shopStatus: true,
        Invertor: {
            Maintenance: [
                { title: "AC Compressor Change", price: "12000",text:"Starting from" },
                { title: "AC Countinuous Trip", price: "1000",text:"Starting from" },
                { title: "AC Icing", price: "1000",text:"Starting from" },
                { title: "AC water leak", price: "1000",text:"Starting from" },
                { title: "Gas Filling 1 Ton", price: "4800",text:"Starting from" },
                { title: "Gas Filling 2 Ton", price: "7200",text:"Starting from" },
                { title: "General Service", price: "1000",text:"Starting from" },
                { title: "Diagnostic Visit", price: "400",text:"Starting from" },
                { title: "Inverter Capacitor change", price: "800",text:"Starting from" },
                { title: "Inverter Repair Fan", price: "3500",text:"Starting from" },
                { title: "Inverter Repair circuit", price: "8000",text:"Starting from" },
                { title: "Inverter valve replacement", price: "1800",text:"Starting from" },
                { title: "Master Service", price: "1750",text:"Starting from" },
                { title: "Gas Filling 1.5 Ton", price: "5200",text:"Starting from" },

            ],
            Installation: [
                { title: "Installation", price: "2700",text:"Starting from" },
                { title: "AC Dismantle", price: "1000",text:"Starting from" },
                { title: "Installation (Higher than the 2nd floor)", price: "3200",text:"Starting from" },
            ],

        },
        "Non-Invertor": {
            Maintenance: [
                { title: "AC Circuit Repair (Regular AC)", price: "3000",text:"Starting from" },
                { title: "AC Circuit Replace (Regular AC)", price: "3000",text:"Starting from" },
                { title: "AC Compressor Change", price: "12000",text:"Starting from" },
                { title: "AC Countinuous Trip", price: "1000",text:"Starting from" },
                { title: "AC Icing", price: "1000",text:"Starting from" },
                { title: "AC water leak", price: "1000",text:"Starting from" },
                { title: "Gas Filling 1 Ton", price: "2800",text:"Starting from" },
                { title: "Gas Filling 2 Ton", price: "4200",text:"Starting from" },
                { title: "General Service", price: "1000",text:"Starting from" },
                { title: "Diagnostic Visit", price: "400",text:"Starting from" },
                { title: "Master Service", price: "1750",text:"Starting from" },
                { title: "Gas Filling 1.5 Ton", price: "3200",text:"Starting from" },
            ],
            Installation: [
                { title: "Installation", price: "2000",text:"Starting from" },
                { title: "AC Dismantle", price: "1000" ,text:"Starting from"},
                { title: "Installation (Higher than the 2nd floor)", price: "2500",text:"Starting from" },
            ],

        }
    },
    // Carpenter
    {
        route: "AvailService",
        shopStatus: true,
        Bed:
            [
                { title: "Bed Dismantle", price: "500" },
                { title: "Bed Repair", price: "600" },
            ],
        Cabinet: [
            { title: "Cabinet Handle replacement", price: "150" },
            { title: "Cabinet hinge repair", price: "400" },
        ],
        Door: [
            { title: "Door Catcher magnet", price: "300" },
            { title: "Door Chatakni", price: "300" },
            { title: "Door Glass fix", price: "50" },
            { title: "Door Handle & Lock replacement", price: "600" },
            { title: "Door Installation Sliding", price: "120" },
            { title: "Door Kundi/Latches replacement", price: "500" },
            { title: "Door Chokhat Repair (disfuguration)", price: "500" },
            { title: "Door Chokhat Stopper", price: "500" },
            { title: "Wooden Door Installation with lock", price: "500" },
        ],
        Drawer: [
            { title: "Drawer Channel Replacement", price: "500" },
            { title: "Drawer Lock Change", price: "250" },

        ],
        Installation: [
            { title: "Art work or Mirror Installation", price: "200" },
            { title: "Curtain Rod Installation", price: "300" },
            { title: "Mosquito netting", price: "80" },
            { title: "Shelf Installation", price: "600" },

        ],
        Polish: [
            { title: "Furniture Polish-Varnishing", price: "1000" },
            { title: "Laquer", price: "1" },
        ],
        Window: [
            { title: "Window Glass fix", price: "50" },
            { title: "Window Installation Sliding", price: "150" },
            { title: "Wooden Window Installation", price: "120" },
        ],
    },
    // Electrition
    {
        route: "AvailService",
        shopStatus: true,

        Fans:
            [
                { title: "Fan Installation", price: "400" },
                { title: "Fan installation including hook installation", price: "1200" },
                { title: "Faulty Fan Dimmer", price: "400" },
                { title: "Fan Capacitor Replacement", price: "400" },
                { title: "Exhaust Fan Installation with Wiring & Drilling", price: "800" },
                { title: "Exhaust Fan Installation", price: "600" },
                { title: "Bracket Fan installation", price: "500" },
            ],
        Power: [
            { title: "Generator Installation with ChangeOver Switch", price: "2000" },
            { title: "Generator - Power Supply issue", price: "1500" },
            { title: "Generator Replacement", price: "1000" },
            { title: "UPS dismantle", price: "800" },
            { title: "UPS Installation (floor)", price: "1650" },
            { title: "UPS Installation (wall bracket)", price: "1800" },
            { title: "UPS Point Connection", price: "300" },
            { title: "UPS Replacement", price: "1300" },
        ],
        Installation: [
            { title: "Ceiling / wall lights installation", price: "250" },
            { title: "Flat Screen TV Installation", price: "15" },
            { title: "Led Lights installation", price: "250" },
            { title: "LED Lights Installation Concealed", price: "1500" },
            { title: "LED Lights installation Open", price: "450" },
            { title: "Spot Lights installation", price: "500" },
        ],
        "Sockets, Wiring and Fuse Boards": [
            { title: "AC Point with Wiring & Re-Plastering", price: "150" },
            { title: "AC Point with Wiring & Channel Patti", price: "500" },
            { title: "AC Point without wiring", price: "600" },
            { title: "Breaker panel (DB Panel)", price: "1000" },
            { title: "Main Board", price: "1000" },
            { title: "New Switchboard", price: "600" },
            { title: "Panel Fuse - cut out", price: "600" },
            { title: "Single Phase Breaker Replacement", price: "1000" },
            { title: "Socket Repair", price: "600" },
            { title: "Switch Board Current Issue - Breaker Issue", price: "400" },
            { title: "Switch box current issue - wiring issue", price: "800" },
            { title: "Switch box sheet with connection", price: "500" },
            { title: "Three Phase Breaker Replacement", price: "1500" },

        ],

    },
    // Fumigation
    {
        route: "AvailService",
        shopStatus: true,
        Fumigation:
            [
                { title: "Bed Bugs Treatment-khatmal", price: "270" },
                { title: "General Fumigation for cockroaches & insects", price: "1" },
                { title: "Termite Treatement - deemak", price: "1" },
            ],
    },
    // Laundry
    {
        route: "AvailService",
        shopStatus: true,
        Pent:
            [
                { title: "Small size washing", price: "30" },
                { title: "Medium size washing", price: "40" },
                { title: "Large size washing", price: "50" },
            ],
        Shirt:
            [
                { title: "Small size washing", price: "30" },
                { title: "Medium size washing", price: "40" },
                { title: "Large size washing", price: "50" },
            ],
        Kurta:
            [
                { title: "Small size washing", price: "30" },
                { title: "Medium size washing", price: "40" },
                { title: "Large size washing", price: "50" },
            ],
        Pajama:
            [
                { title: "Small size washing", price: "30" },
                { title: "Medium size washing", price: "40" },
                { title: "Large size washing", price: "50" },
            ],
    },
    // Painter
    {
        route: "AvailService",
        shopStatus: true,
        Painter:
            [
                { title: "Distemper /ft", price: "15" },
                { title: "Oil Base Matt 25/ft", price: "25" },
                { title: "Texture Paint sq.ft", price: "55" },
                { title: "Velvet Paint-ICI dulux sq.ft", price: "170" },
                { title: "Velvet Paint-ICI Nippin sq.ft", price: "45" },
                { title: "Water Base Matt sq.ft", price: "25" },
                // { title: "Water Base Matt sq.ft", price: "25" },
            ],

    },
    // Plumber
    {
        route: "AvailService",
        shopStatus: true,
        Geyser:
            [
                { title: "Electric Geyser Installation without piping", price: "1500" },
                { title: "Geyser Burner Replacement", price: "500" },
                { title: "Geyser Installation", price: "1500" },
                { title: "Geyser Pilot Work", price: "500" },
                { title: "Geyser Service", price: "750" },
                { title: "Geyser Thermostat Change", price: "800" },
            ],
        "Pumps & Tanks":
            [
                { title: "Motor Installation/Replacement", price: "1000" },
                { title: "Motor Machine Installation/Replacement with piping", price: "1500" },
                { title: "Water Tank Cleaning", price: "1200" },
            ],
        "Installation/Repair":
            [
                { title: "Airlock", price: "1500" },
                { title: "Fibre or PVC Tank Installation without piping", price: "2500" },
                { title: "Kitchen Gas leak", price: "1000" },
                { title: "Mixer Tap Repair/Replacement", price: "700" },
                { title: "Pressure in taps", price: "1000" },
                { title: "Single Small Tap Replacement", price: "600" },
                { title: "Sink/Basin replacement/installation without points", price: "1000" },
                { title: "Sink Spindle Change", price: "500" },
                { title: "Water leaks", price: "300" },
            ],
        Bathroom:
            [
                { title: "Bath Tub Installation", price: "3000" },
                { title: "Bathroom Accessory Set Installation", price: "1000" },
                { title: "Commode Installation", price: "2000" },
                { title: "Complete New bathroom set change", price: "5000" },
                { title: "Flush Button & Lever Change/New", price: "600" },
                { title: "Flush Button & Lever Change/Repair", price: "600" },
                { title: "Flush Tank", price: "600" },
                { title: "Muslim Shower Replacement/repair", price: "600" },
                { title: "Removal of WC & Commode Installation", price: "2750" },
                { title: "Shower Set Change with new", price: "2500" },
                { title: "Toilet Seat Fixing", price: "300" },
            ],
    },
]