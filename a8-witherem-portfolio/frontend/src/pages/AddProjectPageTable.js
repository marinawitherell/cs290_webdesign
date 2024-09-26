import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddProjectPageTable = () => {
    const [nametest, setName] = useState('');
    console.log('working');
    const [time, setTime] = useState('');
    const [rating, setRating] = useState('');
    const [date, setDate] = useState();
    
    const redirect = useNavigate();

    const addProject = async () => {
        const newProject = { name: nametest, time, rating, date };
        
        const response = await fetch('/projects', {
            method: 'post',
            body: JSON.stringify(newProject),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Your project was successfully added!`);
        } else {
            alert(`Sorry, there was an error adding your project due to missing data. ${response.status}`);
        }
        redirect("/projects");
    };


    return (
        <>
        <article>
            <h2>Add a Project</h2>
            <p>Please fill out the following information to add a new crochet project.</p>
            
            <table id="projectsTable">
                <caption>Which project are you adding?</caption>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Hours to Complete</th>
                        <th>Rating</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td><label for="name">
                        <input
                            type="text"
                            value={nametest}
                            id="name"
                            name="name"
                            onChange={e => setName(e.target.value)} 
                            />
                    </label>Name</td>

                    <td><label for="time">
                        <input
                            type="number"
                            value={time}
                            id="time" 
                            name='time'
                            onChange={e => setTime(e.target.value)} 
                            /></label>Hours
                    </td>

                    <td><label for="rating">
                        <input
                            type="number"
                            value={rating}
                            id="rating"
                            name='rating'
                            onChange={e => setRating(e.target.value)} 
                            /></label>Rating
                    </td>

                    <td><label for="date">
                        <input
                            type="date"
                            value={date}
                            id="date"
                            name='date'
                            onChange={e => setDate(e.target.value)}
                            /></label>Date
                    </td>

                    <td>
                    <button class="wait" onClick={addProject}>Submit</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddProjectPageTable;