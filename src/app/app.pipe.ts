import { Pipe ,PipeTransform} from "@angular/core";

@Pipe({
    name:'NAME',
    standalone:true
})
export class PipeFirst implements PipeTransform{
transform(value: any ) {
    
}
}
