function func(num) {
    if (num > 999) {
        console.log('Число превышает 999');
        return {};
    }

    const number = !(typeof num === "string") ? num.toString() : num;

    return {
        units: number[number.length - 1],
        dozens: number[number.length - 2] ? number[number.length - 2] : '0',
        hundreds: number[number.length - 3] ? number[number.length - 3] : '0',
    }
}

console.log(func(245));