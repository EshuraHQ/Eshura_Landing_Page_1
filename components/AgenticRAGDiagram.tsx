import React, { useState, useEffect } from 'react';

const AgenticRAGDiagram: React.FC = () => {
    // 11 steps animation sequence:
    // 0=Input (highlight), 1=path, 2=Retrieval (highlight), 3=path up, 4=Tools (ring+highlight),
    // 5=path down, 6=Retrieval return (highlight), 7=path down, 8=LLM (highlight), 
    // 9=path to output, 10=Output (highlight)
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const stepDuration = 750;

        const timer = setInterval(() => {
            setActiveStep((prev) => {
                const next = prev + 1;
                return next > 10 ? 0 : next;
            });
        }, stepDuration);

        return () => clearInterval(timer);
    }, []);

    // Ring positions tracing along the dotted paths
    const ringPositions: { x: number; y: number }[] = [
        { x: 40, y: 175 },    // 0: Input Query (not shown)
        { x: 100, y: 145 },   // 1: Along path to Retrieval
        { x: 190, y: 120 },   // 2: Retrieval Agent (not shown)
        { x: 190, y: 80 },    // 3: Path up toward Tools
        { x: 190, y: 50 },    // 4: Tools area (ring visible with highlight)
        { x: 190, y: 80 },    // 5: Path back down
        { x: 190, y: 120 },   // 6: Retrieval Agent return (not shown)
        { x: 190, y: 170 },   // 7: Path down toward LLM
        { x: 190, y: 225 },   // 8: LLM Core (not shown)
        { x: 270, y: 210 },   // 9: Along path to Final Response
        { x: 350, y: 170 },   // 10: Final Response (not shown)
    ];
    const currentRingPos = ringPositions[activeStep];

    // Ring visibility: visible ONLY on path steps (1, 3, 4, 5, 7, 9)
    // Step 4 is special - ring stays visible with tools highlight
    const isRingVisible = [1, 3, 4, 5, 7, 9].includes(activeStep);

    // Node highlights: visible ONLY on node steps (0, 2, 4, 6, 8, 10)
    // Step 4 is special - both ring and tools highlight visible
    const isInputActive = activeStep === 0;
    const isRetrievalActive = activeStep === 2 || activeStep === 6;
    const isToolsActive = activeStep === 4;
    const isLLMActive = activeStep === 8;
    const isOutputActive = activeStep === 10;

    return (
        <div className="w-full h-full flex items-center justify-center p-2">
            <svg
                viewBox="0 0 420 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-w-[420px] select-none"
            >
                {/* Global offset to move diagram down */}
                <g transform="translate(0, 30)">
                    {/* ============================================ */}
                    {/* CONNECTION PATHS (dashed lines only)         */}
                    {/* ============================================ */}

                    {/* 1. Input Query to Retrieval Agent */}
                    <path
                        d="M75 175 C100 175 100 120 140 120"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="none"
                        className="text-gray-400 dark:text-gray-500"
                    />

                    {/* 2. Retrieval Agent to Tools (upward) */}
                    <path
                        d="M190 90 L190 70"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="none"
                        className="text-gray-400 dark:text-gray-500"
                    />

                    {/* 3. Retrieval Agent to LLM Core (downward) */}
                    <path
                        d="M190 150 L190 195"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="none"
                        className="text-gray-400 dark:text-gray-500"
                    />

                    {/* 4. LLM Core to Final Response */}
                    <path
                        d="M230 230 C280 230 280 175 310 175"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="none"
                        className="text-gray-400 dark:text-gray-500"
                    />


                    {/* ============================================ */}
                    {/* 1. INPUT QUERY (White rounded pill)          */}
                    {/* ============================================ */}
                    <g transform="translate(5, 155)">
                        <rect
                            x="0" y="0"
                            width="70" height="40"
                            rx="20"
                            fill="none"
                            stroke={isInputActive ? "#4ADE80" : "currentColor"}
                            strokeWidth={isInputActive ? "2.5" : "2"}
                            className={`transition-colors duration-300 ${!isInputActive ? "text-black dark:text-white" : ""}`}
                        />
                        <text
                            x="35" y="26"
                            textAnchor="middle"
                            fill="currentColor"
                            fontSize="8"
                            fontWeight="600"
                            className="text-black dark:text-white font-sans"
                        >
                            INPUT QUERY
                        </text>
                    </g>


                    {/* ============================================ */}
                    {/* 2. RETRIEVAL AGENT                           */}
                    {/* ============================================ */}
                    <g transform="translate(140, 90)">
                        <rect
                            x="0" y="0"
                            width="100" height="60"
                            rx="6"
                            fill="none"
                            stroke={isRetrievalActive ? "#4ADE80" : "currentColor"}
                            strokeWidth={isRetrievalActive ? "2.5" : "2"}
                            className={`transition-colors duration-300 ${!isRetrievalActive ? "text-black dark:text-white" : ""}`}
                        />
                        <text
                            x="50" y="26"
                            textAnchor="middle"
                            fill="currentColor"
                            fontSize="11"
                            fontWeight="600"
                            className="text-black dark:text-white font-sans"
                        >
                            Retrieval
                        </text>
                        <text
                            x="50" y="42"
                            textAnchor="middle"
                            fill="currentColor"
                            fontSize="11"
                            fontWeight="600"
                            className="text-black dark:text-white font-sans"
                        >
                            Agent
                        </text>
                    </g>


                    {/* ============================================ */}
                    {/* 3. TOOL ICONS (6 circles - 4 top, 2 bottom)  */}
                    {/* ============================================ */}
                    <g transform="translate(120, 5)">
                        {/* Row 1: 4 icons */}
                        <g transform="translate(0, 0)">
                            <circle
                                cx="16" cy="16" r="16"
                                stroke={isToolsActive ? "#4ADE80" : "currentColor"}
                                strokeWidth={isToolsActive ? "2" : "1.2"}
                                fill="none"
                                className={`transition-colors duration-300 ${!isToolsActive ? "text-gray-500 dark:text-gray-400" : ""}`}
                            />
                            <ellipse cx="16" cy="10" rx="8" ry="3.5" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-500 dark:text-gray-400" />
                            <path d="M8 10 V19 C8 22 24 22 24 19 V10" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-500 dark:text-gray-400" />
                        </g>
                        <g transform="translate(38, 0)">
                            <circle
                                cx="16" cy="16" r="16"
                                stroke={isToolsActive ? "#4ADE80" : "currentColor"}
                                strokeWidth={isToolsActive ? "2" : "1.2"}
                                fill="none"
                                className={`transition-colors duration-300 ${!isToolsActive ? "text-gray-500 dark:text-gray-400" : ""}`}
                            />
                            <circle cx="13" cy="13" r="7" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-gray-500 dark:text-gray-400" />
                            <path d="M18 18 L24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-gray-500 dark:text-gray-400" />
                        </g>
                        <g transform="translate(76, 0)">
                            <circle
                                cx="16" cy="16" r="16"
                                stroke={isToolsActive ? "#4ADE80" : "currentColor"}
                                strokeWidth={isToolsActive ? "2" : "1.2"}
                                fill="none"
                                className={`transition-colors duration-300 ${!isToolsActive ? "text-gray-500 dark:text-gray-400" : ""}`}
                            />
                            <ellipse cx="16" cy="10" rx="8" ry="3.5" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-500 dark:text-gray-400" />
                            <path d="M8 10 V19 C8 22 24 22 24 19 V10" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-500 dark:text-gray-400" />
                        </g>
                        <g transform="translate(114, 0)">
                            <circle
                                cx="16" cy="16" r="16"
                                stroke={isToolsActive ? "#4ADE80" : "currentColor"}
                                strokeWidth={isToolsActive ? "2" : "1.2"}
                                fill="none"
                                className={`transition-colors duration-300 ${!isToolsActive ? "text-gray-500 dark:text-gray-400" : ""}`}
                            />
                            <rect x="8" y="6" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-500 dark:text-gray-400" />
                            <path d="M10 10 H22 M10 14 H22 M10 18 H17" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" className="text-gray-500 dark:text-gray-400" />
                        </g>

                        {/* Row 2: 2 icons (centered) */}
                        <g transform="translate(19, 38)">
                            <circle
                                cx="16" cy="16" r="16"
                                stroke={isToolsActive ? "#4ADE80" : "currentColor"}
                                strokeWidth={isToolsActive ? "2" : "1.2"}
                                fill="none"
                                className={`transition-colors duration-300 ${!isToolsActive ? "text-gray-500 dark:text-gray-400" : ""}`}
                            />
                            <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.2" fill="none" className="text-gray-500 dark:text-gray-400" />
                            <path d="M16 6 V10 M16 22 V26 M6 16 H10 M22 16 H26 M9 9 L12 12 M20 20 L23 23 M9 23 L12 20 M20 12 L23 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-gray-500 dark:text-gray-400" />
                        </g>
                        <g transform="translate(95, 38)">
                            <circle
                                cx="16" cy="16" r="16"
                                stroke={isToolsActive ? "#4ADE80" : "currentColor"}
                                strokeWidth={isToolsActive ? "2" : "1.2"}
                                fill="none"
                                className={`transition-colors duration-300 ${!isToolsActive ? "text-gray-500 dark:text-gray-400" : ""}`}
                            />
                            <rect x="8" y="6" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1" fill="none" className="text-gray-500 dark:text-gray-400" />
                            <path d="M10 10 H22 M10 14 H22 M10 18 H22" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" className="text-gray-500 dark:text-gray-400" />
                        </g>
                    </g>


                    {/* ============================================ */}
                    {/* 4. LLM CORE (Chip with circuit lines)        */}
                    {/* ============================================ */}
                    <g transform="translate(150, 200)">
                        <rect
                            x="0" y="0"
                            width="80" height="50"
                            rx="8"
                            fill="none"
                            stroke={isLLMActive ? "#4ADE80" : "currentColor"}
                            strokeWidth={isLLMActive ? "2.5" : "2"}
                            className={`transition-colors duration-300 ${!isLLMActive ? "text-black dark:text-white" : ""}`}
                        />
                        {/* Chip circuit icon - scaled to fit */}
                        <g transform="translate(15, 5)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-black dark:text-white">
                            {/* Central square */}
                            <rect x="17" y="12" width="16" height="16" rx="3" stroke="currentColor" fill="none" />
                            {/* Left lines */}
                            <path d="M8 15 L17 15" />
                            <path d="M8 20 L17 20" />
                            <path d="M8 25 L17 25" />
                            {/* Right lines */}
                            <path d="M33 15 L42 15" />
                            <path d="M33 20 L42 20" />
                            <path d="M33 25 L42 25" />
                            {/* Top lines */}
                            <path d="M20 5 L20 12" />
                            <path d="M25 5 L25 12" />
                            <path d="M30 5 L30 12" />
                            {/* Bottom lines */}
                            <path d="M20 28 L20 35" />
                            <path d="M25 28 L25 35" />
                            <path d="M30 28 L30 35" />
                            {/* Corner dots */}
                            <circle cx="10" cy="8" r="1.5" fill="currentColor" />
                            <circle cx="40" cy="8" r="1.5" fill="currentColor" />
                            <circle cx="10" cy="32" r="1.5" fill="currentColor" />
                            <circle cx="40" cy="32" r="1.5" fill="currentColor" />
                        </g>

                        <text
                            x="40" y="68"
                            textAnchor="middle"
                            fill="currentColor"
                            fontSize="11"
                            fontWeight="700"
                            className="text-black dark:text-white font-sans"
                        >
                            LLM CORE
                        </text>
                    </g>


                    {/* ============================================ */}
                    {/* 5. FINAL RESPONSE (Chat bubble with check)   */}
                    {/* ============================================ */}
                    <g transform="translate(310, 140)">
                        <path
                            d="M12 0 H70 C76 0 80 4 80 10 V 50 C80 56 76 60 70 60 H12 C6 60 0 56 0 50 V 10 C0 4 6 0 12 0 Z"
                            fill="none"
                            stroke={isOutputActive ? "#4ADE80" : "currentColor"}
                            strokeWidth={isOutputActive ? "2.5" : "2"}
                            className={`transition-colors duration-300 ${!isOutputActive ? "text-black dark:text-white" : ""}`}
                        />
                        <path
                            d="M0 35 L-10 45 L0 50"
                            fill="none"
                            stroke={isOutputActive ? "#4ADE80" : "currentColor"}
                            strokeWidth={isOutputActive ? "2.5" : "2"}
                            strokeLinejoin="round"
                            className={`transition-colors duration-300 ${!isOutputActive ? "text-black dark:text-white" : ""}`}
                        />

                        {/* Larger centered checkmark - only fully visible when active */}
                        <circle
                            cx="40" cy="30"
                            r={isOutputActive ? 22 : 20}
                            fill="#4ADE80"
                            className={`transition-all duration-300 ${isOutputActive ? 'opacity-100' : 'opacity-20'}`}
                        />
                        <path
                            d="M30 30 L37 37 L50 22"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-opacity duration-300 ${isOutputActive ? 'opacity-100' : 'opacity-20'}`}
                        />
                    </g>

                    {/* ============================================ */}
                    {/* ANIMATED RING - Only visible on path steps   */}
                    {/* ============================================ */}
                    {isRingVisible && (
                        <circle
                            cx={currentRingPos.x}
                            cy={currentRingPos.y}
                            r="10"
                            fill="white"
                            stroke="#4ADE80"
                            strokeWidth="3"
                            className="dark:fill-[#1E1E1E] transition-all duration-700 ease-in-out"
                        />
                    )}

                </g>
            </svg>
        </div>
    );
};

export default AgenticRAGDiagram;
