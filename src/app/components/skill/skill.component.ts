import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  strengthSkills = ["athletics"]
  dexteritySkills = ["Acrobatics", "Sleight of Hand", "Stealth"]
  intelligenceSkills = ["Arcana", "History", "Investigation", "Nature", "Religion"]
  wisdomSkills = ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"]
  charismaSkills = ["Deception", "Intimidation", "Performance", "Persuasion"]
  skillNames = this.strengthSkills.concat(this.dexteritySkills, this.intelligenceSkills, this.wisdomSkills, this.charismaSkills)
}

export class Skill {
  name: string
  baseAbility: String
  proficiencyMultipleir: number = 0
    constructor(name: string, baseAbility: string) {
      this.name = name
      this.baseAbility = baseAbility
    }

    setProficiencyMultiplier(multiplier: number) {
      //multiplier should be either 0.5, 1 or 2
      this.proficiencyMultipleir = multiplier
    }
    
}
