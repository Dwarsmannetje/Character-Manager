import { Component } from '@angular/core';
import { VariableService } from '../../variable-service.service';
import { GivenVariable } from '../../classes/given-variable';
import { CalculatedVariable } from '../../classes/calculated-variable';
import { Property } from '../../enums/property';

@Component({
  selector: 'app-stat-roll-input',
  templateUrl: './stat-roll-input.component.html',
  styleUrls: ['./stat-roll-input.component.scss'],
  providers: [VariableService]
})
export class StatRollInputComponent {
  variableService: VariableService;
  abilityScrores: GivenVariable[] = []
  abilityModifiers: CalculatedVariable[] = []
  AbilityScore = Property.AbilityScore
  AbilityModifier = Property.AbilityModifier

  constructor(variableService: VariableService) {
    this.variableService = variableService
    // for (const name of ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"]) {
    //   this.stats.push(new Stat(name))
    // }
  }
  ngOnInit() {
    for (const variable of this.variableService.getVariables()) {
      if (variable.returnType() === GivenVariable) {
        if (variable.getProperties().includes(Property.AbilityScore)) {
          this.abilityScrores.push(variable as GivenVariable)
        }
      } else if (variable.returnType() === CalculatedVariable) {
        if (variable.getProperties().includes(Property.AbilityModifier)) {

        }
      }
    }
  }
  findVariableId(name: string) {
    for (const variable of this.variableService.getVariables()) {
      if ((variable.returnType() === GivenVariable)) {
        if (variable.getProperties().includes(Property.AbilityScore)) {
          if (variable.name == name) {
            return this.variableService.getVariables().findIndex((a) => a == variable)
          }
        }
      }
    }
    return -1
  }
  updateVariable(id: number, value: number) {
    let result = this.variableService.getVariables()[id]
    result.value = value
    return result
  }
}



/**
 * stat value:
 * 1      trash         -5                            
 * 2-3    horrible      -4  3 = minimum roll (0%)     0   1     3   -1000  
 * 4-5    bad           -3  (1%)                      1   2     9   -200   
 * 6-7    dissapointing -2  (5%)                      6   7     39  -40   
 * 8-9    below average -1  (12%)                     18  19    111 -10   
 * 10-11  average       0   (20%)                     38  39    251 0 	  
 * 12-13  above average +1  average stat roll (26%)   64  65    387 10    
 * 14-15  good          +2  (22%)                     86  87    519 30    
 * 16-17  great         +3  (11%)                     97  98    585 100   
 * 18-19  peak          +4  18 = maximum roll (2%)    99  100   597 400   
 * 20-21  legendary     +5  
 * 22-23  monster       +6  
 * 24-25  mythical      +7  
 * 26-27  godlike       +8  
 * 28-29  demi-god      +9  
 * 30     godly         +10 
 * 
 * [8,10,14,16,12,14] => [-10,0,30,100,10,30] => 160
 * [8,11,11,12,16,12] => [-10,0,0,10,100,10] => 110 =(16+2=>+300)> [8,5,7,6,18,10] => [-10,-200,-40,-40,400,0] => 110 =(5-2=>-800)> [16,3,17,16,18,18] => [100,-1000,100,100,400,400] => 100(10)
 * [15,17,16,16,11,11] => [30,100,100,100,0,0] => 330 => [15,17,16,16,11,11] => [15,19,16,10,11,5] => [30,400,100,0,0,-200] => 330 
 * [10,10,13,6,14,13] => [0,0,10,-40,30,10] => 10 => [10,10,17,4,16,13] => [0,0,100,-200,100,10] => 10 => [16,16,19,2,18,13] => [100,100,400,-1000,400,10] => 10
 */
