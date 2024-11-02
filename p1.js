const fs = require('fs');
function dv(value, base) {
    return parseInt(value, base);
}
function f2(points) {
    let c=0;
    for (let i=0;i< points.length;i++) {
        let [xi, yi] = points[i];
        let term = yi;

        for (let j=0; j<points.length;j++) {
            if (i!==j) {
                let [xj]=points[j];
                term*=(0 - xj)/(xi - xj);
            }
        }
        c+=term;
    }
    return Math.round(c);
}
function f1(input) {
    const { n, k } = input.keys;
    const points = [];
    for (let key in input) {
        if (key === 'keys') continue;
        const x = parseInt(key);
        const base = parseInt(input[key].base);
        const yEncoded = input[key].value;
        const y = dv(yEncoded, base);
        points.push([x, y]);
    }
    points.sort((a, b) => a[0] - b[0]);
    const requiredPoints = points.slice(0, k);
    return f2(requiredPoints);
}
function main() {
    const t1=JSON.parse(fs.readFileSync('testcase1.json', 'utf8'));
    const t2=JSON.parse(fs.readFileSync('testcase2.json', 'utf8'));
    const s1=f1(t1);
    const s2=f1(t2);
    console.log("Secret 1:", s1);
    console.log("Secret 2:", s2);
}
main();
