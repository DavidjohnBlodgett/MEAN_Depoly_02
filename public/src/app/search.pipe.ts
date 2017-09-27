import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(args == undefined){
          return value;
      }
      var results = value.filter((game)=>{
          return game.name.toUpperCase().indexOf(args.toUpperCase()) !== -1 ||
          game.score.toString().toUpperCase().indexOf(args.toUpperCase()) !== -1 ||
          game.percent.toString().toUpperCase().indexOf(args.toUpperCase()) !== -1
      })
      return results;
  }

}
