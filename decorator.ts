import { IComponentDescriptor, PROPERTIES_SYMBOL } from './types';

export function Component(descriptor: IComponentDescriptor){
    return function(klass: any){
        const klass_proto = klass.prototype;

        const properties = [];
        for(const p of descriptor.properties){
            properties.push(p);
        }

        Object.defineProperty(klass_proto, PROPERTIES_SYMBOL, {
            value: properties,
            configurable: false,
            writable: false
        });

        return klass;
    }
}