// Models for the Crochet Projects

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'There seems to have been an error when connecting your database.' });
    } else  {
        console.log('Success: The connection to your database has been successful.');
    }
});

// SCHEMA: Define the collection's schema.
const crochetSchema = mongoose.Schema({
	name:    { type: String, required: true },
	time:           { type: Number, 
                      required: true,
                      default: 0,
                      min: [0, 'Empty values are not allowed'] },
	rating:         { type: Number, 
                      required: true,
                      default: 0,
                      min: [0, 'Empty values are not allowed'],
                      max: 5 },
    date:           { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema 
// by defining the collection name "projects".
const projects = mongoose.model('Project', crochetSchema);


// CREATE model *****************************************
const createProject = async (name, time, rating, date) => {
    const project = new projects({ 
        name: name, 
        time: time, 
        rating: rating,
        date: date 
    });
    return project.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveProjects = async () => {
    const query = projects.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveProjectByID = async (_id) => {
    const query = projects.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteProjectById = async (_id) => {
    const result = await projects.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateProject = async (_id, name, time, rating, date) => {
    const result = await projects.replaceOne({_id: _id }, {
        name: name,
        time: time,
        rating: rating,
        date: date
    });
    return { 
        _id: _id, 
        name: name,
        time: time,
        rating: rating,
        date: date 
    }
}

// EXPORT the variables for use in the controller file.
export { createProject, retrieveProjects, retrieveProjectByID, updateProject, deleteProjectById }