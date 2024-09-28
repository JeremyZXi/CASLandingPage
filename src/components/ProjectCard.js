import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { colorSchemes } from '../utils/colorSchemes';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, isHero = false }) => {
    const Icon = project.icon;
    const colorScheme = colorSchemes[project.color] || colorSchemes.default;

    return (
        <Card className={`h-full ${colorScheme.background} ${colorScheme.text} flex flex-col overflow-hidden shadow-lg`}>
            <div className="relative h-1/3 overflow-hidden flex-shrink-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                    <Icon className="h-6 w-6" />
                    <CardTitle className="text-xl truncate ml-2">
                        {project.title}
                    </CardTitle>
                </div>
            </div>
            <CardContent className="flex-grow py-4">
                <CardDescription className={`${colorScheme.description} text-sm mb-2`}>
                    {project.student}
                </CardDescription>
                <p className="text-sm font-semibold mb-2">{project.category}</p>
                <p className="mt-2 line-clamp-3">{project.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
                <Button
                    className={`${colorScheme.button} w-full group flex items-center justify-center gap-2 transition-all duration-300 ease-in-out`}
                    onClick={() => window.open(project.url, "_blank")}
                >
                    View Project
                    <FaExternalLinkAlt className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
