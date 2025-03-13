import React from 'react';
import ideaincLogo from '../../assets/logo.png';
import ideaLogo from '../../assets/bulb-idea-light.svg';
import feedback from '../../assets/feedback.svg';
import voting from '../../assets/voteinfo.svg';
import man from '../../assets/man.svg';
import woman from '../../assets/woman.svg';
// import Wishes from '../../assets/wishes.png'
import Wishes from '../../assets/wishes2.png'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
      <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-lime-100 tobg-lime-100 p-8 text-center">
          <div className="text-center">
                      <img src={ideaincLogo} alt="Idea Sharing" className="mx-auto h-50 " />
                      <img src={Wishes} alt="Idea Sharing" className="mx-auto h-20 mb-4" />

                  </div>
              <div className="max-w-3xl mx-auto">
                  {/* <h1 className="text-4xl text-green-600 mb-4"> <span className="text-4xl font-bold mb-4">W I S H E S</span></h1> */}

                  <h1 className="text-4xl font-bold mb-4"></h1>
                  {/* <p className="text-lg text-gray-700 mb-8">
                      Empower Your Team with Idea Sharing

                  </p> */}
                  <p className="text-lg text-gray-700 mb-8">

                       Fostering a culture of innovation and collaboration.
                  </p>
                  <Link to="/sign-up">
                  <button className="py-3 px-6 text-lg rounded-full text-white font-bold bg-gradient-to-b from-violet-300 to-lime-300 hover:from-violet-400 hover:to-lime-600">
                      Get Started
                  </button>
                  </Link>
              </div>
          </section>

          {/* Features Section */}
          <section className="py-8">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                  <div className="text-center">
                      <img src={ideaLogo} alt="Concepts Sharing" className="mx-auto h-12 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Proposals Sharing</h3>
                      <p className="text-gray-600">Easily submit and share innovative ideas with colleagues.</p>
                  </div>
                  <div className="text-center">
                      <img src={feedback} alt="Feedback Collection" className="mx-auto h-12 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Feedback Collection</h3>
                      <p className="text-gray-600">Gather constructive feedback to refine and improve concepts.</p>
                  </div>
                  <div className="text-center">
                      <img src={voting} alt="Voting & Prioritization" className="mx-auto h-12 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Voting & Prioritization</h3>
                      <p className="text-gray-600">Identify top ideas through voting and prioritization.</p>
                  </div>
              </div>
          </section>

          {/* About Platform Section */}
          <section className="bg-gray-100 py-16">
              <div className="max-w-3xl mx-auto p-4 text-center">
                  <h2 className="text-3xl font-bold mb-8">Unleash Your Team's Creativity</h2>
                  <p className="text-lg text-gray-700 mb-8">
                      Our platform empowers employees to share, discuss, and develop innovative ideas, fostering a culture of collaboration and growth.
                  </p>
                  <p className="text-lg text-gray-700">
                      Join a community where every idea matters and has the potential to drive meaningful change.
                  </p>
              </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                  <div className="border rounded-lg p-6">
                      <p className="text-gray-700 mb-4">"Idea has transformed how we gather feedback. The anonymity feature has been invaluable."</p>
                      <div className="flex items-center mt-4">
                          <img src={woman} alt="Sarah Chen" className="h-10 w-10 rounded-full mr-4" />
                          <div>
                              <h4 className="font-semibold">Sarah Chen</h4>
                              <p className="text-sm text-gray-600">Innovation Manager</p>
                          </div>
                      </div>
                  </div>
                  <div className="border rounded-lg p-6">
                      <p className="text-violet-50 mb-4">"The voting and discussion features have really streamlined our idea process."</p>
                      <div className="flex items-center mt-4">
                          <img src={man} alt="David Lee" className="h-10 w-10 rounded-full mr-4" />
                          <div>
                              <h4 className="font-semibold">David Lee</h4>
                              <p className="text-sm text-gray-600">Product Development Lead</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Call to Action Section */}
          <section className="bg-lime-50 py-16 text-center">
              <div className="max-w-3xl mx-auto p-4">
                  <h2 className="text-3xl font-bold mb-8">Ready to Boost Your Team's Innovation?</h2>
                  <button className="bg-lime-600 hover:bg-lime-800 text-white font-bold py-3 px-6 rounded-full">
                      Sign Up Now
                  </button>
              </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-4 bg-gray-100">
              © 2025 Idea INC. ALL RIGHTS RESERVED.
          </footer>
      </main>
  );
};

export default Landing;