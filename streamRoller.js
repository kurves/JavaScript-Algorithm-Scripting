    function streamRoller(arr){
        // funtion to flatten nestesd array
        arr.forEach(element => {
            if (arr.isArray(element)) {
                res = res.concat(flattenArray(element));

        } else {
            res.push(element);
        }
    });

    return res;
}