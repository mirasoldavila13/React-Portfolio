import { motion } from "framer-motion";
import secureNetworkImage from '../assets/secure_network_simulation.png';
import neighborhoodAidImage from '../assets/neighborhood_aid.png';

function Portfolio() {
  return (
    <div className="min-h-screen bg-secondaryBg text-textLight p-6 md:p-12">
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
        <p className="text-lg">A showcase of projects and accomplishments.</p>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Secure Network Simulation Project Card */}
        <motion.div
          className="bg-primaryBg rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src={secureNetworkImage}
            alt="Secure Network Simulation"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-2">Secure Network Simulation</h3>
            <p className="text-textLight mb-4">
              <strong>Tech Stack:</strong> VirtualBox, Kali Linux, Wireshark, Nmap, Linux (various distributions)
              <br /><br />
              <strong>Description:</strong> Designed and deployed a high-availability, secure virtual network to meet client requirements for cost efficiency and data protection. Conducted comprehensive network configuration, IP documentation, and vulnerability assessments using Nmap and Wireshark. Implemented robust network segmentation to isolate trusted and untrusted zones, enhancing security posture.
              <br /><br />
              <strong>Key Components:</strong> Router-Firewall for perimeter security, CEO’s PC with secure access, resilient Web and DNS servers, and Linux Monitoring VMs for continuous monitoring.
            </p>
            <a
              href="https://github.com/mirasoldavila13/Secure-Network-Simulation"
              className="inline-block bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold rounded-full px-4 py-2 hover:from-accent2 hover:to-accent1 transition-all"
              target="_blank"
              rel="noopener noreferrer">
              View Repository
            </a>
          </div>
        </motion.div>

        {/* Neighborhood Aid Project Card */}
        <motion.div
          className="bg-primaryBg rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src={neighborhoodAidImage}
            alt="Neighborhood Aid"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-2">Neighborhood Aid</h3>
            <p className="text-textLight mb-4">
              <strong>Tech Stack:</strong> 
              Frontend: React, Vite, TypeScript, Tailwind CSS; 
              Backend: JavaScript, Node.js, Express.js, Sequelize, Sequelize CLI, CORS;
              Database: PostgreSQL; 
              APIs: OpenWeather API, OpenWeather Geolocation API, OpenStreetMap, Nominatim, Browser Geolocation API;
              HTTP Client: Axios; 
              Testing: Postman for backend testing; 
              Deployment: Vite for frontend, Node.js for backend.
              <br /><br />
              <strong>Description:</strong> NeighborhoodAid is a RESTful API and React-based platform designed to empower citizens to report local issues such as potholes, streetlight outages, or vandalism. The platform provides a seamless user experience where individuals can track the progress of their reports, receive real-time updates when issues are resolved, and engage with others in their community. By bringing communities together, NeighborhoodAid aims to foster civic engagement, transparency, and collaboration in solving local problems.
              <br /><br />
              
            </p>

            <div className="flex gap-4">
              <a
                href="https://neighborhoodaid.onrender.com/"
                className="inline-block bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold rounded-full px-4 py-2 hover:from-accent2 hover:to-accent1 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live
              </a>
              <a
                href="https://github.com/mirasoldavila13/NeighborhoodAid"
                className="inline-block bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold rounded-full px-4 py-2 hover:from-accent2 hover:to-accent1 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  );
}

export default Portfolio;
