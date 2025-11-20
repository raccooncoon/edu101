import React from 'react';

export function CodeBlock({ code }) {
    // Split by ^^ delimiter
    const parts = code.split('^^');

    return (
        <pre className="code-block">
            <code>
                {parts.map((part, index) => {
                    if (index % 2 === 1) {
                        // Odd indices are highlighted parts
                        return <span key={index} className="hl-highlight">{part}</span>;
                    }
                    // Even indices are normal text
                    return part;
                })}
            </code>
        </pre>
    );
}
