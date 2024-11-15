export const sum = (...items: any[]): number => {
    return items.reduce((accumulator, currentValue) => {
        if (typeof currentValue === 'number') {
            return accumulator + currentValue;
        } else if (typeof currentValue === 'string') {
            const parsedNumber = parseFloat(currentValue);
            if (isNaN(parsedNumber)) {
                throw new Error(`Cannot convert string "${currentValue}" to number`);
            }
            return accumulator + parsedNumber;
        } else {
            throw new Error(`Unsupported type: ${typeof currentValue}`);
        }
    }, 0);
};