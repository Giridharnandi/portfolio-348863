import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm John Doe
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white px-6 py-3 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;