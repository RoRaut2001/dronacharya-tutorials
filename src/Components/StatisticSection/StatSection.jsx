import React, { useState, useEffect, useRef } from 'react';

const parseValue = (value) => {
    const match = value.match(/^\d+/);
    return match ? parseInt(match[0], 10) : 0;
};

const AnimatedCounter = ({ value, className }) => {
    const finalNumber = parseValue(value);
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animateCount(finalNumber);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 1.0,
            }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [finalNumber]);

    const animateCount = (target) => {
        const duration = 1000;
        let startTimestamp = null;
        const startValue = 0;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            let percentage = progress / duration;
            if (percentage > 1) percentage = 1;

            const easedPercentage = 1 - Math.pow(1 - percentage, 2);

            const currentValue = Math.floor(startValue + (target - startValue) * easedPercentage);

            setCount(currentValue);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        window.requestAnimationFrame(step);
    };

    const suffix = value.replace(/^\d+/, '');

    return (
        <p ref={counterRef} className={className}>
            {count}
            {suffix}
        </p>
    );
};

export default function StatsSection() {
    const stats = [
        { value: "50+", label: "Features" },
        { value: "5000+", label: "Students" },
        { value: "4000+", label: "Tutors" },
        { value: "200+", label: "Subjects" },
    ];

    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-12 shadow-inner border-t border-gray-100">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-around items-center gap-y-8">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center w-1/2 sm:w-auto px-2">
                        <AnimatedCounter
                            value={stat.value}
                            className="text-4xl sm:text-5xl font-extrabold text-blue-700"
                        />
                        <p className="text-sm sm:text-lg text-gray-600 mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};