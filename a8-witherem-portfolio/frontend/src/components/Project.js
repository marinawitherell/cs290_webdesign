import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Project({ project, onEdit, onDelete }) {
    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.time}</td>
            <td>{project.rating}</td>
            <td>{project.date.slice(1,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><MdDeleteForever onClick={() => onDelete(project._id)} /></td>
            <td><MdEdit onClick={() => onEdit(project)} /></td>
        </tr>
    );
}

export default Project;