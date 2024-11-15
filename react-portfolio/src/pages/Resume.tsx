import { motion } from "framer-motion";
import { FaDownload, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Resume() {
  return (
    <main className="min-h-screen bg-primaryBg text-textLight p-8 md:p-12 flex flex-col items-center">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="/resume.pdf"
            download="Mirasol_Davila_Resume.pdf"
            className="inline-flex items-center bg-accent1 text-white font-semibold py-2 px-4 rounded hover:bg-accent2 transition-colors"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/mirasoldavila"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            <FaLinkedin className="mr-2" />
            Connect on LinkedIn
          </a>
          <a
            href="/contact"
            className="inline-flex items-center bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition-colors"
          >
            <FaEnvelope className="mr-2" />
            Contact Me
          </a>
        </div>
      </header>
      <section className="max-w-5xl w-full grid gap-12 md:grid-cols-2">
        {/* Professional Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
          aria-labelledby="experience-heading"
        >
          <h2 id="experience-heading" className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Professional Experience</h2>
          <article className="space-y-4">
            {/* Full Stack Java Developer */}
            <article>
              <h3 className="text-xl font-bold">Full Stack Java Developer (Contract)</h3>
              <p className="text-sm text-accent1">Walmart - November 2022 – March 2023</p>
              <p className="text-sm text-accent2">Tech Stack: Java, Spring Boot, Cassandra (NoSQL), REST APIs, Postman, Jira, Git, Confluence</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Spearheaded the development and maintenance of both frontend and backend Java components, driving end-to-end feature implementation, debugging complex issues, and ensuring code quality and performance optimizations.</li>
                <li>Architected and managed critical code check-in/check-out processes, proactively resolving code conflicts and enhancing deployment stability through rigorous version control practices in client-mandated repositories.</li>
                <li>Designed and integrated REST API endpoints to streamline data flow between client-side and backend services, optimizing response times and supporting high-availability operations in a large-scale environment.</li>
                <li>Collaborated with cross-functional teams in Agile Scrum ceremonies, leading discussions on Jira tickets and user stories, and consistently aligning project deliverables with strategic objectives through detailed progress updates.</li>
                <li>Operated autonomously to meet stringent client standards and project guidelines, consistently delivering high-quality code and adhering to all processes and protocols with minimal oversight.</li>
              </ul>
            </article>

            {/* Administrative Assistant */}
            <article>
              <h3 className="text-xl font-bold">Administrative Assistant</h3>
              <p className="text-sm text-accent1">California State University, Los Angeles - January 2020 - May 2021</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Streamlined departmental operations, resulting in a 90% improvement in efficiency through workflow re-engineering and enhanced cross-team communication, meeting organizational goals ahead of deadlines.</li>
                <li>Launched a new major for the technology department, driving a 90% increase in student enrollment and supporting growth and diversity goals, adapting quickly to changing academic requirements.</li>
              </ul>
            </article>

          </article>
        </motion.section>
      </section>
    </main>
  );
}

export default Resume;
