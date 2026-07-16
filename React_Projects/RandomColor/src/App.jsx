import { useState, useEffect } from "react";
import './style.css'; // Make sure to import your stylesheet!

const RandomColor = () => { 
    const [typeOfColor, setTypeOfColor] = useState('hex'); // Fixed camelCase 'setTypeOfColor'
    const [color, setColor] = useState('#000000');
    
    function utility(length){
        return Math.floor(Math.random() * length);
    }

    function handleCreateHEX(){
        // Added '0' to the hex array so it represents all 16 valid hex values
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for(let i = 0; i < 6; i++){
            hexColor += hex[utility(hex.length)];
        }
        setColor(hexColor);
    }

    function handleCreateRGB(){
        const r = utility(256);
        const g = utility(256);
        const b = utility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    useEffect(() => {
        if(typeOfColor === 'hex'){
            handleCreateHEX();
        } else {
            handleCreateRGB();
        }
    }, [typeOfColor]);

    return (
        <div className="color-container" style={{ background: color }}>
            {/* Button Panel Container */}
            <div className="button-container">
                <button 
                    className={typeOfColor === 'hex' ? 'active' : ''} 
                    onClick={() => setTypeOfColor('hex')}
                >
                    Create HEX Color
                </button>
                <button 
                    className={typeOfColor === 'rgb' ? 'active' : ''} 
                    onClick={() => setTypeOfColor('rgb')}
                >
                    Create RGB Color
                </button>
                <button 
                    className="generate-btn"
                    onClick={typeOfColor === 'hex' ? handleCreateHEX : handleCreateRGB}
                >
                    Generate Random Color
                </button>
            </div>

            {/* Color Info Display */}
            <div className="display-panel">
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}

export default RandomColor;