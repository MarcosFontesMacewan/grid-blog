/* ======================================================
    Lab 7 - Header.jsx starter    
    
    TODO: Create the entire Header component. 
    
    Requirements:
        - Show the site title and a one-sentence description.
        - Show summary numbers: totalPosts, totalLikes, totalDislikes. 
====================================================== */

export default function Header({ totalPosts, totalLikes, totalDislikes }) {
    // TODO: Replace return null with your JSX 
    return (
        <header className="header">
            <h1>My Blog</h1>
            <p>Welcome to my React blog!</p>
            <div className="summary">
                <span>Total Posts: {totalPosts}</span>
                <span>Total Likes: {totalLikes}</span>
                <span>Total Dislikes: {totalDislikes}</span>
            </div>
        </header>
    );
} 