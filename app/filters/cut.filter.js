export default () => {
    return (input, size = 150) => {
        if (!input) return;

        let len = input.length;
        input = input.slice(0, size);
        return len > size ? input + "..." : input
    }
}