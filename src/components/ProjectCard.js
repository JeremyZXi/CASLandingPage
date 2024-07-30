import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { colorSchemes } from '../utils/colorSchemes';

const ProjectCard = ({ project }) => {
    const Icon = project.icon;
    const colorScheme = colorSchemes[project.color] || colorSchemes.default;

    const sizeClasses = {
        small: "sm:col-span-1 sm:row-span-1",
        medium: "sm:col-span-1 sm:row-span-2",
        wide: "sm:col-span-2 sm:row-span-1",
        tall: "sm:col-span-1 sm:row-span-3",
    };

    const titleSizeClasses = {
        small: "text-lg",
        medium: "sm:text-xl",
        wide: "sm:text-xl",
        tall: "sm:text-2xl",
    };

    const contentClasses = {
        small: "text-sm",
        medium: "sm:text-base",
        wide: "sm:text-base",
        tall: "sm:text-lg",
    };

    const buttonSizeClasses = {
        small: "text-xs px-2 py-1",
        medium: "sm:text-sm sm:px-3 sm:py-1.5",
        wide: "sm:text-sm sm:px-3 sm:py-1.5",
        tall: "sm:text-base sm:px-4 sm:py-2",
    };

    return (
        <Card className={`mb-4 sm:mb-0 ${sizeClasses[project.size]} ${colorScheme.background} ${colorScheme.text} flex flex-col overflow-hidden`}>
            {project.image && (
                <img src={project.image} alt={project.title} className="w-full h-32 sm:h-1/3 object-cover" />
            )}
            <CardHeader>
                <CardTitle className={`flex items-center gap-2 text-lg ${titleSizeClasses[project.size]}`}>
                    <Icon className="h-6 w-6" />
                    {project.title}
                </CardTitle>
                <CardDescription className={`${colorScheme.description} text-sm ${contentClasses[project.size]}`}>{project.student}</CardDescription>
            </CardHeader>
            <CardContent className={`flex-grow text-sm ${contentClasses[project.size]}`}>
                <p>{project.category}</p>
                <p className="mt-2">{project.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
                <Button
                    className={`${colorScheme.button} text-xs px-2 py-1 ${buttonSizeClasses[project.size]}`}
                    onClick={() => window.open(project.url, "_blank")}
                >
                    View Project
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
