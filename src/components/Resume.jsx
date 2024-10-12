import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import IMG from '../assets/WhatsApp Image 2024-10-12 at 11.19.04 AM.jpeg'; // Ensure this path is correct

const Resume = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-black text-white p-8">
                    <img
                        src={IMG} // Use curly braces for variable
                        alt="Profile of Ratnakar Dashrath Yadav"
                        className="w-full h-auto mb-4 rounded"
                    />
                    <h1 className="text-3xl font-bold mb-4">Ratnakar Dashrath Yadav</h1>
                    <h2 className="text-xl font-semibold mb-2">Software Developer</h2>
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">PROFILE</h2>
                        <p>
                            Passionate and driven software developer with a Bachelor's degree in Computer Applications and currently pursuing a Master's degree in Computer Applications.
                            Proficient in core programming languages including Java, JavaScript, and Python, with hands-on experience in frameworks such as React.js and Spring Boot.
                            Adept at building scalable web applications, focusing on backend development, software engineering principles, and implementing AI algorithms.
                            Eager to contribute to innovative research projects and explore new areas in computer science through a research internship at Max Planck Institutes.
                        </p>
                    </div>
                    <div>
    <h2 className="text-xl font-semibold mb-2">CONTACT</h2>
    <p>Pandharpur, India</p>
    <p className="mt-4">
        <FaPhoneAlt className="inline-block mr-1" />
        <a href="tel:+919518904616" className="text-black-500 hover:underline">9518904616</a>
    </p>
    <p>
        <FaEnvelope className="inline-block mr-1" />
        <a href="mailto:ratnakardashrathyadav1228@gmail.com" className="text-black-500 hover:underline">ratnakardashrathyadav1228@gmail.com</a>
    </p>
    <p>
        <FaTwitter className="inline-block mr-1" />
        <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer" className="text-black-500 hover:underline">twitter.com/yourtwitterhandle</a>
    </p>
    <p>
        <FaLinkedin className="inline-block mr-1" />
        <a href="https://linkedin.com/in/ratnakar-dashrath-yadav-677750226" target="_blank" rel="noopener noreferrer" className="text-black-500 hover:underline">linkedin.com/in/ratnakar-dashrath-yadav-677750226</a>
    </p>
    <p>
        <FaGithub className="inline-block mr-1" />
        <a href="https://github.com/ratn7921" target="_blank" rel="noopener noreferrer" className="text-black-500 hover:underline">github.com/ratn7921</a>
    </p>
</div>

                </div>

                <div className="w-full md:w-2/3 p-8">
                    {/* Education Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
                        <div className="flex items-center mb-4">
                            <div className="w-1/4"> 06/2021 - 06/2024</div>
                            <div className="w-1/4">Graduation</div>

                            <div className="w-3/4">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-black rounded-full mr-4"></div>
                                    <p>Bachelor of Computer Applications, Institute of Computer and Management Studies, Pandharpur, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-1/4">06/2019-03/2021</div>
                            <div className="w-1/4">High school</div>

                            <div className="w-3/4">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-black rounded-full mr-4"></div>
                                    <p>Vivek Vardhini Vidyalaya Jr College, Pandharpur, India - Passout in 11th & 12th with 65%, Commerce Stream</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">ACHIEVEMENTS</h2>
                        <div className="flex items-center mb-4">
                            <div className="w-1/4">2024</div>
                            <div className="w-3/4">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-black rounded-full mr-4"></div>
                                    <p>Participated in SKN Pandharpur Hackathon 2k24. Worked on an AI-based job finder project, contributing to both frontend and backend development. Gained valuable experience in teamwork, problem-solving, and project management.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                            <p>Proficient in Python, Java, C/C++, JavaScript; experienced in software development (Agile, Git), web development (HTML, CSS, React.js, Node.js), data structures, algorithms, machine learning (TensorFlow, PyTorch), and database management (MySQL, MongoDB).</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
                            <p>Strong problem-solving, teamwork, and communication skills; adaptable and effective in time management.</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Research Skills</h3>
                            <p>Experience in literature review, data analysis, experiment design, and independent research.</p>
                        </div>
                    </div>

                    {/* Professional Experience Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">PROFESSIONAL EXPERIENCE</h2>
                        <div className="mb-4">
                            <div className="flex justify-between">
                                <span>01/2022 – 06/2022</span>
                                <span>Web Development Intern</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-1/12">
                                    <div className="h-4 w-4 bg-black rounded-full"></div>
                                </div>
                                <div className="w-11/12 pl-4">
                                    <p>Codeseed, Pandharpur, India</p>
                                    <ul className="list-disc pl-5">
                                        <li>Collaborated on the development of a school website, focusing on improving user experience and functionality.</li>
                                        <li>Gained hands-on experience in web technologies and software development practices.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
                        <div className="mb-4">
                            <div className="flex justify-between">
                                <span>Hackathon 2024</span>
                                <span>AI-Based Job Finder</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-1/12">
                                    <div className="h-4 w-4 bg-black rounded-full"></div>
                                </div>
                                <div className="w-11/12 pl-4">
                                    <p>Developed an AI-driven job finder application during the SKN Pandharpur Hackathon 2024. Contributed to both frontend and backend development, implementing AI algorithms to match job seekers with relevant opportunities. Achieved 5th place, demonstrating strong teamwork and project management skills.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between">
                                <span>Job Portfolio Builder</span>
                                <span>Rest API, React.js, JavaScript, HTML/CSS, Node.js, MySQL, Docker, Git</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-1/12">
                                    <div className="h-4 w-4 bg-black rounded-full"></div>
                                </div>
                                <div className="w-11/12 pl-4">
                                    <p>Created a customizable tool for building portfolio websites, featuring a variety of templates and drag-and-drop components. Implemented live previews to enhance the user experience and flexibility in design choices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
