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
            I’m a full-stack software engineer with a Bachelor of Science in Computer Science from California State University, Los Angeles. I specialize in creating user-focused interfaces with React and building secure, scalable back-end systems with Spring Boot. My technical expertise spans JavaScript, TypeScript, Java, cloud infrastructure, and DevOps practices, enabling me to deliver impactful, resilient solutions.
          </AnimatedParagraph>

          <AnimatedParagraph delay={0.2}>
            I thrive in collaborative environments and apply test-driven (TDD) and behavior-driven (BDD) development practices to create high-quality applications. My experience includes using tools like Selenium, Jest, and Postman for testing, alongside CI/CD pipelines for efficient deployments.
          </AnimatedParagraph>

          <AnimatedParagraph delay={0.3}>
            As a member of SHPE and WiCyS, I actively advocate for diversity in tech while staying engaged with industry trends. Beyond technical contributions, I have over 10 years of experience mentoring STEM learners through programs like MESA, EnCorps, and United Voices of Literacy, where I’ve guided students in building skills and confidence in technology and problem-solving.
          </AnimatedParagraph>

          <AnimatedParagraph delay={0.4}>
            My adaptability, creativity, and passion for meaningful work drive me to solve complex challenges and contribute to impactful projects. I’m excited to bring my technical expertise and collaborative spirit to teams that value growth, innovation, and positive contributions.
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
          >
            View My Work
          </motion.a>
        </article>
      </section>
    </div>
  );
}

export default AboutMe;
