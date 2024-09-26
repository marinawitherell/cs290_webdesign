// Controllers for the Project Collection

import 'dotenv/config';
import express from 'express';
import * as projects from './crochet-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/projects', (req,res) => { 
    projects.createProject(
        req.body.name, 
        req.body.time, 
        req.body.rating,
        req.body.date
        )
        .then(project => {
            console.log(`"${project.name}" was added as a crochet project.`);
            res.status(201).json(project);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Sorry, there was an error when attempting to add the crochet project.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/projects', (req, res) => {
    projects.retrieveProjects()
        .then(projects => { 
            if (projects !== null) {
                console.log(`All crochet projects were retrieved from your collection.`);
                res.json(projects);
            } else {
                res.status(404).json({ Error: 'It seems like that your collection of crochet projects is empty.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Sorry, there was an error when attempting to retrieve all of the crochet projects in your collection.' });
        });
});


// RETRIEVE by ID controller
app.get('/projects/:_id', (req, res) => {
    projects.retrieveProjectByID(req.params._id)
    .then(project => { 
        if (project !== null) {
            console.log(`"${project.name}" was retrieved, based on its ID.`);
            res.json(project);
        } else {
            res.status(404).json({ Error: 'It seems like that crochet project does not exist.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Sorry, there was an error when attempting to retrieve that crochet project.' });
    });

});


// UPDATE controller ************************************
app.put('/projects/:_id', (req, res) => {
    projects.updateProject(
        req.params._id, 
        req.body.name, 
        req.body.time, 
        req.body.rating,
        req.body.date
    )
    .then(project => {
        console.log(`"${project.name}" was updated.`);
        res.json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Sorry, there was an error when attempting to update your crochet project.' });
    });
});


// DELETE Controller ******************************
app.delete('/projects/:_id', (req, res) => {
    projects.deleteProjectById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} crochet project was deleted.`);
                res.status(200).send({ Success: 'Your crochet project was successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'Sorry, there was an error when attempting to delete your crochet project.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Sorry, there was an error when attempting to delete your crochet project.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});