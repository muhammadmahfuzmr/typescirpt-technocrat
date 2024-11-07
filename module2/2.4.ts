{
    //
    // Generic with interface 
    interface Developer<T, M=null> {
        name: string;
        computer: {
            brand: string;
            price: number;
            color: string;
            model: string
        };
        smartWatch: T ;
        bike?: M ;
    }

interface CasioWatch {
    brand: string;
    color: string;
    model: string;
    price: number;
}
    const poorDeveloper: Developer<CasioWatch> = {
        name: 'Mahfuz',
        computer: {
            brand: 'Msi',
            price: 150000,
            color: 'Black',
            model: 'G-560'
        },
        smartWatch:{
            brand: 'Casio',
            color: 'White',
            model: '52ku',
            price: 2500
        }
    }
    interface AppleWatch{
        brand: string;
        color: string;
        heartTrack: boolean;
    }
    interface YamahaBike{
        brand: string;
        speed: string
    }
    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: 'Mahfuz',
        computer: {
            brand: 'Msi',
            price: 150000,
            color: 'Black',
            model: 'G-560'
        },
        smartWatch:{
            brand: 'Apple',
            color: 'White',
            heartTrack: true
           
        },
        bike:{
            brand: 'Yamaha',
            speed: '120 kmh^-1'
        }
    }





    //
}