import React from 'react';
import Contributors from "./Contributors";
const Footer = () => {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/your-github', icon: 'assests/github-mark-white.svg' },
    ];

    const quickLinks = [
        { name: 'About', url: '/about' },
        { name: 'Documentation', url: 'https://keycas-doc.github.io/' },
        { name: 'FAQ', url: '/faq' },
        { name: 'Support', url: 'https://keycas-doc.github.io/' },
    ];

    const relatedProjects = [
        { name: 'GrapesJS', url: 'https://grapesjs.com/' },
        { name: 'Silex', url: '/project-b' },
        { name: 'Gitlab', url: 'https://gitlab.com/gitlab-org/gitlab'}
    ];
    const repos = [
        'JeremyZXi/KeyCAS',
        'KeyCAS-Doc/keycas-doc.github.io',
        'JeremyZXi/CASLandingPage'
    ];
    return (
        <footer className="bg-[rgb(25,34,54)] text-white py-8 mt-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">KeyCAS</h3>
                        <p className="text-sm">Version 1.0.0beta</p>
                        <div className="flex mt-4 space-x-4">
                            {socialLinks.map((link) => (
                                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                    <img src={link.icon} alt={link.name} className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.url} className="hover:text-gray-300 text-sm">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Related Open-source Projects</h3>
                        <ul className="space-y-2">
                            {relatedProjects.map((project) => (
                                <li key={project.name}>
                                    <a href={project.url} className="hover:text-gray-300 text-sm">{project.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support Us</h3>
                            <a href="https://keycas-doc.github.io/docs/development" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Contribute
                            </a>

                        </div>

                        {/* Alex Hoyau acknowledgment */}
                        <div className="mt-4">
                            <p className="text-sm">
                                Big thanks to <a href="https://github.com/lexoyo" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Alex Hoyau</a> who has created <a href="https://www.silex.me/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Silex</a>, the free web builder we used in our project, and been super helpful in answering our naive questions!
                            </p>
                        </div>
                    </div>
                    <Contributors repos={repos} />
                </div>


                <div className="mt-8 pt-8 border-t border-gray-700">
                    <p className="text-sm text-center">
                        <a href="https://keycas.cn/" className="hover:text-gray-300" rel="noopener noreferrer" target="_blank">
                            KeyCAS
                        </a> by{' '}
                        <a href="https://jeremyzxi.github.io/KeyArchive/" className="hover:text-gray-300" rel="noopener noreferrer" target="_blank">
                            Xiyan Zhang, Guanxi Mei, Xinyu Gao, Mingqian Liao, Jiale Chen
                        </a>{' '}
                        is licensed under{' '}
                        <a
                            href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center hover:text-gray-300"
                        >
                            CC BY-NC 4.0
                            <img className="h-5 ml-1" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="Creative Commons License" />
                            <img className="h-5 ml-1" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="Attribution" />
                            <img className="h-5 ml-1" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt="NonCommercial" />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
