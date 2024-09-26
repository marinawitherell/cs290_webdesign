import React from "react";
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from 'react-icons/io';

function TableHead(){
    return (
        <thead>
            <tr>
                <th title="Clicking on the delete icon will remove the row.">Delete</th>
                <th title="Editing will redirect you to a new screen to revise the information">Edit</th>
                <th title="What is the name of the project you completed?">Project Name</th>
                <th title="How many hours did it take you to complete the project?">Hours to Complete</th>
                <th title="How would you rate that project?">Rating</th>
                <th title="When did you complete the project?">Date</th>
                <th><Link to="/addProject"><i><IoIosAddCircleOutline title="Add a project" /></i></Link></th>
            </tr>
        </thead>
    );
}

export default TableHead;