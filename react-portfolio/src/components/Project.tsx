import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  repoLink: string;
  liveDemoLink?: string; 
}

function Project({ title, description, image, repoLink, liveDemoLink }: ProjectProps) {
  return (
    <motion.article
      className="bg-primaryBg rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <figure>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <section className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-textLight mb-4">{description}</p>
        <div className="flex gap-4">
          {liveDemoLink && (
            <a
              href={liveDemoLink}
              className="inline-block bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold rounded-full px-4 py-2 hover:from-accent2 hover:to-accent1 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
          )}
          <a
            href={repoLink}
            className="inline-block bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold rounded-full px-4 py-2 hover:from-accent2 hover:to-accent1 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
      </section>
    </motion.article>
  );
}

export default Project;
