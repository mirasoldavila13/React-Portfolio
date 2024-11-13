import { motion } from "framer-motion";
import AnimatedParagraph from "../components/AnimatedParagraph";
import mirasolImage from '../assets/mirasol.jpeg';

function AboutMe() {
  return (
    <div className="relative min-h-screen bg-secondaryBg text-textLight p-6 md:p-12 flex flex-col items-center md:flex-row md:justify-center">
      {/* Profile Image Section */}
      <motion.figure
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-lg bg-gradient-to-r from-accent1 to-accent2 p-1 
             relative md:absolute md:top-8 md:left-20 lg:left-48 transform transition-all"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 15px rgba(255, 105, 180, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img src={mirasolImage} alt="Mirasol Davila" className="w-full h-full object-cover rounded-full" />
      </motion.figure>

      {/* Main Content Section */}
      <section className="mt-16 md:mt-0 max-w-3xl text-center md:text-left prose prose-lg md:ml-[22rem] lg:ml-[24rem]">
        <article>
          <header>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">About Me</h1>
          </header>

          <AnimatedParagraph>
            I’m a full-stack software engineer with extensive experience in designing and deploying scalable solutions across both front-end and back-end systems. With a Bachelor of Science in Computer Science from California State University, Los Angeles, I have developed responsive, user-centered interfaces using React and created secure, efficient back-end systems with Spring Boot. My skill set spans JavaScript, TypeScript, Java, cloud infrastructure, and DevOps practices, allowing me to bring a comprehensive, adaptable approach to every project.
          </AnimatedParagraph>

          <AnimatedParagraph delay={0.2}>
            Throughout my career, I have thrived in team environments where I take initiative in both collaborative projects and independent tasks. With a solid foundation in the Software Development Life Cycle (SDLC), I apply test-driven (TDD) and behavior-driven development (BDD) principles to build high-quality, resilient applications. My testing expertise includes A/B testing, black box testing, and quality assurance using tools like JUnit, Selenium, Mockito, Mocha, Chai, Jest, Postman, and JMeter.
          </AnimatedParagraph>

          <AnimatedParagraph delay={0.3}>
            Currently, I am expanding my cybersecurity skills through UC Santa Barbara's Professional and Continuing Education program, where I am building practical expertise in vulnerability assessment, system optimization, and incident response. This aligns with my ongoing pursuit of the CompTIA Security+ certification, reinforcing my commitment to secure software development.
          </AnimatedParagraph>

          <AnimatedParagraph delay={0.4}>
            As a professional member of SHPE (Society of Hispanic Professional Engineers) and WiCyS (Women in CyberSecurity), I actively advocate for diversity in tech and stay engaged with industry trends. My goal is to contribute to projects that deliver meaningful, user-centered solutions within innovative, forward-thinking teams.
          </AnimatedParagraph>

          <AnimatedParagraph delay={0.5}>
            Beyond my technical roles, I have over 10 years of commitment to community engagement, particularly in supporting the next generation of STEM learners. At Cal State LA, I led efforts within the MESA Schools Program, organizing STEM-focused events with both strategic oversight and hands-on involvement. A key contribution was leading the Cascade The Code: MESA Senior Day, where I prepared over 40 student volunteers to teach HTML and CSS to more than 400 high school students, equipping them with essential tech skills and confidence.
          </AnimatedParagraph>

          <AnimatedParagraph delay={0.6}>
            Additionally, I volunteer with United Voices of Literacy, helping 3rd to 7th grade students develop reading and comprehension skills. As an EnCorps STEMx Tutor, I work with middle school students to build math proficiency and confidence through curriculum-aligned support. I am also passionate about introducing students to STEM through hands-on tools like the LEGO® Education SPIKE™ Essential and SPIKE™ Prime Sets, Scratch, and Code.org, helping them develop a strong foundation in technology and problem-solving.
          </AnimatedParagraph>

          <AnimatedParagraph delay={0.7}>
            Through these mentorship roles, I provide students with the foundational skills, tools, and encouragement they need to grow confidently in their learning journeys. My adaptability, communication, and commitment to student success have enabled me to achieve a 96% passing rate—an accomplishment that reflects my dedication to creating effective learning environments. I enjoy tackling complex challenges and bringing creative, efficient solutions to each project, ensuring that both user needs and technical requirements are met. I am quick to adapt to new tools and technologies, always eager to integrate modern solutions to enhance project outcomes. I look forward to contributing my technical expertise, collaborative spirit, and commitment to impactful work on teams that value growth, innovation, and meaningful contributions.
          </AnimatedParagraph>

          {/* Gradient Button */}
          <motion.a
            href="/portfolio"
            className="btn bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out mt-6 border-2 border-white hover:from-accent2 hover:to-accent1 hover:border-accent1"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(255, 105, 180, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              color: "textLight",
              textShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
            }}
          >
            View My Work
          </motion.a>
        </article>
      </section>
    </div>
  );
}

export default AboutMe;
