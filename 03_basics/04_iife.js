// * Immediately Invoked Function Expressions IIFE

(function chai(){
    //! Here chai is name IIFE function
    console.log("DB Connected");
    
})(); // IIFE

// *  IIFE is a function that runs as soon as it is defined.

//*  It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

( (name) => {
    // ! Here this is simple IFFE
    console.log(`DB connected with ${name};`);
})("MongoDB");