{
    //

    // Promise


    // ______________simulate----------
    type Something = {
        something: string;
    }
    const createPromise = () : Promise<Something> => {
        return new Promise<Something> ((resolve, reject) => {
            const data : Something = {something: 'Something'}
            if (resolve) {
                resolve(data)
            }else{reject('nothing')}

        });
    }
// calling create promise function
const showData = async() : Promise<Something>=>{
    const data : Something = await createPromise()
   return data
}
showData()



// load data from api
const getDataFromApi = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data =await response.json()
    console.log(data)
}
getDataFromApi()
    //
}