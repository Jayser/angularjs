function shotFilter() {
    return (input) => {
        if (!input) return;

        let len = input.length;
        let maxSize = 150;
        input = input.slice(0, maxSize);
        return len > maxSize ? input + "..." : input
    }
}

export {shotFilter};