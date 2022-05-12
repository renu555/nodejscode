function doStuff(data){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(typeof data == 'number'){
                resolve(data * data);
            } else {
                reject("An error occured");
            }
        },1000);
    });  
}
doStuff(2).then(a => {
    console.log(a);
    return doStuff(a);
}).then(b => {
    console.log(b);
    return(doStuff(b));
}).then (c => {
    console.log(c);
    return(doStuff(c));
}).then (d =>{
    console.log(d);
    return(doStuff(d));
}).catch(error =>{
    console.log(error);
});