
const newId = (array) => {
        if (array.length){
           return array[array.length - 1].id + 1        
         }else{
            return 1
        
    }
}
const newData = () => new Date().toString()


module.exports = {
    newId,
    newData
}
