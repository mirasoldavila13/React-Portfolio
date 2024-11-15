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
        
        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
          aria-labelledby="skills-heading"
        >
          <header>
            <h2 id="skills-heading" className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Skills</h2>
          </header>
          <section className="flex flex-wrap gap-4">
            {/* Programming Languages */}
            <article>
              <h3 className="font-semibold">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">Java</span>
                <span className="badge badge-outline">JavaScript</span>
                <span className="badge badge-outline">TypeScript</span>
                <span className="badge badge-outline">Python</span>
                <span className="badge badge-outline">C#</span>
                <span className="badge badge-outline">Haskell</span>
                <span className="badge badge-outline">HTML5</span>
                <span className="badge badge-outline">CSS</span>
                <span className="badge badge-outline">SQL</span>
                <span className="badge badge-outline">NoSQL</span>
                <span className="badge badge-outline">Swift</span>
              </div>
            </article>

            {/* Databases */}
            <article>
              <h3 className="font-semibold">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">PostgreSQL</span>
                <span className="badge badge-outline">MongoDB</span>
                <span className="badge badge-outline">MySQL</span>
                <span className="badge badge-outline">Cassandra</span>
                <span className="badge badge-outline">Sequelize (ORM)</span>
                <span className="badge badge-outline">JPA</span>
              </div>
            </article>

            {/* Frontend Development */}
            <article>
              <h3 className="font-semibold">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">React</span>
                <span className="badge badge-outline">Vite</span>
                <span className="badge badge-outline">TypeScript</span>
                <span className="badge badge-outline">Tailwind CSS</span>
                <span className="badge badge-outline">Daisy UI</span>
                <span className="badge badge-outline">Framer Motion</span>
                <span className="badge badge-outline">Bootstrap</span>
                <span className="badge badge-outline">Leaflet.js</span>
                <span className="badge badge-outline">Responsive Web Design</span>
              </div>
            </article>

            {/* Backend Development */}
            <article>
              <h3 className="font-semibold">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">Node.js</span>
                <span className="badge badge-outline">Express.js</span>
                <span className="badge badge-outline">Sequelize (ORM)</span>
                <span className="badge badge-outline">Sequelize CLI</span>
                <span className="badge badge-outline">RESTful Web Services</span>
                <span className="badge badge-outline">SOAP</span>
                <span className="badge badge-outline">MVC Architecture</span>
                <span className="badge badge-outline">Spring Boot</span>
                <span className="badge badge-outline">Hibernate</span>
                <span className="badge badge-outline">GraphQL</span>
                <span className="badge badge-outline">Spring Boot Test</span>
              </div>
            </article>

            {/* APIs and Integrations */}
            <article>
              <h3 className="font-semibold">APIs and Integrations</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">OpenWeather API</span>
                <span className="badge badge-outline">OpenWeather Geolocation API</span>
                <span className="badge badge-outline">OpenStreetMap API</span>
                <span className="badge badge-outline">Nominatim API</span>
                <span className="badge badge-outline">Browser Geolocation API</span>
                <span className="badge badge-outline">Axios</span>
                <span className="badge badge-outline">hls.js</span>
              </div>
            </article>

            {/* AI-Powered Technologies */}
            <article>
              <h3 className="font-semibold">AI-Powered Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">OpenAI</span>
                <span className="badge badge-outline">LangChain</span>
              </div>
            </article>

            {/* Tools and Platforms */}
            <article>
              <h3 className="font-semibold">Tools and Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">Docker</span>
                <span className="badge badge-outline">Kubernetes</span>
                <span className="badge badge-outline">OpenShift</span>
                <span className="badge badge-outline">Google Cloud</span>
                <span className="badge badge-outline">Git</span>
                <span className="badge badge-outline">GitHub</span>
                <span className="badge badge-outline">GitHub Actions</span>
                <span className="badge badge-outline">CircleCI</span>
                <span className="badge badge-outline">Jira</span>
                <span className="badge badge-outline">Confluence</span>
                <span className="badge badge-outline">Swagger</span>
                <span className="badge badge-outline">Figma</span>
                <span className="badge badge-outline">Salesforce</span>
                <span className="badge badge-outline">Xcode</span>
                <span className="badge badge-outline">Render</span>
                <span className="badge badge-outline">VirtualBox</span>
                <span className="badge badge-outline">Zoom</span>
                <span className="badge badge-outline">Slack</span>
                <span className="badge badge-outline">Trello</span>
                <span className="badge badge-outline">Postman API</span>
                <span className="badge badge-outline">Wireshark</span>
                <span className="badge badge-outline">Inquirer</span>
                <span className="badge badge-outline">Nmap</span>
              </div>
            </article>

            {/* Operating Systems */}
            <article>
              <h3 className="font-semibold">Operating Systems</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">Linux</span>
                <span className="badge badge-outline">Kali Linux</span>
                <span className="badge badge-outline">Windows</span>
                <span className="badge badge-outline">OS</span>
              </div>
            </article>

            {/* Build Tools */}
            <article>
              <h3 className="font-semibold">Build Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">Maven</span>
                <span className="badge badge-outline">Gradle</span>
                <span className="badge badge-outline">Webpack</span>
                <span className="badge badge-outline">Vite</span>
              </div>
            </article>

            {/* Testing Tools */}
            <article>
              <h3 className="font-semibold">Testing Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">JUnit</span>
                <span className="badge badge-outline">Selenium</span>
                <span className="badge badge-outline">Mocha</span>
                <span className="badge badge-outline">Chai</span>
                <span className="badge badge-outline">Jest</span>
                <span className="badge badge-outline">Mockito</span>
                <span className="badge badge-outline">Postman</span>
                <span className="badge badge-outline">JMeter</span>
                <span className="badge badge-outline">A/B Testing</span>
                <span className="badge badge-outline">Black Box Testing</span>
              </div>
            </article>

            {/* Security */}
            <article>
              <h3 className="font-semibold">Security</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">JSON Web Token (JWT)</span>
                <span className="badge badge-outline">OAuth</span>
                <span className="badge badge-outline">SSL/TLS</span>
                <span className="badge badge-outline">bcrypt</span>
                <span className="badge badge-outline">CORS (Middleware)</span>
              </div>
            </article>

            {/* Concepts and Methodologies */}
            <article>
              <h3 className="font-semibold">Concepts and Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">Object-Oriented Programming (OOP)</span>
                <span className="badge badge-outline">Data Structures</span>
                <span className="badge badge-outline">RESTful API</span>
                <span className="badge badge-outline">CRUD Operations</span>
                <span className="badge badge-outline">API Integration</span>
                <span className="badge badge-outline">Behavior-Driven Development (BDD)</span>
                <span className="badge badge-outline">Test-Driven Development (TDD)</span>
                <span className="badge badge-outline">Model-View-Controller (MVC)</span>
                <span className="badge badge-outline">Microservices</span>
                <span className="badge badge-outline">Continuous Integration/Delivery (CI/CD)</span>
                <span className="badge badge-outline">Agile Methodologies</span>
                <span className="badge badge-outline">DevOps</span>
                <span className="badge badge-outline">Software Development Life Cycle (SDLC)</span>
                <span className="badge badge-outline">Version Control</span>
                <span className="badge badge-outline">Daily Scrum Stand-Ups</span>
                <span className="badge badge-outline">Kanban</span>
                <span className="badge badge-outline">Waterfall</span>
              </div>
            </article>

            {/* Networking and Cybersecurity */}
            <article>
              <h3 className="font-semibold">Networking and Cybersecurity</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">Network Security</span>
                <span className="badge badge-outline">Cybersecurity</span>
                <span className="badge badge-outline">Linux Networking</span>
                <span className="badge badge-outline">Cryptography</span>
              </div>
            </article>

            {/* Additional Skills */}
            <article>
              <h3 className="font-semibold">Additional Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">Debugging</span>
                <span className="badge badge-outline">Problem Solving</span>
                <span className="badge badge-outline">Code Review</span>
                <span className="badge badge-outline">Pair Programming</span>
                <span className="badge badge-outline">API Documentation</span>
                <span className="badge badge-outline">Public Speaking</span>
                <span className="badge badge-outline">Time Management</span>
                <span className="badge badge-outline">Teamwork</span>
                <span className="badge badge-outline">Leadership</span>
              </div>
            </article>
          </section>
        </motion.section>

      </div>
    </main>
  );
}

export default Resume;
