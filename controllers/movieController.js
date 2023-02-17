const {Movies, Genres, MovieGenres} = require("../models")

class MovieController {

    static async findAll(req, res) {

        const data = await Movies.findAll({include: {
            model: Genres
        }});

        res.status(200).json(data)
    }

    static async findOne(req, res) {
        try {
            const {id} = req.params;
            const data = await Movies.findOne({
                include: {
                    model: Genres
                },
                where: {
                    id
                }
            })
           
            if(data) {
                res.status(200).json(data)
            } else {
                throw("Error Not Found")
            }
        } catch(err) {
            res.status(404).json({message: err})
        }
    }


    static async create(req, res) {
        console.log(req.body);
        const {title, year, genre_ids} = req.body;

        const data = await Movies.create({
            title,
            year
        })

        for(let i = 0; i < genre_ids.length; i++) {
            await MovieGenres.create({
                movie_id: data.id,
                genre_id: genre_ids[i]
            })
        }

        res.status(201).json(data);

    }
}

module.exports = MovieController;