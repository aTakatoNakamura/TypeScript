function double(x: number): number {
    return x * 2;
}

function square(x: number): number {
    return x * x;
}

const result1 = 5 |> double;
console.log("result1:", result1);

const result2 = 5 |> square |> double;
console.log("result2:", result2);