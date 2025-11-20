import React from 'react';

export function CodeBlock({ code }) {
    return (
        <pre className="code-block">
            <code>{code}</code>
        </pre>
    );
}
