{
    //
    // Generic Type

    // generic array
    type GenericArray<T> = Array<T>
    const roll: GenericArray<number> = [12, 36, 85]
    const friends: GenericArray<string> = ["mahfuz", "jawad", "bilal"]
    const isPassed: GenericArray<boolean> = [true, false, true]

    const useInfo: GenericArray<{ name: string; roll: number; class: number }> = [
        { name: "Mahfuz", roll: 2, class: 12 },
        { name: "Bilal", roll: 3, class: 12 }
    ]

    // Generic Tuple

    type GenericTuple<T, Q> = [T, Q];
    const manus: GenericTuple<string, string> = ["Bilal", "Mahfuz"];
    const userWithId: GenericTuple<number, { name: string; email: string }> = [341, { name: "Mahfuz", email: "mahfuz@gmail.com" }]

    //
}