import './App.css';
import Header from './components/layout/Header';
import Hero from './components/common/Hero';
import NewsBar from './components/common/NewsBar';
import Showcase from './components/common/Showcase';
import ShowcaseCard from './components/common/ShowcaseCard';
import SubFooter from './components/layout/SubFooter';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero 
        backgroundImage="/assets/hero.jpg"
        title="Find your flow."
        subtitle="Discover your creative potential through BYU's College of Fine Arts and Communications. Whether you're passionate about performing arts, visual arts, or communications, we provide the foundation for your artistic journey."
        buttonText="Join Our Programs"
        buttonLink="/form"
        overlayOpacity={0.5}
        textAlign="left"
      />
      <NewsBar />
      
      <Showcase
        image="/assets/banski.jpg"
        overlayText="Vision"
        title="Who we are"
        description="At BYU's College of Fine Arts and Communications, we're passionate about creating a supportive and inspiring environment for artists and communicators of all levels. Whether you're a complete beginner eager to explore the world of creative expression, a seasoned performer looking to refine your technique, or simply someone who finds joy in artistic creation, you'll find a home here."
        buttonText="About us"
        buttonLink="/about"
      />
      
      <Showcase
        image="/assets/ballet.jpg"
        overlayText="Programs"
        title="Our Diverse Programs"
        description="Discover our comprehensive range of programs designed to nurture creativity and develop professional skills. From undergraduate degrees in fine arts to graduate programs in communications, BYU offers pathways for every artistic and communication journey."
        buttonText="Explore Programs"
        buttonLink="#programs"
        reverse={true}
      />
      
      <ShowcaseCard
        title="BYU PERFORMING ARTS"
        description="Experience world-class performances by BYU students and faculty. From theater productions to musical concerts, discover the artistic excellence that defines our performing arts programs."
        buttonText="View Upcoming Shows"
        buttonLink="#performances"
        image="/assets/dance.jpg"
        backgroundColor="#1e3a8a"
        textColor="white"
      />
      
      <ShowcaseCard
        title="STUDENT SHOWCASE"
        description="Celebrate the creativity and talent of our students through exhibitions, presentations, and collaborative projects that demonstrate the innovative spirit of BYU's College of Fine Arts and Communications."
        buttonText="Explore Student Work"
        buttonLink="#student-showcase"
        image="/assets/presentation.jpg"
        backgroundColor="#000000"
        textColor="white"
      />
      
      <ShowcaseCard
        title="COMMUNICATIONS EXCELLENCE"
        description="Join BYU's award-winning communications programs where students develop professional skills in journalism, public relations, advertising, and digital media while maintaining the highest ethical standards."
        buttonText="Learn About Programs"
        buttonLink="#communications"
        image="/assets/communication.jpg"
        backgroundColor="#4169E1"
        textColor="white"
      />
      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;
