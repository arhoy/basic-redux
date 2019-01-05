
// in real app this is where you would make the asix requests.
// functions inside here always return the payload depending on the type that is called.
export function movieslist(){
    return {
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:"Pulp Fiction"},
            {id:2,name:"Pacific Rim"},
            {id:3,name:"Rambo"} 
        ]
    }
}


export function directorslist(){
    return {
        type:'DIR_LIST',
        payload:[
            {id:1,name:"Tarantino"},
            {id:2,name:"Scorsese"}
        ]
    }
}
