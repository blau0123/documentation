import React, {useState, useEffect} from 'react';
import './styles/Sidebar.css';

const Sidebar = props => {
    const {content} = props;
    // Index of the state corresponds to which menu item it represents
    const [menuStates, setMenuState] = useState([]);

    // Initialize the menu state
    useEffect(() => {
        const states = [];
        for (let i = 0; i < content.length; i++)
            states.push(false);
        setMenuState(states);
    }, []);

    const showDropdown = index => {
        // Set the menu item at index to show it's children
        let newArr = [...menuStates];
        newArr[index] = !newArr[index];
        setMenuState(newArr);
    }

    return(
        <div className="sidebar-container">
            <div className="top-padding">
            {
                content && content.length > 0 ? content.map((item, index) => (
                    <div key={item.parent}>
                        <p className="sidebar-parent" onClick={() => showDropdown(index)}>
                            {item.parent.toUpperCase()}
                        </p>
                        <div className="dropdown-container">
                            {
                                // Only show children if this menu item's state is set to true
                                menuStates[index] ? 
                                    item.children && item.children.length > 0 ? item.children.map(child => (
                                        <p className="sidebar-child">{child}</p>
                                    )) : null : null
                            }
                        </div>
                    </div>
                )) : null
            }
            </div>
        </div>
    );
}

export default Sidebar;