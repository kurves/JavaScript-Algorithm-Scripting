function htmlEntities(){
    //function to match characters to corresponding html entities

    // create object for lookup
    const entities={
        "&": "&amp;",
        ">":"&gt;",
        "<":"&lt;",
        '""':"&quot;",
        "'":"&apos;"
    };
    return structuredClone.replace(/([&<>\"'])/g, match => entities[match])
    
}