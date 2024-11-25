// void 

function consoleError(errmsg : string):void{
    console.log(errmsg)
}

// never 

function handleError(errmsg : string):never{
   throw new Error(errmsg);
}

export {}