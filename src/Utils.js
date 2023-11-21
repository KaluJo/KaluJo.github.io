export const handleWheel = (setPercentageScrolled, updateColor, e) => {
    const scrollDirection = e.deltaY;

    let newPercentage = percentageScrolled;
    if (scrollDirection > 0) {
        newPercentage += 0.05; // Scroll down
    } else if (scrollDirection < 0) {
        newPercentage -= 0.05; // Scroll up
    }
    newPercentage = Math.max(0, Math.min(1, newPercentage));
    setPercentageScrolled(newPercentage);

    updateColor(newPercentage);
};

export const updateColor = (setBgColor, percentage) => {
    let r = 67 + (10 - 67) * percentage * 1;
    let g = 174 + (23 - 174) * percentage * 1;
    let b = 218 + (52 - 218) * percentage * 1;
    let brightness = 1 - percentage * 0.25;

    setBgColor({
        color: `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`,
        brightness: brightness
    });
};

export const handleTouchStart = (setTouchStart, e) => {
    setTouchStart(e.touches[0].clientY);
};

export const handleTouchMove = (setPercentageScrolled, updateColor, e) => {
    const touchMove = e.touches[0].clientY;
    const difference = touchStart - touchMove;

    const factor = 0.001;

    let newPercentage = percentageScrolled + difference * factor;
    newPercentage = Math.max(0, Math.min(1, newPercentage));
    setPercentageScrolled(newPercentage);

    updateColor(newPercentage);
};