function mapping(arr){
    let newObj = {};
    for (let item of arr){
        newObj[item] = item.toUpperCase();
    }
    console.log(newObj);
}
mapping(["p", "s"]);
mapping(["a", "b", "c"]);
mapping(["a", "v", "y", "z"]);
