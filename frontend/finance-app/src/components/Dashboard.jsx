import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Dashboard updated
function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from your API
    axios
      .get("http://localhost:8080/api/projects")
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // For demo purposes, you can mock data like this:
    // setProjects([
    //   {id: 1, name: "Project A", status: "In Progress"},
    //   {id: 2, name: "Project B", status: "Completed"},
    //   {id: 3, name: "Project C", status: "Planning"},
    // ]);
  }, []);

  return (
    <div>
      <Navbar /> {/* Include the Navbar2 component */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Projects
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8"
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Serial No:</span> {project.id}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Status:</span>{" "}
                    {project.status}
                  </p>
                  <div className="mt-6 text-center">
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-block px-6 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition duration-200 ease-in-out"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/add-project"
            className="inline-block px-6 py-3 text-white bg-gray-800 rounded-lg shadow-lg hover:bg-gray-900 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Add New Project
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
