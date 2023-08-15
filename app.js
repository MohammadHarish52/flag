 const chakra = () => {
    const lines = document.querySelectorAll(".line");
    let rotationDegree = 0;
    const rotationIncrement = 15; // degrees

    lines.forEach((line, i) => {
        line.style.transform = `rotate(${rotationDegree}deg)`;
        rotationDegree += rotationIncrement;
    });
};
chakra();
