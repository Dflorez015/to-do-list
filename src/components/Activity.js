import React from 'react'

function Activity({ desc }) {
    return (
        <div className="task">
            <nav className="task-option">
                <ul>check</ul>
                <ul>options</ul>
            </nav>
            <p> {desc}</p>
        </div>
    )
}

export default Activity
