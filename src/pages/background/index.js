import { useState } from "react";

export default function Index() {
    const dark = 'rgb(111, 111, 111)';
    const light = 'rgb(222, 222, 222)';

    const [theme, setTheme] = useState(light);

    const toggleTheme = () => {
        if (theme === light) setTheme(dark);
        else setTheme(light);
    }

    return (
        <div id="background" style={{ backgroundColor: theme }}>
            <button id="toggle-bg" onClick={toggleTheme}>Toggle</button>
        </div>
    );
}