import React from "react";
import { useNavigate} from 'react-router-dom';
import './menu-item.styles.scss'

export const MenuItem = ({ title, imageUrl, size, linkUrl, }) => {

    const navigate = useNavigate();
    // const match = useMatch(pathPattern); // pathPattern is the pattern to match, e.g., '/some-path/:id'

    const handleClick = () => {
            navigate(linkUrl); // Or handle the case where there's no match
        
    };
    
    return (<div
        className={`${size} menu-item`}
        onClick={handleClick}
    >
        <div
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            className="background-image"
        />
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
    )
}
