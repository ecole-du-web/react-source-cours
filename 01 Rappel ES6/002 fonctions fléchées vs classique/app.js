const myObj = {
    a: "5",
    foo: () => {
        console.log(this);
    }
}
myObj.foo();