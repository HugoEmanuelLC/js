const initialArray = [
    null,
    true,
    ["Apple", "two", undefined],
    false,
    ["three", "BeCode"],
    4,
    "I am a big bad wolf",
    ["one"],
];

let newTab = [];

newTab.push(initialArray[7][0])
newTab.push(initialArray[2][1])
newTab.push(initialArray[4][0])

console.log(newTab);