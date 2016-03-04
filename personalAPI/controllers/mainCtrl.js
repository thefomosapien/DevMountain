var me = {
    "name": "Donald Duck",
    "location": "Timbuktu",
    "occupations": ["Thwarting Buggs Bunny", "Tomfoolery"],
    "latestOccupation": "Tomfoolery",
    "hobbies": [{
            "name": "Watching cartoons",
            "type": "current"
        },
        {
            "name": "Quacking",
            "type": "past"
        }
    ]
}

module.exports = {

        getName: function (req, res) {
            console.log('hi');
            res.status(200).json({
                "name": me.name
            })
        },
        getLocation: function (req, res) {
            console.log('hi');
            res.status(200).json({
                "location": me.location
            })
        },
        getOccupations: function (req, res) {
            if (req.query.order === 'desc') {
                res.status(200).json({
                    "occupations": me.occupations
                })
            }
        }