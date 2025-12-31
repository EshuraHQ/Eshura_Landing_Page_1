import React, { useState, useEffect, useRef } from 'react';

const RAGProcessDiagram: React.FC = () => {
    // 7 steps animation sequence:
    // 0=Input (highlight), 1=path to Retrieval, 2=Retrieval (highlight),
    // 3=path to LLM, 4=LLM (highlight), 5=path to Output, 6=Output (highlight)
    const [activeStep, setActiveStep] = useState(0);
    const stepRef = useRef(0);

    useEffect(() => {
        const stepDuration = 1500; // Time per step

        const timer = setInterval(() => {
            stepRef.current = (stepRef.current + 1) % 7;
            setActiveStep(stepRef.current);
        }, stepDuration);

        return () => clearInterval(timer);
    }, []);

    // Ring positions along the dotted paths (y=100 is the horizontal center line)
    const ringPositions: { x: number; y: number }[] = [
        { x: 80, y: 100 },    // 0: Input Query center (not shown)
        { x: 175, y: 100 },   // 1: Path to Retrieval (midpoint)
        { x: 270, y: 100 },   // 2: Retrieval Source center (not shown)
        { x: 345, y: 100 },   // 3: Path to LLM (midpoint)
        { x: 410, y: 100 },   // 4: LLM Core center (not shown)
        { x: 480, y: 100 },   // 5: Path to Output (midpoint)
        { x: 542, y: 100 },   // 6: Output center (not shown)
    ];
    const currentRingPos = ringPositions[activeStep];

    // Ring visibility: visible ONLY on path steps (1, 3, 5)
    const isRingVisible = activeStep === 1 || activeStep === 3 || activeStep === 5;

    // Node highlights: visible ONLY on node steps (0, 2, 4, 6)
    const isInputActive = activeStep === 0;
    const isRetrievalActive = activeStep === 2;
    const isLLMActive = activeStep === 4;
    const isOutputActive = activeStep === 6;

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <svg
                viewBox="0 0 600 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-w-[600px] select-none"
            >
                {/* -- Arrows (Background Layer) -- */}
                <g className="transition-opacity duration-500">
                    {/* Input -> DB */}
                    <line
                        x1="120" y1="100"
                        x2="230" y2="100"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="text-gray-300 dark:text-gray-600"
                    />
                    <path d="M230 100 L225 97 L225 103 Z" fill="currentColor" className="text-gray-300 dark:text-gray-600" />

                    {/* DB -> LLM */}
                    <line
                        x1="310" y1="100"
                        x2="380" y2="100"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="text-gray-300 dark:text-gray-600"
                    />
                    <path d="M380 100 L375 97 L375 103 Z" fill="currentColor" className="text-gray-300 dark:text-gray-600" />

                    {/* LLM -> Output */}
                    <line
                        x1="440" y1="100"
                        x2="515" y2="100"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="text-gray-300 dark:text-gray-600"
                    />
                    <path d="M515 100 L510 97 L510 103 Z" fill="currentColor" className="text-gray-300 dark:text-gray-600" />
                </g>


                {/* -- 1. INPUT QUERY -- */}
                <g transform="translate(40, 80)">
                    {/* Rounded Rectangle */}
                    <rect
                        x="0" y="0"
                        width="80" height="40"
                        rx="12"
                        fill="none"
                        stroke={isInputActive ? "#4ADE80" : "currentColor"}
                        strokeWidth={isInputActive ? "2.5" : "2"}
                        className={`transition-colors duration-300 ${!isInputActive ? "text-black dark:text-white" : ""}`}
                    />
                    {/* Text inside box */}
                    <text
                        x="40" y="26"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="8"
                        fontWeight="600"
                        className="text-black dark:text-white font-sans"
                    >
                        INPUT QUERY
                    </text>
                </g>


                {/* -- 2. RETRIEVAL SOURCE -- */}
                <g transform="translate(270, 100)">
                    {/* Dotted Circle Outline */}
                    <circle
                        cx="0" cy="0"
                        r="45"
                        stroke={isRetrievalActive ? "#4ADE80" : "currentColor"}
                        strokeWidth={isRetrievalActive ? "2.5" : "1.5"}
                        strokeDasharray="4 4"
                        fill="none"
                        className={`transition-colors duration-300 ${!isRetrievalActive ? "text-gray-400 dark:text-gray-500" : ""}`}
                    />
                    {/* Top green Dot */}
                    <circle
                        cx="0" cy="-45" r="2.5"
                        fill={isRetrievalActive ? "#4ADE80" : "currentColor"}
                        className={`transition-colors duration-300 ${!isRetrievalActive ? "text-gray-400 dark:text-gray-500" : ""}`}
                    />

                    {/* Database Icon (Stack of 3 cylinders) */}
                    <g transform="translate(-18, -24)">
                        {/* Bottom cylinder */}
                        <path
                            d="M0 36 C0 40 36 40 36 36 V 42 C36 46 0 46 0 42 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-black dark:text-white"
                        />
                        <path
                            d="M0 36 C0 32 36 32 36 36"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-black dark:text-white"
                        />

                        {/* Middle cylinder */}
                        <path
                            d="M0 20 C0 24 36 24 36 20 V 26 C36 30 0 30 0 26 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-black dark:text-white"
                        />
                        <path
                            d="M0 20 C0 16 36 16 36 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-black dark:text-white"
                        />

                        {/* Top cylinder */}
                        <ellipse
                            cx="18" cy="4"
                            rx="18" ry="4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-black dark:text-white"
                        />
                        <path
                            d="M0 4 V 10 C0 14 36 14 36 10 V 4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-black dark:text-white"
                        />
                    </g>

                    {/* Label */}
                    <text
                        x="0" y="65"
                        textAnchor="middle"
                        fill="#000"
                        fontSize="12"
                        fontWeight="500"
                        className="dark:fill-white font-sans"
                    >
                        RETRIEVAL SOURCE
                    </text>
                </g>


                {/* -- 3. LLM CORE -- */}
                <g transform="translate(380, 70)">
                    {/* Chip Body */}
                    <rect
                        x="0" y="0"
                        width="60" height="60"
                        rx="10"
                        fill="none"
                        stroke={isLLMActive ? "#4ADE80" : "currentColor"}
                        strokeWidth={isLLMActive ? "2.5" : "2"}
                        className={`transition-colors duration-300 ${!isLLMActive ? "text-black dark:text-white" : ""}`}
                    />
                    {/* Circuit Lines */}
                    <g
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="text-black dark:text-white"
                    >
                        <rect x="20" y="20" width="20" height="20" rx="4" stroke="currentColor" />
                        <path d="M10 20 L20 20" />
                        <path d="M10 30 L20 30" />
                        <path d="M10 40 L20 40" />
                        <path d="M40 20 L50 20" />
                        <path d="M40 30 L50 30" />
                        <path d="M40 40 L50 40" />

                        <path d="M20 10 L20 20" />
                        <path d="M30 10 L30 20" />
                        <path d="M40 10 L40 20" />
                        <path d="M20 40 L20 50" />
                        <path d="M30 40 L30 50" />
                        <path d="M40 40 L40 50" />

                        <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
                        <circle cx="48" cy="48" r="1.5" fill="currentColor" opacity="0.8" />
                        <circle cx="12" cy="48" r="1.5" fill="currentColor" opacity="0.8" />
                        <circle cx="48" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
                    </g>

                    {/* Label */}
                    <text
                        x="30" y="85"
                        textAnchor="middle"
                        fill="#000"
                        fontSize="12"
                        fontWeight="500"
                        className="dark:fill-white font-sans"
                    >
                        LLM CORE
                    </text>
                </g>


                {/* -- 4. OUTPUT -- */}
                <g transform="translate(520, 75)">
                    {/* Chat Bubble */}
                    <path
                        d="M10 0 H35 C40.5 0 45 4.5 45 10 V 30 C45 35.5 40.5 40 35 40 H10 L0 50 V 10 C0 4.5 4.5 0 10 0 Z"
                        fill="none"
                        stroke={isOutputActive ? "#4ADE80" : "currentColor"}
                        strokeWidth={isOutputActive ? "2.5" : "2"}
                        className={`transition-colors duration-300 ${!isOutputActive ? "text-black dark:text-white" : ""}`}
                    />

                    {/* Green checkmark background circle - pulses when active */}
                    <circle
                        cx="22" cy="20"
                        r={isOutputActive ? 16 : 14}
                        fill="#4ADE80"
                        className="transition-all duration-300"
                    />

                    {/* Checkmark */}
                    <path
                        d="M15 20 L20 25 L30 14"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>

                {/* -- THE GREEN RING -- Only visible on path steps */}
                {isRingVisible && (
                    <circle
                        cx={currentRingPos.x}
                        cy={currentRingPos.y}
                        r="8"
                        fill="white"
                        stroke="#4ADE80"
                        strokeWidth="3"
                        className="dark:fill-[#1E1E1E] transition-all duration-700 ease-in-out"
                    />
                )}

            </svg>
        </div>
    );
};

export default RAGProcessDiagram;
