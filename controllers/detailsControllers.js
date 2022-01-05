const {details} = require('../models/details');

const getAllDetails = (req, res) =>{
    details.find()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(err => {
        res.status(500).send(`There is an error in the server while loading response`);
    });
}

const createDetails = (req,res) => {
    const identity = new details(req.body);
    identity.save().then(response => {
        res.status(201).send('User has been created')
    }).catch(err => {
       //  Used this find the error 
       //  console.log(err);
        res.status(500).send('an error occured');
    });
   
   }
   

module.exports ={
    getAllDetails,
    createDetails
}