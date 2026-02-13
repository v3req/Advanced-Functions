function solve(area, vol, input){
    const parsedInput = JSON.parse(input);

    const result = [];

    for(let entry of parsedInput){
        const obj = {
            area: area.call(entry),
            volume: vol.call(entry)
        }

        result.push(obj)
    }

    return result;
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};
