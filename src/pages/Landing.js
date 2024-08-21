import React, { useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import Highlighter from "react-highlight-words";
import Navbar from '../components/Navbar';
import Hero from "../components/hero";
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

const Landing = () => {
    const [searchInput, setSearchInput] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchResults, setSearchResults] = useState(projects);
    const [suggestions, setSuggestions] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    const categories = ['All', ...new Set(projects.map(project => project.category))];

    const fuse = useMemo(() => new Fuse(projects, {
        keys: [
            { name: 'title', weight: 0.4 },
            { name: 'category', weight: 0.3 },
            { name: 'description', weight: 0.2 },
            { name: 'student', weight: 0.1 }
        ],
        threshold: 0.4,
        includeMatches: true,
        useExtendedSearch: true,
    }), []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const searchTerms = searchInput.trim().split(/\s+/).filter(term => term.length > 0);

            if (searchTerms.length > 0) {
                const searchQuery = searchTerms.map(term => ({
                    $and: [{ $or: [{ title: term }, { category: term }, { description: term }, { student: term }] }]
                }));
                const results = fuse.search({ $and: searchQuery });
                const filtered = results
                    .map(result => ({ ...result.item, matches: result.matches }))
                    .filter(project => selectedCategory === 'All' || project.category === selectedCategory);
                setSearchResults(filtered);

                const uniqueSuggestions = [...new Set(results.flatMap(result =>
                    result.matches.flatMap(match => match.value.split(' '))
                ))];
                setSuggestions(uniqueSuggestions.filter(suggestion =>
                    !searchTerms.includes(suggestion)
                ).slice(0, 5));
            } else {
                setSearchResults(projects.filter(project =>
                    selectedCategory === 'All' || project.category === selectedCategory
                ));
                setSuggestions([]);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchInput, selectedCategory, fuse]);

    const highlightText = (text, matches) => {
        if (!matches) return text;
        const searchTerms = searchInput.trim().split(/\s+/).filter(term => term.length > 0);
        return (
            <Highlighter
                highlightClassName="bg-yellow-200"
                searchWords={searchTerms}
                autoEscape={true}
                textToHighlight={text}
            />
        );
    };

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchInput(prevInput => {
            const terms = prevInput.trim().split(/\s+/).filter(term => term.length > 0);
            return [...terms, suggestion].join(' ');
        });
    };

    return (
        <div className="min-h-screen bg-[rgb(255,255,255)]">
            <Navbar />
            <Hero />
            <main className="container mx-auto p-4">
                <div className="mb-6 flex flex-col sm:flex-row gap-4 relative">
                    <div className="flex-grow relative">
                        <motion.div
                            initial={false}
                            animate={isFocused ? { boxShadow: "0 0 0 2px #3b82f6" } : { boxShadow: "0 0 0 0px #3b82f6" }}
                            transition={{ duration: 0.2 }}
                            className="relative flex items-center bg-white rounded-lg shadow-md"
                        >
                            <FaSearch className="absolute left-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search projects (use space for multiple keywords)..."
                                className="w-full p-3 pl-10 pr-10 border-none rounded-lg focus:outline-none"
                                value={searchInput}
                                onChange={handleSearchChange}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                            />
                            {searchInput && (
                                <button
                                    onClick={clearSearch}
                                    className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    <FaTimes />
                                </button>
                            )}
                        </motion.div>
                        <AnimatePresence>
                            {isFocused && suggestions.length > 0 && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-2 shadow-lg"
                                >
                                    {suggestions.map((suggestion, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="p-3 hover:bg-gray-100 cursor-pointer transition-colors duration-150 ease-in-out"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            <span className="font-medium">{suggestion}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                    <select
                        className="p-3 border border-gray-300 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                {searchResults.length === 0 ? (
                    <p className="text-center text-gray-500">No projects found matching your search.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {searchResults.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={{
                                    ...project,
                                    title: highlightText(project.title, project.matches),
                                    description: highlightText(project.description, project.matches),
                                }}
                            />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Landing;
