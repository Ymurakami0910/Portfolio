import React from 'react';
// module css only for this button 
import styles from './dlButton.module.css'; 
import { Icon } from '@iconify/react/dist/iconify.js';

function DLButton({ label, onClick }) {
    // takes props as its input and will be passed when this component is used 
    return (
        
        <button className={styles.primaryButton} onClick={onClick}>
            <Icon icon="material-symbols:download" className={styles.icon} />
            {label}
            {/* This allows customization of the button's content */}
        </button>
    );
}

export default DLButton;