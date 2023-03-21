// Code your solution here
function findMatching (array,name){
    return array.filter(
        function (dons){
            if (dons.toUpperCase() === name.toUpperCase()){
            return true;
            }
        }
    )
}

function fuzzyMatch(array,name){
    return array.filter(
        function (dons){
            if (dons.slice(0, name.length)=== name)
            return true;
        }
    )
}


function matchName (array, name){
    return array.filter (
        function (dons){
            if (dons.name === name){
            return true;
            }
        }
    )
}