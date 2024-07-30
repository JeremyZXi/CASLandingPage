import React from 'react';

const Footer = () => (
    <footer className="bg-[rgb(25,34,54)] text-white p-4 mt-8">
        <div className="container mx-auto text-center">
            <p>
                <a href="https://keycas.cn/" rel="noopener noreferrer" target="_blank">
                    KeyCAS
                </a> by{' '}
                <a href="https://jeremyzxi.github.io/KeyArchive/" rel="noopener noreferrer" target="_blank">
                    Xiyan Zhang, Guanxi Mei, Xinyu Gao, Mingqian Liao, Jiale Chen
                </a>{' '}
                is licensed under{' '}
                <a
                    href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                    CC BY-NC 4.0
                    <img
                        style={{ height: '22px', marginLeft: '3px' }}
                        src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                        alt="Creative Commons License"
                    />
                    <img
                        style={{ height: '22px', marginLeft: '3px' }}
                        src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                        alt="Attribution"
                    />
                    <img
                        style={{ height: '22px', marginLeft: '3px' }}
                        src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
                        alt="NonCommercial"
                    />
                </a>
            </p>
        </div>
    </footer>
);

export default Footer;







