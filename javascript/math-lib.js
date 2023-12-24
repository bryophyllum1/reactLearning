export function add(a, b){
    console.log("add", a+b);
}

function sub(a, b){
    console.log("sub", a-b);
}

function mul(a, b){
    console.log("mul", a*b);
}

// or we can do named exports

export{sub};



// or we can do default export: but only one member can be exported as default otherwise it becomes ambiguous

export default mul;

/*
* anything defined within a module
* is scoped to the module so we can't directly use these in other files
* since there are no access modifiers as such so we need to export the functions
*/


/*
* package.json : node config file
* node
* - npm: node package manager
* - npm init : generate a package.json file
*/