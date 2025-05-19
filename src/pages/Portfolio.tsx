import { Canvas } from "@react-three/fiber"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Experience } from "../component/Expierence"

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  )
}

export default Portfolio

// Simple Portfolio Page
{/* <div>
      <NavBar />
      <HeroSection />
      <SkillsDashboard />
      <WorkTimeline />
      <EducationTimeline />
      <AchievementsSection />
      <Footer />
    </div> */}
