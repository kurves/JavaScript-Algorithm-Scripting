function addTogether() {
    const args = [...arguments];
    if (args.every(arg => typeof arg === 'number')) {
   
        if (args.length === 2) {
          return args[0] + args[1];
}