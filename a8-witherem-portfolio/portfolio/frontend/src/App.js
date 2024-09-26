// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import EditProjectPageTable from './pages/EditProjectPageTable';
import AddProjectPageTable from './pages/AddProjectPageTable';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import Topics from './pages/Topics';
import Gallery from './pages/Gallery';


// Define the function that renders the content in Routes, using State.
function App() {

  const [project, setProject] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
          <h1>
          <img src="../android-chrome-192x192.png" alt="logo" /> Marina Witherell
          </h1>
            <p>Marina Witherell's Website for OSU CS 290</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pages/Topics" element={<Topics />} />
                    <Route path="/pages/Gallery" element={<Gallery />} />
                    {/* <Route path="/pages/Contact" element={<Contact />} /> */}
                    <Route path="/projects" element={<ProjectsPage setProject={setProject} />} />
                    {/* <Route path="/pages/EditPage" element={<EditPage projectToEdit={project} />} /> */}
                    {/* //<Route path="/pages/Order" element={<Order } */}
                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/addProject" element={<AddProjectPageTable />} /> 
                    <Route path="/editProject" element={<EditProjectPageTable project={project} />} />

                    {/* Or these if your schema requires SHORT data input: */}
                    {/* <Route path="/create" element={<AddMoviePageForm />} />   
                    <Route path="/update" element={<EditMoviePageForm movieToEdit={movie} />} /> */}
                </Routes>
              </section>
          </main>

          <footer>
            <p>Marina Witherell</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;