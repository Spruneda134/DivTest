'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ParallaxProvider>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen flex flex-col transition-colors duration-500`}>
        {/* Header */}
        <header className="fixed w-full z-50 bg-opacity-60 backdrop-blur-lg px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jane Doe</h1>
          <nav className="space-x-4 hidden sm:block">
            <a href="#hero" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="ml-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-sm"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </header>

        {/* Hero */}
        <section id="hero" className="relative flex-1 flex flex-col justify-center items-center text-center overflow-hidden min-h-screen">
          <Parallax speed={-20}>
            <motion.h2 
              className="text-5xl sm:text-7xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I’m Jane Doe
            </motion.h2>
          </Parallax>
          <motion.p 
            className="text-lg sm:text-2xl max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            I build interactive, beautiful, and performant web experiences.
          </motion.p>
          <motion.a 
            href="#projects"
            className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold"
            whileHover={{ scale: 1.1 }}
          >
            View My Work
          </motion.a>
          {/* Parallax background layers */}
          <Parallax speed={10}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
          </Parallax>
          <Parallax speed={30}>
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500/30 blur-3xl"></div>
          </Parallax>
        </section>

        {/* About */}
        <section id="about" className="container mx-auto px-6 py-20">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.img 
              src="/images/image1.jpg" 
              alt="Profile"
              className="w-72 h-72 object-cover rounded-full shadow-lg mx-auto"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
            />
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <h3 className="text-3xl font-bold mb-4">About Me</h3>
              <p className="mb-4">
                I create innovative web apps that blend code and design. From full-stack apps to creative coding experiments, I love turning ideas into reality.
              </p>
              <div className="space-y-3">
                <SkillBar name="React" level={90} />
                <SkillBar name="Next.js" level={85} />
                <SkillBar name="Node.js" level={80} />
                <SkillBar name="Framer Motion" level={70} />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-gray-800 py-20">
          <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
            {[1,2,3,4,5,6].map(i => (
              <motion.div 
                key={i}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                whileHover={{ scale: 1.05 }}
              >
                <img src={`/images/image${i}.jpg`} alt={`Project ${i}`} className="w-full h-60 object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold transition">
                  Project {i}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container mx-auto px-6 py-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Let’s Connect</h3>
          <p className="mb-6">Interested in working together or just want to say hi? Drop me a message!</p>
          <motion.a 
            href="mailto:jane@example.com"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold"
            whileHover={{ scale: 1.1 }}
          >
            Email Me
          </motion.a>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm opacity-70">
          © 2025 Jane Doe. Built with Next.js, Tailwind & ❤️
        </footer>
      </div>
    </ParallaxProvider>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full">
        <motion.div 
          className="h-2 bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
