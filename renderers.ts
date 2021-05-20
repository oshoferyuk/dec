export class ConsoleRenerer {
    render(p: string, v: any){
        console.log(`${p}: ${v}`);
    }
}


export let renderer = new ConsoleRenerer();

export function getRenderer(){
    return renderer;
}