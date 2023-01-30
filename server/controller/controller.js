let userDB = require('../model/model')

//create and save users
exports.create = (req, res) => {
    //validate the user
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        sector: req.body.sector,
        gender: req.body.gender,
        terms_condition: req.body.terms_conditions
    })

    //save user in database

    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            // res.status(500).send({
            //     message: err.message || "Some error occured while creating a create operation"
            // })
            console.log(err);
        })

}

//retrive all users
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        userDB.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving user with id " + id })
            })

    } else {
        userDB.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
            })
    }


}



//update user
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data updated can not be empty" })
    }
    const id = req.params.id;
    userDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })
}

//delete user
exports.delete = (req, res) => {
    const id = req.params.id;

    userDB.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}
