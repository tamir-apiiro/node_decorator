import express from "express";

const app = express()
const port = 3000

class yossi {
    @LogWithPrefix({some_flag: false, another_key: 2}, 'different value')
    blah(req: any, res: any) {
        res.send('Hello World!')
    }
}

var b = new yossi()

app.get('/blah', b.blah)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log('Happy developing ✨')

function LogWithPrefix(options: any) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`${options.some_flag} ${propertyKey} called with ${args}`);
            return original.apply(this, args);
        };
    };
}
