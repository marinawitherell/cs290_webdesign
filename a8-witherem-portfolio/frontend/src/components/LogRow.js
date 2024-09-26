import React from "react";
import { IoIosCloseCircleOutline, IoMdBrush } from 'react-icons/io';

function LogRow({ project, onDelete, onEdit }) {

    return (
        <tr>
            <td><i><IoIosCloseCircleOutline onClick={() => onDelete(project._id)} title="Click to delete" /></i></td>
            <td><i><IoMdBrush onClick={() => onEdit(project)} title="Click to edit" /></i></td>
            <td title="What is the name of the project you completed?">{project.name}</td>
            <td title="How many hours did it take you to complete the project?">{project.time}</td>
            <td title="How would you rate that project?">{project.rating}</td>
            <td title="When did you complete the project?">{project.date}</td>
        </tr>
    );
}

export default LogRow;