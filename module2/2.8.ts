{
    //
    // Promise
    type GetToDo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean
    }
    const getToDo = async (): Promise<GetToDo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data: GetToDo = await response.json()
        //console.log(data)
        return data
    }
    console.log(getToDo())
    // simulate 
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "something";
            if (data) {
                resolve(data)
            } else {
                reject("Failed to load data")
            }
        })
    }
    // calling create promise function

    const showData = async (): Promise<string> => {
        const data: string = await createPromise()
        //console.log(data)
        return data
    }
    //console.log(showData())

    //
}