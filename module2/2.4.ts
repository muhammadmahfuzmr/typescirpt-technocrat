{
    //

    // Generic Interface

    interface Developer<T, Q = null> {
        name: string;
        computer: {
            brand: string;
            display: string;
            model: string;
        };
        watch: T;
        bike?: Q
    }
    interface CasioWatch {
        brand: string;
        model: string;
        price: number
    }
    const poorDeveloper: Developer<CasioWatch> = {
        name: "Mahfuz",
        computer: {
            brand: "MSI",
            display: "LED",
            model: "5600G"
        },
        watch: {
            brand: "CASIO",
            model: "320S",
            price: 350
        }
    }



    interface YamahaBike {
        brand: string;
        model:string;
        price:number;
        status:string
    }

    type AppleWatch = {
        brand:string;
        price:number;
        heartTrack:boolean;
        timeFormate: string
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: "Bilal",
        computer: {
            brand:"Asus",
            display: "LTE",
            model:"2566G",

        },
        watch: {
            brand: "Apple",
            heartTrack: true,
            price:35000,
            timeFormate: "24H"
            
        },
        bike: {
            brand: "Yamaha",
            model: "500CC",
            price:700000,
            status: "Latests"
        }
    }
    // 
}