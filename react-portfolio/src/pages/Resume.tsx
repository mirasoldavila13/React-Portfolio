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

      <div className="max-w-5xl w-full grid gap-12 md:grid-cols-2">
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
            <div>
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
            </div>

            {/* Administrative Assistant */}
            <div>
              <h3 className="text-xl font-bold">Administrative Assistant</h3>
              <p className="text-sm text-accent1">California State University, Los Angeles - January 2020 - May 2021</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Streamlined departmental operations, resulting in a 90% improvement in efficiency through workflow re-engineering and enhanced cross-team communication, meeting organizational goals ahead of deadlines.</li>
                <li>Launched a new major for the technology department, driving a 90% increase in student enrollment and supporting growth and diversity goals, adapting quickly to changing academic requirements.</li>
              </ul>
            </div>

            {/* Beauty Advisor */}
            <div>
              <h3 className="text-xl font-bold">Beauty Advisor</h3>
              <p className="text-sm text-accent1">L’Occitane En Provence - November 2018 - January 2019</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Contributed to a 300% increase in customer retention by delivering high-quality service and personalized consultations, strengthening brand loyalty in a high-paced retail environment.</li>
                <li>Enhanced customer relationships and drove repeat sales through tailored, memorable brand experiences, adapting to individual customer needs and preferences efficiently.</li>
              </ul>
            </div>

            {/* Clerical Assistant */}
            <div>
              <h3 className="text-xl font-bold">Clerical Assistant</h3>
              <p className="text-sm text-accent1">California State University, Los Angeles - May 2018 - October 2018</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Revamped the filing system, increasing record-keeping accuracy by 90% and establishing best practices for document management, responding quickly to organizational restructuring requirements.</li>
                <li>Boosted office productivity by 99% by streamlining daily operations and optimizing administrative workflows, adapting flexibly to shifting priorities and high-volume tasks.</li>
                <li>Handled 100+ calls daily, providing accurate information and enhancing stakeholder satisfaction with efficient service delivery under pressure.</li>
              </ul>
            </div>

            {/* Peer Advisor */}
            <div>
              <h3 className="text-xl font-bold">Peer Advisor</h3>
              <p className="text-sm text-accent1">California State University, Los Angeles - March 2016 - March 2018</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provided personalized guidance to students by connecting them with resources to apply for internships, jobs, and campus clubs, fostering career readiness and community engagement in a fast-paced academic environment.</li>
                <li>Conducted workshops tailored to each major, outlining class roadmaps, degree requirements, and helping students plan their semester schedules, meeting tight event planning and academic scheduling deadlines.</li>
                <li>Adapted to dynamic academic policies to assist transfer students with creating customized academic plans, ensuring smooth transitions despite variable credit requirements.</li>
                <li>Improved retention and graduation rates by guiding students through long-term academic planning, including registration support and degree audits, working under academic calendar constraints.</li>
              </ul>
            </div>

            {/* Student Assistant */}
            <div>
              <h3 className="text-xl font-bold">Student Assistant</h3>
              <p className="text-sm text-accent1">MESA Schools Program, CSULA - March 2015 - March 2016</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Organized STEM-focused events with both strategic oversight and hands-on involvement, increasing program visibility and community impact while managing time-sensitive logistics.</li>
                <li>Led Cascade The Code: MESA Senior Day, preparing 40+ engineering, computer science, and technology student volunteers to teach HTML and CSS to over 400 high school students, adapting quickly to ensure event success under tight deadlines.</li>
              </ul>
            </div>

            {/* Lead Supplemental Instruction Leader */}
            <div>
              <h3 className="text-xl font-bold">Lead Supplemental Instruction Leader</h3>
              <p className="text-sm text-accent1">California State University, Los Angeles - July 2015 - August 2015</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Led mathematics instruction for 60+ students in a Summer Transition Program, achieving a 96% pass rate through customized learning materials while adapting to varied student needs and academic timelines.</li>
                <li>Created study aids that improved student comprehension, boosting academic success and program retention rates under a limited time frame.</li>
              </ul>
            </div>
          </article>
        </motion.section>
      </div>
    </main>
  );
}

export default Resume;
