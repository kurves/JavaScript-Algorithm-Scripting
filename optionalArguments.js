function addTogether() {
    const args = [...arguments];
    if (args.every(arg => typeof arg === 'number')) {
   
        if (args.length === 2) {
          return args[0] + args[1];

          if (args.length === 1) {
            const num1 = args[0];
            return function(num2) {
}