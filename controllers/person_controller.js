//
// CRUD operaties op person 
// 
let Person = require('../model/Person');
let personlist = []

module.exports = {

    createPersonfunction(req,res,next) {
        console.log('personcontroller.createPerson')
        console.log(req.body)
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        console.log("We got " + firstname + " " + lastname)
    
        let newuser = new Person(firstname,lastname)
        //add to db
        personlist.push(newuser)
        res.status(200).json(newuser).end();
    },

    readPersonfunction(req ,res, next){
        let user = new Person("Stef","Michielsen")
        res.status(200).json(personlist).end();
    },

    updatePerson(req, res, next) {
        let user = new Person("Stef","Michielsen")
        res.status(200).json(user).end();
    },

    deletePerson(req, res, next) {
        //Vind de juiste Person om te deleten
        const id = req.params.id
        console.log('deletePerson id = ' + id)
        //delete die persoon
        const removedPerson = personlist.splice(id,1)
        if (removedPerson.length === 1){
            res.status(200).json(removedPerson).end()
        }
        //gelukt? status = 200
        //mislukt? fout -> next(error)
    },

    getPersonById(req, res, next) {
        let user = new Person("Stef","Michielsen")
        res.status(200).json(user).end();
    }
};

