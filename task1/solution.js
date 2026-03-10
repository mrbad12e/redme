function stringLengthFrequency(strings) {
    if (!strings || strings.length === 0) return [];

    const count = {};
    let maxFreq = 0;
    let mostFreqLen = 0;

    strings.forEach(str => {
        const len = str.length;
        count[len] = (count[len] || 0) + 1;

        if (count[len] > maxFreq) {
            maxFreq = count[len];
            mostFreqLen = len;
        }
    })

    return strings.filter(str => str.length === mostFreqLen);
}

export default stringLengthFrequency;