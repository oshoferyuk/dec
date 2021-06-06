/*  import { Component } from './decorator';
  import { getRenderer } from './renderers';
  import { PROPERTIES_SYMBOL } from './types';

  const cdecorator = (target: new (...args: any) => any) => {
     console.log('class decorator')
     
      return class Test_1 extends target {
     //  test: number;
     //  launch: (n:number):number => 33;
      }
   }

const mDecorator = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) =>  {      
    return {
      value: function(...args: any[]){                
        console.log(`Args ${args}`);
        return descriptor.value.apply(this, args);
      }
    }
  }  

const pDecorator = (target: Object, key: string) => {
  let _val;

  let getter = () => { 
    console.log(`getter ${_val}`);
    return _val; }
  let setter = function(newVal){
    console.log(`setter ${newVal}`);
    console.log('***')
    console.dir(this);
    _val = newVal; } 

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  })
}


function assert(predicate: Function, message: string): PropertyDecorator{
  return (target: Object, key: string) => {
    Object.defineProperty(target, key, {
      set(newVal: any){
        
        let current = newVal;

        Object.defineProperty(this, key, {
          set(newVal){
            if(predicate(newVal)){
              console.log(message);
            }
            current = newVal;
          },
          get(){
            return current;
          }
        })
      }
    })
  }
}








  
  // @cdecorator
  class Person {
    
    constructor(public test: number, public test3: string){            
    }

    @assert((m) => m < 0, "NEGATIVE !!! ")    
    public age: number = 33;

    @mDecorator
    launch(n: number) {
      return n * 2;
  }    
  }
  
  @Component({
    properties: ['name', 'age', 'mmm']
  })
  class MyComponent {
    name: string = 'bob';
    age: number = 34;
  }

  let c = new MyComponent();
  console.log(c[PROPERTIES_SYMBOL]);

for(let i = 0; i < c[PROPERTIES_SYMBOL].length; i++){
  Object.defineProperty(c, c[PROPERTIES_SYMBOL][i], {
    configurable: false,
    set(v){
      this[PROPERTIES_SYMBOL][i] = v;
      getRenderer().render(c[PROPERTIES_SYMBOL][i], v);
    },
    get() {
      return this[PROPERTIES_SYMBOL][i]
    }

  })
}
*/


enum Color{
  blue,
  green,
  red
}

enum Size{
  small,
  medium,
  large
}


interface Specification {
  isSatisfied(product: Product){}
}

class SizeSpecification implements Specification{
  
  constructor(private size: Size) {        
  }

  isSatisfied(product: Product){
    return product.size === size;
  }
}

class ColorSpecification implements Specification{
  constructor(private color: Color){
  }

  isSatisfied(product: Product){
    return product.color === color;
  }
}


class Product{
  
  constructor(private name: string, private size: Size, private color: Color) {        
  }
}

class ProductFilter{
  filterByColor(products, color){
    return products.filter(p => p.color === color)
  }

  filterBySize(products, size){
    return products.filter(p => p.size === size)
  }
}


class BetterFilter{
  filter(items, spec){
    returns items.filter( x => spec.isSatisfied(x));
  }

}

const apple = new Product('apple', Size.small, Color.green);
const tree = new Product('tree', Size.large, Color.green);
const house = new Product('house', Size.large, Color.blue);

const pf = new ProductFilter();
const products = [apple, tree, house];
const filterResult = pf.filterByColor(products, Color.green);
console.log(`Green products (old)`);
for(let p of filterResult){
  console.log(` * ${p.name}`);
}

 

console.log(`Green products (new)`);




