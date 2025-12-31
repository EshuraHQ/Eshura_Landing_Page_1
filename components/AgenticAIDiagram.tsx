import React, { useState, useEffect, useRef } from 'react';

const AgenticAIDiagram: React.FC = () => {
    // 19 steps animation sequence as specified
    const [activeStep, setActiveStep] = useState(0);
    const stepRef = useRef(0);

    useEffect(() => {
        const stepDuration = 700; // 0.7 seconds per step

        const timer = setInterval(() => {
            stepRef.current = (stepRef.current + 1) % 19;
            setActiveStep(stepRef.current);
        }, stepDuration);

        return () => clearInterval(timer);
    }, []);

    // Ring positions for each step
    // Steps with rings: 1, 6, 8, 10, 12 (parallel), 14 (parallel)
    const ringPositions: { x: number; y: number }[] = [
        { x: 52, y: 175 },    // 0: Input Query (no ring)
        { x: 115, y: 145 },   // 1: Input → Planner path midpoint
        { x: 175, y: 120 },   // 2: Planner (no ring)
        { x: 177, y: 86 },    // 3: Planner → KB path (no ring per spec)
        { x: 180, y: 55 },    // 4: Knowledge Base (no ring)
        { x: 175, y: 120 },   // 5: Planner re-focus (no ring)
        { x: 175, y: 175 },   // 6: Planner → Task Router path midpoint
        { x: 175, y: 230 },   // 7: Task Router (no ring)
        { x: 227, y: 210 },   // 8: Task Router → Sub-agents path midpoint
        { x: 282, y: 150 },   // 9: Sub-agents (no ring)
        { x: 282, y: 150 },   // 10: Parallel dispatch - handled separately
        { x: 282, y: 150 },   // 11: Parallel activation (no ring)
        { x: 282, y: 150 },   // 12: Parallel return - handled separately
        { x: 282, y: 150 },   // 13: Sub-agents re-active (no ring)
        { x: 330, y: 150 },   // 14: Sub-agents → Response Synthesizer path
        { x: 377, y: 147 },   // 15: Response Synthesizer (no ring)
        { x: 377, y: 147 },   // 16: Reset (no ring)
        { x: 462, y: 145 },   // 17: Completion - checkmark
        { x: 462, y: 145 },   // 18: Loop pause
    ];
    const currentRingPos = ringPositions[activeStep];

    // Ring visibility
    // Single ring: 1, 6, 8, 14
    // Parallel rings: 10, 12
    const isSingleRingVisible = [1, 6, 8, 14].includes(activeStep);
    const isParallelRingsVisible = [10, 12].includes(activeStep);

    // Node highlight states
    const isInputActive = activeStep === 0;
    const isPlannerActive = activeStep === 2 || activeStep === 4 || activeStep === 5;
    const isKnowledgeBaseActive = activeStep === 4 || activeStep === 11;
    const isTaskRouterActive = activeStep === 7;
    const isSubAgentsActive = activeStep === 9 || activeStep === 13;
    const isToolsActive = activeStep === 11;
    const isResponseSynthesizerActive = activeStep === 15;
    const isCheckmarkVisible = activeStep === 17;

    // Parallel ring positions
    // Step 10 & 12: Sub-agents ↔ Knowledge Base, Sub-agents ↔ Tools
    const parallelRing1 = activeStep === 10
        ? { x: 230, y: 70 }   // Sub-agents → KB direction
        : { x: 240, y: 70 };  // KB → Sub-agents return
    const parallelRing2 = activeStep === 10
        ? { x: 225, y: 255 }  // Sub-agents → Tools direction
        : { x: 230, y: 250 }; // Tools → Sub-agents return

    return (
        <div className="w-full h-full flex items-center justify-center p-2">
            <svg
                viewBox="0 0 500 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-w-[500px] select-none"
            >
                {/* ============================================ */}
                {/* CONNECTION PATHS (dashed lines)              */}
                {/* ============================================ */}

                {/* Input Query to Planner */}
                <path
                    d="M85 175 C120 175 120 120 155 120"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />

                {/* Planner to Task Router */}
                <path
                    d="M175 145 L175 205"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />

                {/* Planner to Knowledge Base */}
                <path
                    d="M175 95 L180 77"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />

                {/* Knowledge Base to Sub-agents */}
                <path
                    d="M202 55 C230 55 240 75 255 85"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />

                {/* Task Router to Sub-agents */}
                <path
                    d="M200 230 C230 230 240 200 255 190"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />

                {/* Sub-agents to Tools (bottom) */}
                <path
                    d="M255 215 C230 250 210 280 195 295"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />

                {/* Sub-agents to Response Synthesizer */}
                <path
                    d="M310 150 L350 150"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />

                {/* Response Synthesizer to Final Output */}
                <path
                    d="M400 150 L430 150"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />


                {/* ============================================ */}
                {/* 1. INPUT QUERY                               */}
                {/* ============================================ */}
                <g transform="translate(20, 155)">
                    <rect
                        x="0" y="0"
                        width="65" height="40"
                        rx="6"
                        fill="none"
                        stroke={isInputActive ? "#4ADE80" : "currentColor"}
                        strokeWidth={isInputActive ? "2.5" : "2"}
                        className={`transition-colors duration-300 ${!isInputActive ? "text-black dark:text-white" : ""}`}
                    />
                    <text
                        x="32" y="18"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="9"
                        fontWeight="600"
                        className="text-black dark:text-white font-sans"
                    >
                        Input
                    </text>
                    <text
                        x="32" y="30"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="9"
                        fontWeight="600"
                        className="text-black dark:text-white font-sans"
                    >
                        Query
                    </text>
                </g>


                {/* ============================================ */}
                {/* 2. PLANNER (dashed circle with person)       */}
                {/* ============================================ */}
                <g transform="translate(175, 120)">
                    <circle
                        cx="0" cy="0"
                        r="25"
                        stroke={isPlannerActive ? "#4ADE80" : "currentColor"}
                        strokeWidth={isPlannerActive ? "2.5" : "1.5"}
                        strokeDasharray="4 4"
                        fill="none"
                        className={`transition-colors duration-300 ${!isPlannerActive ? "text-gray-400 dark:text-gray-500" : ""}`}
                    />
                    {/* Person icon */}
                    <circle cx="0" cy="-6" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />
                    <path d="M-10 12 Q0 5 10 12" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />

                    <text
                        x="-40" y="-30"
                        fill="currentColor"
                        fontSize="11"
                        fontWeight="500"
                        className="text-black dark:text-white font-sans"
                    >
                        Planner
                    </text>
                </g>


                {/* ============================================ */}
                {/* 3. TASK ROUTER (dashed circle with person)   */}
                {/* ============================================ */}
                <g transform="translate(175, 230)">
                    <circle
                        cx="0" cy="0"
                        r="25"
                        stroke={isTaskRouterActive ? "#4ADE80" : "currentColor"}
                        strokeWidth={isTaskRouterActive ? "2.5" : "1.5"}
                        strokeDasharray="4 4"
                        fill="none"
                        className={`transition-colors duration-300 ${!isTaskRouterActive ? "text-gray-400 dark:text-gray-500" : ""}`}
                    />
                    {/* Person icon */}
                    <circle cx="0" cy="-6" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />
                    <path d="M-10 12 Q0 5 10 12" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />

                    <text
                        x="-25" y="40"
                        fill="currentColor"
                        fontSize="10"
                        fontWeight="500"
                        className="text-black dark:text-white font-sans"
                    >
                        Task
                    </text>
                    <text
                        x="-30" y="52"
                        fill="currentColor"
                        fontSize="10"
                        fontWeight="500"
                        className="text-black dark:text-white font-sans"
                    >
                        Router
                    </text>
                </g>


                {/* ============================================ */}
                {/* 4. KNOWLEDGE BASE (database in dashed circle)*/}
                {/* ============================================ */}
                <g transform="translate(180, 55)">
                    <circle
                        cx="0" cy="0"
                        r="22"
                        stroke={isKnowledgeBaseActive ? "#4ADE80" : "currentColor"}
                        strokeWidth={isKnowledgeBaseActive ? "2.5" : "1.5"}
                        strokeDasharray="4 4"
                        fill="none"
                        className={`transition-colors duration-300 ${!isKnowledgeBaseActive ? "text-gray-400 dark:text-gray-500" : ""}`}
                    />
                    {/* Database icon */}
                    <ellipse cx="0" cy="-8" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />
                    <path d="M-10 -8 V4 C-10 8 10 8 10 4 V-8" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />

                    <text
                        x="30" y="-10"
                        fill="currentColor"
                        fontSize="10"
                        fontWeight="500"
                        className="text-black dark:text-white font-sans"
                    >
                        Knowledge
                    </text>
                    <text
                        x="30" y="2"
                        fill="currentColor"
                        fontSize="10"
                        fontWeight="500"
                        className="text-black dark:text-white font-sans"
                    >
                        Base
                    </text>
                </g>


                {/* ============================================ */}
                {/* 5. SUB-AGENTS (rounded rect with 3 persons)  */}
                {/* ============================================ */}
                <g transform="translate(255, 85)">
                    <rect
                        x="0" y="0"
                        width="55" height="130"
                        rx="12"
                        fill="none"
                        stroke={isSubAgentsActive ? "#4ADE80" : "currentColor"}
                        strokeWidth={isSubAgentsActive ? "2.5" : "2"}
                        className={`transition-colors duration-300 ${!isSubAgentsActive ? "text-black dark:text-white" : ""}`}
                    />

                    {/* Person 1 */}
                    <g transform="translate(27, 28)">
                        <circle cx="0" cy="0" r="12" stroke={isSubAgentsActive ? "#4ADE80" : "currentColor"} strokeWidth="1.5" fill="none" className={`transition-colors duration-300 ${!isSubAgentsActive ? "text-black dark:text-white" : ""}`} />
                        <circle cx="0" cy="-3" r="4" stroke="currentColor" strokeWidth="1" fill="none" className="text-black dark:text-white" />
                        <path d="M-6 7 Q0 3 6 7" stroke="currentColor" strokeWidth="1" fill="none" className="text-black dark:text-white" />
                    </g>

                    {/* Person 2 */}
                    <g transform="translate(27, 65)">
                        <circle cx="0" cy="0" r="12" stroke={isSubAgentsActive ? "#4ADE80" : "currentColor"} strokeWidth="1.5" fill="none" className={`transition-colors duration-300 ${!isSubAgentsActive ? "text-black dark:text-white" : ""}`} />
                        <circle cx="0" cy="-3" r="4" stroke="currentColor" strokeWidth="1" fill="none" className="text-black dark:text-white" />
                        <path d="M-6 7 Q0 3 6 7" stroke="currentColor" strokeWidth="1" fill="none" className="text-black dark:text-white" />
                    </g>

                    {/* Person 3 */}
                    <g transform="translate(27, 102)">
                        <circle cx="0" cy="0" r="12" stroke={isSubAgentsActive ? "#4ADE80" : "currentColor"} strokeWidth="1.5" fill="none" className={`transition-colors duration-300 ${!isSubAgentsActive ? "text-black dark:text-white" : ""}`} />
                        <circle cx="0" cy="-3" r="4" stroke="currentColor" strokeWidth="1" fill="none" className="text-black dark:text-white" />
                        <path d="M-6 7 Q0 3 6 7" stroke="currentColor" strokeWidth="1" fill="none" className="text-black dark:text-white" />
                    </g>

                    <text
                        x="28" y="-10"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="11"
                        fontWeight="500"
                        className="text-black dark:text-white font-sans"
                    >
                        Sub-agents
                    </text>
                </g>


                {/* ============================================ */}
                {/* 6. TOOLS                                     */}
                {/* ============================================ */}
                <g transform="translate(140, 295)">
                    <rect
                        x="0" y="0"
                        width="55" height="30"
                        rx="6"
                        fill="none"
                        stroke={isToolsActive ? "#4ADE80" : "currentColor"}
                        strokeWidth={isToolsActive ? "2.5" : "2"}
                        className={`transition-colors duration-300 ${!isToolsActive ? "text-black dark:text-white" : ""}`}
                    />
                    <text
                        x="28" y="20"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="11"
                        fontWeight="600"
                        className="text-black dark:text-white font-sans"
                    >
                        Tools
                    </text>
                </g>


                {/* ============================================ */}
                {/* 7. RESPONSE SYNTHESIZER (thought bubble)     */}
                {/* ============================================ */}
                <g transform="translate(355, 125)">
                    <rect
                        x="0" y="0"
                        width="45" height="45"
                        rx="8"
                        fill="none"
                        stroke={isResponseSynthesizerActive ? "#4ADE80" : "currentColor"}
                        strokeWidth={isResponseSynthesizerActive ? "2" : "1.5"}
                        className={`transition-colors duration-300 ${!isResponseSynthesizerActive ? "text-black dark:text-white" : ""}`}
                    />
                    {/* Cloud/thought icon with person */}
                    <path d="M12 30 Q8 30 8 25 Q8 20 15 20 Q15 15 22 15 Q30 15 32 22 Q38 22 38 27 Q38 32 32 32 L15 32" stroke="currentColor" strokeWidth="1" fill="none" className="text-black dark:text-white" />
                    <circle cx="22" cy="25" r="4" stroke="currentColor" strokeWidth="1" fill="none" className="text-black dark:text-white" />

                    <text
                        x="22" y="60"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="9"
                        fontWeight="500"
                        className="text-black dark:text-white font-sans"
                    >
                        Response
                    </text>
                    <text
                        x="22" y="72"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="9"
                        fontWeight="500"
                        className="text-black dark:text-white font-sans"
                    >
                        Synthesizer
                    </text>
                </g>


                {/* ============================================ */}
                {/* 8. FINAL OUTPUT (checkmark only)             */}
                {/* ============================================ */}
                <g transform="translate(430, 115)">
                    {/* Chat bubble */}
                    <path
                        d="M10 0 H55 C60 0 65 5 65 10 V 50 C65 55 60 60 55 60 H10 C5 60 0 55 0 50 V 10 C0 5 5 0 10 0 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-black dark:text-white"
                    />
                    {/* Tail */}
                    <path
                        d="M0 35 L-8 45 L0 50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        className="text-black dark:text-white"
                    />

                    {/* Green checkmark - visible at step 17 */}
                    <circle
                        cx="32" cy="30"
                        r={isCheckmarkVisible ? 20 : 18}
                        fill="#4ADE80"
                        className={`transition-all duration-300 ${isCheckmarkVisible ? 'opacity-100' : 'opacity-30'}`}
                    />
                    <path
                        d="M22 30 L28 36 L42 22"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-opacity duration-300 ${isCheckmarkVisible ? 'opacity-100' : 'opacity-50'}`}
                    />
                </g>


                {/* ============================================ */}
                {/* ANIMATED RING (Single)                       */}
                {/* ============================================ */}
                {isSingleRingVisible && (
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


                {/* ============================================ */}
                {/* ANIMATED RINGS (Parallel - Steps 10 & 12)    */}
                {/* ============================================ */}
                {isParallelRingsVisible && (
                    <>
                        {/* Ring 1: Sub-agents ↔ Knowledge Base path */}
                        <circle
                            cx={parallelRing1.x}
                            cy={parallelRing1.y}
                            r="8"
                            fill="white"
                            stroke="#4ADE80"
                            strokeWidth="3"
                            className="dark:fill-[#1E1E1E]"
                        />
                        {/* Ring 2: Sub-agents ↔ Tools path */}
                        <circle
                            cx={parallelRing2.x}
                            cy={parallelRing2.y}
                            r="8"
                            fill="white"
                            stroke="#4ADE80"
                            strokeWidth="3"
                            className="dark:fill-[#1E1E1E]"
                        />
                    </>
                )}

            </svg>
        </div>
    );
};

export default AgenticAIDiagram;
