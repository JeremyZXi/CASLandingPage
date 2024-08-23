import React, { useState, useEffect } from 'react';

const Contributors = ({ repos }) => {
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        const fetchContributors = async () => {
            try {
                const contributorsMap = new Map();

                for (const repo of repos) {
                    const response = await fetch(`https://api.github.com/repos/${repo}/contributors`);
                    const data = await response.json();

                    data.forEach(contributor => {
                        if (contributorsMap.has(contributor.id)) {
                            contributorsMap.get(contributor.id).contributions += contributor.contributions;
                        } else {
                            contributorsMap.set(contributor.id, contributor);
                        }
                    });
                }

                const combinedContributors = Array.from(contributorsMap.values())
                    .sort((a, b) => b.contributions - a.contributions)
                    .slice(0, 50);

                setContributors(combinedContributors);
            } catch (error) {
                console.error('Error fetching contributors:', error);
            }
        };

        fetchContributors();
    }, [repos]);

    // 计算一行的宽度：10个头像（每个32px）+ 9个间隔（每个8px）
    const rowWidth = (20 * 32) + (9 * 8);

    return (
        <div className="mt-6 w-full">
            <h3 className="text-lg font-semibold mb-4">Special Thanks</h3>

                <div style={{ width: `${rowWidth}px`, margin: '0 auto' }}>
                    <div className="flex flex-wrap" style={{ gap: '8px' }}>
                        {contributors.map(contributor => (
                            <a
                                key={contributor.id}
                                href={contributor.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-110"
                                title={`${contributor.login} (${contributor.contributions} contributions)`}
                            >
                                <img
                                    src={contributor.avatar_url}
                                    alt={`${contributor.login}'s avatar`}
                                    className="w-8 h-8 rounded-full"
                                />
                            </a>
                        ))}
                    </div>
                </div>

        </div>
    );
};

export default Contributors;
