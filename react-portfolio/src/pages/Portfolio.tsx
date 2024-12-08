import { motion } from "framer-motion";
import secureNetworkImage from '../assets/secure_network_simulation.png';
import neighborhoodAidImage from '../assets/neighborhood_aid.png';
import proReadMEGeneratorImage from '../assets/ProReadMeGenerator.png';
import vehicleBuilderImage from '../assets/vehicle_builder_cli.png'; // Add an appropriate image or placeholder

function Portfolio() {
  return (
    <main className="min-h-screen bg-secondaryBg text-textLight p-6 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-lg">Showcasing impactful projects that highlight technical expertise and problem-solving skills.</p>
      </header>

      {/* Projects Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Secure Network Simulation Project */}
        <motion.article
          className="bg-primaryBg rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <figure>
            <img
              src={secureNetworkImage}
              alt="Secure Network Simulation"
              className="w-full h-48 object-cover"
            />
          </figure>
          <section className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Secure Network Simulation</h2>
            <p className="text-textLight mb-4">
              Developed a high-availability secure virtual network with robust segmentation and monitoring, meeting enterprise-level security and cost efficiency requirements.
            </p>
            <a
              href="https://github.com/mirasoldavila13/Secure-Network-Simulation"
              className="inline-block bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold rounded-full px-4 py-2 hover:from-accent2 hover:to-accent1 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </section>
        </motion.article>

        {/* Neighborhood Aid Project */}
        <motion.article
          className="bg-primaryBg rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <figure>
            <img
              src={neighborhoodAidImage}
              alt="Neighborhood Aid"
              className="w-full h-48 object-cover"
            />
          </figure>
          <section className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Neighborhood Aid</h2>
            <p className="text-textLight mb-4">
              Built a community-focused platform for reporting and tracking local issues, using a modern tech stack and implementing secure, scalable API integrations.
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
          </section>
        </motion.article>

        {/* ProReadMeGenerator Project */}
        <motion.article
          className="bg-primaryBg rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <figure>
            <img
              src={proReadMEGeneratorImage}
              alt="Professional README Generator"
              className="w-full h-48 object-cover"
            />
          </figure>
          <section className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Professional README Generator</h2>
            <p className="text-textLight mb-4">
              Automated the creation of consistent, high-quality README files to streamline developer workflows.
            </p>
            <a
              href="https://github.com/mirasoldavila13/ProReadMeGenerator"
              className="inline-block bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold rounded-full px-4 py-2 hover:from-accent2 hover:to-accent1 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </section>
        </motion.article>

        {/* Vehicle Builder CLI */}
        <motion.article
          className="bg-primaryBg rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <figure>
            <img
              src={vehicleBuilderImage} // Use an appropriate image for this project
              alt="Vehicle Builder CLI"
              className="w-full h-48 object-cover"
            />
          </figure>
          <section className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Vehicle Builder CLI</h2>
            <p className="text-textLight mb-4">
              Developed an interactive command-line tool that allows users to design and customize virtual vehicles with real-time feedback.
            </p>
            <a
              href="https://github.com/mirasoldavila13/Vehicle-Builder-CLI"
              className="inline-block bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold rounded-full px-4 py-2 hover:from-accent2 hover:to-accent1 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </section>
        </motion.article>

      </section>
    </main>
  );
}

export default Portfolio;
