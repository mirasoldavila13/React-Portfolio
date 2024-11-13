import { motion } from "framer-motion";
import secureNetworkImage from '../assets/secure_network_simulation.png'; 

function Portfolio() {
  return (
    <div className="min-h-screen bg-secondaryBg text-textLight p-6 md:p-12">
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
        <p className="text-lg">A showcase of projects and accomplishments.</p>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card */}
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
              <strong>Objective:</strong> Architected a secure, scalable virtual network infrastructure to meet client requirements for cost efficiency and enhanced security.
              <br /><br />
              <strong>Services Provided:</strong> Designed and deployed a high-availability VirtualBox network simulation with seven virtual machines, configured secure network access, and conducted IP documentation for compliance. Led vulnerability assessments using Nmap and traffic analysis with Wireshark to identify and address security gaps. Implemented network segmentation to isolate trusted and untrusted zones, enhancing overall security posture.
              <br /><br />
              <strong>Key Components:</strong> Included a Router-Firewall for perimeter security, CEO’s PC for secure, role-specific network access, Internal Web and DNS Servers for core services, and Linux Monitoring VMs for continuous network monitoring and threat detection.
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

    
      </section>
    </div>
  );
}

export default Portfolio;
