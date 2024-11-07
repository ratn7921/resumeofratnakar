import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import IMG from '../assets/WhatsApp Image 2024-10-12 at 11.19.04 AM.jpeg'; // Ensure this path is correct

const Resume = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg flex flex-col md:flex-row">
                {/* Left Section */}
                <div className="w-full md:w-1/3 bg-black text-white p-6 sm:p-8">
                    <img
                        src={IMG} // Use curly braces for variable
                        alt="Profile of Ratnakar Dashrath Yadav"
                        className="w-full h-auto mb-4 rounded"
                    />
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">Ratnakar Dashrath Yadav</h1>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Software Developer</h2>
                    <div className="mb-8">
                        <h2 className="text-lg sm:text-xl font-semibold mb-2">PROFILE</h2>
                        <p className="text-sm sm:text-base">
                         Passionate and driven soŌware developer with a strong foundaƟon in computer science, holding a Bachelor's 
degree in Computer ApplicaƟons Proficient in core Java,with hands-on liƩle bit experience in frameworks like 
React.js and Spring Boot. Adept at building scalable web applicaƟons, with a focus on backend development 
and soŌware engineering principles
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-2">CONTACT</h2>
                        <p className="text-sm sm:text-base">Pandharpur, India</p>
                        <p className="mt-4">
                            <FaPhoneAlt className="inline-block mr-1" />
                            <a href="tel:+919518904616" className="text-white hover:underline">9518904616</a>
                        </p>
                        <p>
                            <FaEnvelope className="inline-block mr-1" />
                            <a href="mailto:ratnakardashrathyadav1228@gmail.com" className="text-white hover:underline">ratnakardashrathyadav1228@gmail.com</a>
                        </p>
                        <p>
                            <FaTwitter className="inline-block mr-1" />
                            <a href="https://x.com/ratnakarspeeks" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">twitter.com</a>
                        </p>
                        <p>
                            <FaLinkedin className="inline-block mr-1" />
                            <a href="https://linkedin.com/in/ratnakar-dashrath-yadav-677750226" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">linkedin.com/in/ratnakar-dashrath-yadav-677750226</a>
                        </p>
                        <p>
                            <FaGithub className="inline-block mr-1" />
                            <a href="https://github.com/ratn7921" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">github.com/ratn7921</a>
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-2/3 p-6 sm:p-8">
                    {/* Education Section */}
                    <div className="mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">EDUCATION</h2>
                        <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                            <div className="w-full md:w-1/4 text-sm sm:text-base">06/2021 - 06/2024</div>
                            <div className="w-full md:w-1/4 text-sm sm:text-base">Graduation</div>
                            <div className="w-full md:w-3/4">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-black rounded-full mr-4"></div>
                                    <p className="text-sm sm:text-base">Bachelor of Computer Applications, Institute of Computer and Management Studies, Pandharpur, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                            <div className="w-full md:w-1/4 text-sm sm:text-base">06/2019-03/2021</div>
                            <div className="w-full md:w-1/4 text-sm sm:text-base">High school</div>
                            <div className="w-full md:w-3/4">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-black rounded-full mr-4"></div>
                                    <p className="text-sm sm:text-base">Vivek Vardhini Vidyalaya Jr College, Pandharpur, India - Passout in 11th & 12th with 65%, Commerce Stream</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">ACHIEVEMENTS</h2>
                        <div className="flex items-center mb-4">
                            <div className="w-1/4 text-sm sm:text-base">2024</div>
                            <div className="w-3/4">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-black rounded-full mr-4"></div>
                                    <p className="text-sm sm:text-base">Participated in SKN Pandharpur Hackathon 2k24. Worked on an AI-based job finder project, contributing to both frontend and backend development.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">SKILLS</h2>
                        <div className="mb-4">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Technical Skills</h3>
                            <p className="text-sm sm:text-base">Proficient in  Java, C/C++, JavaScript; experienced in software development ( Git,GITHUB), web development (HTML, CSS, javascript, React.js, Node.js), and database management (MySQL, MongoDB).</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Soft Skills</h3>
                            <p className="text-sm sm:text-base">Strong problem-solving, teamwork, and communication skills.</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Research Skills</h3>
                            <p className="text-sm sm:text-base">Experience in literature review, data analysis, experiment design, and independent research.</p>
                        </div>
                    </div>

                    {/* Professional Experience Section */}
                    <div className="mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">PROFESSIONAL EXPERIENCE</h2>
                        <div className="mb-4">
                            <div className="flex flex-col sm:flex-row justify-between">
                                <span className="text-sm sm:text-base">01/2022 – 06/2022</span>
                                <span className="text-sm sm:text-base">Web Development Intern</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-black rounded-full"></div>
                                <div className="w-full pl-4">
                                    <p className="text-sm sm:text-base">Codeseed, Pandharpur, India</p>
                                    <ul className="list-disc pl-5 text-sm sm:text-base">
                                        <li>Collaborated on the development of a school website, focusing on user experience.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4">PROJECTS</h2>
                        <div className="flex items-center mb-4">
                            <div className="w-full">
                                <div className="w-4 h-4 bg-black rounded-full"></div>
                                <div className="w-full pl-4">
                                    <p className="text-sm sm:text-base font-semibold">AI-based Job Finder - Python</p>
                                    <ul className="list-disc pl-5 text-sm sm:text-base">
                                        <li>Collaborated on an AI-based project using machine learning to find jobs based on preferences.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-full">
                                <div className="w-4 h-4 bg-black rounded-full"></div>
                                <div className="w-full pl-4">
                                    <p className="text-sm sm:text-base font-semibold">Bank Management System - Java</p>
                                    <ul className="list-disc pl-5 text-sm sm:text-base">
                                        <li>Developed a GUI-based banking system using Java Swing.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
