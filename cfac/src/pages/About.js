import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/common/Hero';
import NewsBar from '../components/common/NewsBar';
import InstructorGrid from '../components/common/InstructorGrid';
import Showcase from '../components/common/Showcase';
import Location from '../components/common/Location';
import SubFooter from '../components/layout/SubFooter';
import Footer from '../components/layout/Footer';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      
      <Hero 
        backgroundImage="/assets/faculty.jpg"
        title="About CFAC"
        subtitle="Learn about BYU's College of Fine Arts and Communications, our mission, faculty, and the creative community that makes us unique. Discover how we prepare students for meaningful careers in the arts and communications."
        buttonText="Meet Our Faculty"
        buttonLink="#faculty"
        overlayOpacity={0.6}
        textAlign="center"
      />
      
      <NewsBar />
      
      <InstructorGrid 
        title="Meet Our Faculty"
        instructors={[
          {
            image: "/assets/faculty 1.jpg",
            name: "Dr. Sarah Mitchell",
            title: "Professor of Theatre Arts",
            description: "Dr. Mitchell brings over 15 years of professional theatre experience to BYU CFAC. She specializes in contemporary drama and has directed numerous award-winning productions. Her research focuses on the intersection of performance and social justice.",
            colorTheme: "purple"
          },
          {
            image: "/assets/faculty 2.jpg",
            name: "Professor James Chen",
            title: "Director of Communications",
            description: "Professor Chen is an accomplished journalist and media strategist with extensive experience in digital communications. He has worked with major news organizations and helps students navigate the evolving landscape of modern media.",
            colorTheme: "teal"
          },
          {
            image: "/assets/faculty 3.jpg",
            name: "Dr. Maria Rodriguez",
            title: "Associate Professor of Dance",
            description: "Dr. Rodriguez is a renowned choreographer and former principal dancer with international ballet companies. She teaches contemporary and classical dance techniques while fostering creativity and artistic expression in her students.",
            colorTheme: "blue"
          },
          {
            image: "/assets/faculty 4.jpg",
            name: "Professor David Thompson",
            title: "Professor of Visual Arts",
            description: "Professor Thompson is a practicing artist whose work has been exhibited in galleries across the country. He specializes in mixed media and digital art, helping students explore traditional techniques alongside cutting-edge technology.",
            colorTheme: "pink"
          }
        ]}
      />
      
      <Showcase
        image="/assets/excellence.jpg"
        overlayText="Excellence"
        title="Excellence in Education"
        description="Our programs combine rigorous academic study with hands-on creative experience, guided by faculty who are both accomplished artists and dedicated educators. We believe in the power of the arts to inspire, educate, and transform lives."
        buttonText="View Programs"
        buttonLink="#programs"
      />
      
      <Showcase
        image="/assets/community.webp"
        overlayText="Community"
        title="Creative Community"
        description="Join a vibrant community of artists, performers, designers, and communicators who support each other's growth and celebrate creative achievement. Our students and faculty collaborate across disciplines to create innovative and impactful work."
        buttonText="Join Our Community"
        buttonLink="#community"
        reverse={true}
      />
      
      <Location 
        image="/assets/location.jpg"
        title="Our Space"
        description={
          <div>
            <p>Whether you're a beginner looking to explore expressive movement or an advanced dancer ready to refine your technique, we have classes for you! Join our weekly sessions, <a href="#classes" style={{color: '#4169E1'}}>drop in for open-level classes</a>, or take part in our upcoming choreography series.</p>
            <p>Don't miss our special Masterclass with Maxime Longue this Saturday! Limited spots available.</p>
          </div>
        }
        linkText="View Our Facilities"
        linkUrl="#facilities"
        backgroundColor="#00008B"
      />
      
      <SubFooter />
      <Footer />
    </div>
  );
};

export default About;
