import React, { useState } from 'react';
import {
    Facebook,
    Youtube,
    Instagram,
    Twitter,
    Send,
    Ghost,
    MessageCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export const SpinningLogos: React.FC = () => {
    const radiusToCenterOfIcons = 135;
    const iconWrapperWidth = 50;
    const ringPadding = 20;

    const [isHovered, setIsHovered] = useState(false);
    const [hoveredLogoName, setHoveredLogoName] = useState<string | null>(null);

    const toRadians = (degrees: number): number => (Math.PI / 180) * degrees;

    const logos = [
        {
            Icon: Instagram,
            className: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white',
            name: 'Instagram',
            link: 'https://www.instagram.com/itz_me._jaya_/',
            hoverText: 'itz_me.jaya_'
        },
        {
            Icon: Send,
            className: 'bg-sky-500 text-white',
            name: 'Telegram',
            hoverText: '8248383907'
        },
        {
            Icon: Ghost,
            className: 'bg-yellow-400 text-white',
            name: 'Snapchat',
            link: 'https://www.snapchat.com/add/jayaraj-m?share_id=JZ5WXaOA18k&locale=en-GB',
            hoverText: 'Jaya Raj.m'
        },
        {
            Icon: Facebook,
            className: 'bg-blue-600 text-white',
            name: 'Facebook',
            hoverText: 'JayaRaj M'
        },
        {
            Icon: MessageCircle,
            className: 'bg-green-500 text-white',
            name: 'Whatsapp',
            hoverText: '8248383907'
        },
        {
            Icon: Twitter,
            className: 'bg-black text-white',
            name: 'Twitter',
            hoverText: 'JayaRaj M'
        },
        {
            Icon: Youtube,
            className: 'bg-red-600 text-white',
            name: 'YouTube',
            hoverText: 'Jayarajchennal'
        },
    ];

    return (
        <div
            className="flex justify-center items-center p-8 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setHoveredLogoName(null);
            }}
        >
            <div
                style={{
                    width: radiusToCenterOfIcons * 2 + iconWrapperWidth + ringPadding,
                    height: radiusToCenterOfIcons * 2 + iconWrapperWidth + ringPadding,
                }}
                className="relative rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            >
                <div
                    className="absolute inset-0 animate-spin-slow"
                    style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                >
                    {logos.map((logo, index) => {
                        const angle = (360 / logos.length) * index;

                        const IconContent = (
                            <div
                                style={{
                                    top: `calc(50% - ${iconWrapperWidth / 2}px + ${radiusToCenterOfIcons * Math.sin(toRadians(angle))}px)`,
                                    left: `calc(50% - ${iconWrapperWidth / 2}px + ${radiusToCenterOfIcons * Math.cos(toRadians(angle))}px)`,
                                    width: iconWrapperWidth,
                                    height: iconWrapperWidth,
                                    animationPlayState: isHovered ? 'paused' : 'running'
                                }}
                                className={cn(
                                    "absolute flex items-center justify-center rounded-full shadow-lg border border-white/20 animate-spin-reverse transition-transform cursor-pointer z-20",
                                    logo.className,
                                    isHovered ? "scale-110" : "hover:scale-110"
                                )}
                                aria-label={`${logo.name} logo`}
                                onMouseEnter={() => setHoveredLogoName(logo.name)}
                                onMouseLeave={() => setHoveredLogoName(null)}
                            >
                                <logo.Icon className="w-6 h-6" />

                                <AnimatePresence>
                                    {hoveredLogoName === logo.name && logo.hoverText && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
                                        >
                                            {logo.hoverText}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );

                        if (logo.link) {
                            return (
                                <a
                                    key={index}
                                    href={logo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="outline-none"
                                >
                                    {IconContent}
                                </a>
                            );
                        }

                        return <React.Fragment key={index}>{IconContent}</React.Fragment>;
                    })}
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white/20 p-1 bg-white/10 backdrop-blur-md">
                        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-emerald-500 to-cyan-500">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
