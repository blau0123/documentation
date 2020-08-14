import React from 'react';
import './styles/Sidebar.css';

const Sidebar = props => {
    const {content} = props;

    return(
        <div className="sidebar-container">
            {
                content && content.length > 0 ? content.map(item => (
                    <div>
                        <p className="sidebar-parent">{item.parent.toUpperCase()}</p>
                        {
                            item.children && item.children.length > 0 ? item.children.map(child => (
                                <p className="sidebar-child">{child}</p>
                            )) : null
                        }
                    </div>
                )) : null
            }
        </div>
    );
}

export default Sidebar;