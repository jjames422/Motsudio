
'use client'

import React, { useRef, useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBlockWithCopy({ children, language }) {
    const textRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (textRef.current) {
            const textToCopy = textRef.current.innerText;
            try {
                await navigator.clipboard.writeText(textToCopy);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Copy failed: ', err);
            }
        }
    };

    return (
        <div className="relative p-4 rounded-xl bg-black shadow-lg">
            <div ref={textRef}>
                <SyntaxHighlighter
                    language={language}
                    style={tomorrowNight}
                    className="text-sm overflow-x-auto overflow-y-auto max-h-[400px] mt-2 rounded-lg"
                >
                    {children}
                </SyntaxHighlighter>
            </div>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 w-20 h-6 flex justify-center items-center text-xs font-semibold text-white bg-black rounded-xl hover:bg-slate-800 focus:outline-none focus:bg-black"
            >
                {copied ? <CheckIcon className="w-5 h-5 text-white" /> : 'Copy'}
            </button>
        </div>
    );
}
