import Project from "../components/Project";
import secureNetworkImage from "../assets/secure_network_simulation.png";
import neighborhoodAidImage from "../assets/neighborhood_aid.png";
import proReadMEGeneratorImage from "../assets/ProReadMeGenerator.png";
import vehicleBuilderImage from "../assets/vehicle_builder_cli.png";
import imageGalleryImage from "../assets/image_gallery.png";
import studentRepositoryImage from "../assets/student_repository.png";

function Portfolio() {
  const projects = [
    {
      title: "Secure Network Simulation",
      description:
        "Developed a high-availability secure virtual network with robust segmentation and monitoring, meeting enterprise-level security and cost efficiency requirements.",
      image: secureNetworkImage,
      repoLink: "https://github.com/mirasoldavila13/Secure-Network-Simulation",
    },
    {
      title: "Neighborhood Aid",
      description:
        "Built a community-focused platform for reporting and tracking local issues, using a modern tech stack and implementing secure, scalable API integrations.",
      image: neighborhoodAidImage,
      repoLink: "https://github.com/mirasoldavila13/NeighborhoodAid",
      liveDemoLink: "https://neighborhoodaid.onrender.com/",
    },
    {
      title: "Professional README Generator",
      description:
        "Automated the creation of consistent, high-quality README files to streamline developer workflows.",
      image: proReadMEGeneratorImage,
      repoLink: "https://github.com/mirasoldavila13/ProReadMeGenerator",
    },
    {
      title: "Vehicle Builder CLI",
      description:
        "Developed an interactive command-line tool that allows users to design and customize virtual vehicles with real-time feedback.",
      image: vehicleBuilderImage,
      repoLink: "https://github.com/mirasoldavila13/Vehicle-Builder-CLI",
    },
    {
      title: "Image Gallery",
      description:
        "A responsive image gallery application showcasing modern CSS techniques and React-based image optimization.",
      image: imageGalleryImage,
      repoLink: "https://github.com/mirasoldavila13/image-gallery",
      liveDemoLink: "https://mirasoldavila13.github.io/image-gallery/",
    },
    {
      title: "Student Repository System",
      description:
        "A web-based platform for managing student data efficiently, with features for adding, updating, and deleting records.",
      image: studentRepositoryImage,
      repoLink: "https://github.com/bhanusreek85/StudentRepositorySystem",
      liveDemoLink: "https://bhanusreek85.github.io/StudentRepositorySystem/",
    },
  ];

  return (
    <main className="min-h-screen bg-secondaryBg text-textLight p-6 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-lg">
          Showcasing impactful projects that highlight technical expertise and
          problem-solving skills.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    </main>
  );
}

export default Portfolio;
