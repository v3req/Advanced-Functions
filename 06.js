function solve(data){
    let result = []

    const commands = {
        add(string) {
            result.push(string)
        },

        remove(string) {
           result = result.filter(e => e !== string)
        },

        print(){
            console.log(result.join(','));
            
        }
    }
    
    function onForEach(e, i){
        let [key, property] = e.split(' ');

        commands[key](property)
    }

    data.forEach(onForEach);
}solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])