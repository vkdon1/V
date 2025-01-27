import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-500">
            About VD LearnNest
          </h1>
        </header>
        <img
          src="https://img.freepik.com/premium-vector/diverse-people-embracing-concept-ethnic-harmony-friendship_1263357-34871.jpg?semt=ais_hybrid"
          alt="Team Member 3"
          className="w-96 h-96 rounded-full mx-auto"
        />
        {/* Mission and Vision Section */}
        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-purple-500">
            Our Mission & Vision
          </h2>
          <p className="mt-4 text-lg text-white">
            At VD LearnNest, we are committed to providing quality educational
            resources to help learners excel in their careers. Our mission is to
            foster an environment of growth, learning, and innovation. We aim to
            provide accessible tutorials, resources, and expert insights to
            learners across the globe.
          </p>
          <p className="mt-4 text-lg text-white">
            Our vision is to empower students and professionals with the
            knowledge and skills they need to succeed in an ever-changing
            digital world. We strive to be a leading platform for tech
            education, offering the most up-to-date content, hands-on
            experience, and community support.
          </p>
        </section>

        {/* Our Team Section */}
        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-purple-500">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-white">
            Our team is made up of passionate professionals with years of
            experience in technology, education, and development. We come from
            diverse backgrounds but share a common goal: to provide the best
            possible learning experience to our users.
          </p>
          <div className="flex justify-center gap-8 mt-6">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOLBRK-3wEFFeCojWlHou4nooggl5iI2PJQ&s"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold text-purple-500 mt-2">
                Vallabh Dongre
              </h3>
              <p className="text-white">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznZ4Z5cmvQgF8Cx_BmCaWg-UP5v6fxKzu4Q&s"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold text-purple-500 mt-2">
                Rohit Shinde
              </h3>
              <p className="text-white">Lead Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aTSSJacbr5jZ-dy48yVdhOce38hceq3nvg&s"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold text-purple-500 mt-2">
                Karan Mishra
              </h3>
              <p className="text-white">Content Manager</p>
            </div>
          </div>
        </section>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKrNDnSytOhm1segf2X3kR7i2WFOGu6nW_g&s"
          alt="Team Member 3"
          className="w-96 h-96 rounded-full mx-auto"
        />
        {/* Our Values Section */}
        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-purple-500">Our Values</h2>
          <p className="mt-4 text-lg text-white">
            We believe in providing a safe, inclusive, and supportive
            environment where learners can thrive. Our core values include:
          </p>
          <ul className="mt-6 text-white list-disc list-inside">
            <li>Integrity and honesty in all our actions</li>
            <li>Commitment to continuous learning and improvement</li>
            <li>Empowering learners to succeed at their own pace</li>
            <li>Innovation in education and learning methods</li>
          </ul>
        </section>

        {/* Contact CTA Section */}
        <section className="text-center mt-10">
          <h2 className="text-3xl font-semibold text-purple-500">
            Join Us in Our Journey
          </h2>
          <p className="mt-4 text-lg text-white">
            Whether you're a student, professional, or educator, we invite you
            to join our growing community. Together, let's make learning
            accessible, enjoyable, and impactful.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
