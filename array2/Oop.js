class mobil {
    constructor(type, color){
        this.type = type
        this.color = color
        this.engineStatus = 'off'
    }
    engineStart (){
        this.engineStatus = 'on'
        console.log('engine Start','mobilnya warna'+this.color+"typenya: " + this.type+" status mesin: "+this.engineStatus)
    }
    engingeStop (){
        this.engineStatus ='off'
        console.log('engine Start','mobilnya warna'+this.color+"typenya: " + this.type+" status mesin: "+this.engineStatus)
    }
    static isEngineon(mobil){
        if (mobil.engineStatus === 'on') {
            console.log('Engine on')
        }else{
            console.log('Engine off')
        }
    }
}

const m = new mobil ('phanter','hitam');

mobil.isEngineon(m);

class car{
    constructor(color){
        this.color = color;
    }
}

let a = new car('merah')

console.log(a. color);

class Car2 {
    constructor(){
        this._color = null
    }
    
    get color(){
        return `warna mobilnya adalah $(this._color)`
    }

    set color (color){
        this._color = `$(color) keren`
    }
}
const car2  = new Car2()

car2.color = 'merah'