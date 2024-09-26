import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogTable from '../components/LogTable';
import { IoIosAddCircleOutline, IoMdBrush } from 'react-icons/io';

import ProjectList from '../components/ProjectList';
import { Link } from 'react-router-dom';

function ProjectsPage({ setProject }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [projects, setProjects] = useState([]);

    const loadProjects = async () => {
        const response = await fetch('/projects');
        const projects = await response.json();
        setProjects(projects);
    } 
    

    const onEdit = async project => {
        setProject(project);
        redirect("/editProject");
    }


    // DELETE a single project
    const onDelete = async _id => {
        const response = await fetch(`/projects/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/projects');
            const projects = await getResponse.json();
            setProjects(projects);
        } else {
            console.error(`There was an error deleting your project. Please review the information and try again. ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the projects
    useEffect(() => {
        loadProjects();
    }, []);

    // DISPLAY the projects
    return (
        <>
            <h2>List of Projects</h2>
            <article>
            <p>Here are the crochet projects that have been completed.</p>
            {/* <Link to="/addProject"><i><IoIosAddCircleOutline /></i>Add Project</Link> */}
            <LogTable 
                projects={projects} 
                onEdit={onEdit} 
                onDelete={onDelete} 
            />
            </article>
        </>
    );
}

export default ProjectsPage;