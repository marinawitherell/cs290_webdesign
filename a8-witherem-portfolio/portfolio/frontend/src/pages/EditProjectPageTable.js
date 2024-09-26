import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditProjectPageTable = ({ project }) => {

    console.log(project);
    const [name, setName] = useState(project.name);
    const [time, setTime] = useState(project.time);
    const [rating, setRating] = useState(project.rating);
    const [date, setDate] = useState(project.date.slice(0,10));
    
    const redirect = useNavigate();

    const editProject = async () => {
        const response = await fetch(`/projects/${project._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                time: time, 
                rating: rating,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Your project was successfully edited.`);
        } else {
            const errMessage = await response.json();
            alert(`Sorry, there was an error editing your project. Here's some more information. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/projects");
    }

    return (
        <>
        <article>
            <h2>Edit a project</h2>
            <p>Edit the previous information below.</p>
            <table id="projectsTable">
                <caption>Which crochet project are you editing?</caption>
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
                    <td><label for="exname"></label>
                        <input
                            type="text"
                            placeholder="Name of the Project"
                            value={name}
                            id="exname"
                            name="name"
                            onChange={e => setName(e.target.value)} 
                            />
                    </td>

                    <td><label for="extime"></label>
                        <input
                            type="number"
                            value={time}
                            placeholder="0"
                            id="extime"
                            name="time"
                            onChange={e => setTime(e.target.value)} 
                            />
                    </td>

                    <td><label for="exrating"></label>
                        <input
                            type="number"
                            placeholder="1"
                            value={rating}
                            id="exrating" 
                            name="rating"
                            onChange={e => setRating(e.target.value)} 
                            />
                    </td>

                    <td><label for="exdate"></label>
                        <input
                            type="date"
                            placeholder="MM-DD-YY"
                            value={date}
                            id="exdate" 
                            name="date"
                            onChange={e => setDate(e.target.value.date.toLocaleDateString("en-US"))}
                            pattern="\d{2}-\d{2}-\d{2}"
                            />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={editProject}
                            id="submit"
                        >Update</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditProjectPageTable;