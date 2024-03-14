    function streamRoller(arr){
        // funtion to flatten nestesd array
        arr.forEach(element => {
            if (Array.isArray(element)) {
                result = result.concat(flattenArray(element));
    }