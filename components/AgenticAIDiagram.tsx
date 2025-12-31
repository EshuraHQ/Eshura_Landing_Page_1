import React from 'react';

const AgenticAIDiagram: React.FC = () => {
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

                {/* Planner to Sub-agents */}
                <path
                    d="M200 120 L250 120"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />

                {/* Knowledge Base to Sub-agents */}
                <path
                    d="M210 55 C230 55 230 80 260 80"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />

                {/* Task Router to Sub-agents */}
                <path
                    d="M200 230 L250 180"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />

                {/* Sub-agents to Tools (bottom) */}
                <path
                    d="M282 215 L195 295"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />

                {/* Sub-agents to Sub-agents icon */}
                <path
                    d="M310 150 L350 150"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="text-gray-400 dark:text-gray-500"
                />

                {/* Sub-agents icon to Response Synthesizer */}
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
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-black dark:text-white"
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
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="none"
                        className="text-gray-400 dark:text-gray-500"
                    />
                    {/* Person icon */}
                    <circle cx="0" cy="-6" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />
                    <path d="M-10 12 Q0 5 10 12" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />

                    <text
                        x="-30" y="-30"
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
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="none"
                        className="text-gray-400 dark:text-gray-500"
                    />
                    {/* Person icon */}
                    <circle cx="0" cy="-6" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />
                    <path d="M-10 12 Q0 5 10 12" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />

                    <text
                        x="-20" y="45"
                        fill="currentColor"
                        fontSize="10"
                        fontWeight="500"
                        className="text-black dark:text-white font-sans"
                    >
                        Task
                    </text>
                    <text
                        x="-25" y="57"
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
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="none"
                        className="text-gray-400 dark:text-gray-500"
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
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-black dark:text-white"
                    />

                    {/* Person 1 */}
                    <g transform="translate(27, 28)">
                        <circle cx="0" cy="0" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />
                        <circle cx="0" cy="-3" r="4" stroke="currentColor" strokeWidth="1" fill="none" className="text-black dark:text-white" />
                        <path d="M-6 7 Q0 3 6 7" stroke="currentColor" strokeWidth="1" fill="none" className="text-black dark:text-white" />
                    </g>

                    {/* Person 2 */}
                    <g transform="translate(27, 65)">
                        <circle cx="0" cy="0" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />
                        <circle cx="0" cy="-3" r="4" stroke="currentColor" strokeWidth="1" fill="none" className="text-black dark:text-white" />
                        <path d="M-6 7 Q0 3 6 7" stroke="currentColor" strokeWidth="1" fill="none" className="text-black dark:text-white" />
                    </g>

                    {/* Person 3 */}
                    <g transform="translate(27, 102)">
                        <circle cx="0" cy="0" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black dark:text-white" />
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
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-black dark:text-white"
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
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-black dark:text-white"
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

                    {/* Green checkmark */}
                    <circle cx="32" cy="30" r="18" fill="#4ADE80" />
                    <path
                        d="M22 30 L28 36 L42 22"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>

            </svg>
        </div>
    );
};

export default AgenticAIDiagram;
