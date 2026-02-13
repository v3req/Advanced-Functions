function solve(data){
    const buffer = {};

    const commands = {
        create(string){
            
        buffer[string[0]] = {};
    },

        inherit(tokens){
    const child = tokens[0];
    const parent = tokens[1];

    buffer[child] = {};
        Object.assign(buffer[child], buffer[parent]);
    }
,

        set(tokens){
        buffer[tokens[0]][tokens[1]] = tokens[2];
    },

        print(tokens){
        const keys = Object.keys(buffer[tokens[0]]);
        let result = []
        keys.forEach(e => result.push( e + ":" +buffer[tokens[0]][e]))
        
        console.log(result.join(','));
        
    }}

    for(let el of data){
       let [command, ...tokens] = el.split(' ');
        if(tokens.includes('inherit')){
                command = 'inherit';
                tokens = tokens.filter(e => e !== 'inherit' && e !== 'create');
            }
        commands[command](tokens)
    }
}solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)