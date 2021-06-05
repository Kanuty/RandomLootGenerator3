  
  import {
      axe,
      sword,
      khopesh,
      greatAxe,
      greatSword,
      greatPick,
      elvenBattleAxe,
      claymore,
      hammer,
      tileanPike,
      woodElfHuntingSpear,
      militaryPick,

      whiteWolfHammer,
      orcChoppa,
      greatWarhammer,

      
    } from './img'

    import {
      fullStuddedLeather,
      studdedJack,
      studdedJerkin,
      studdedLeggins,
      studdedSkullcap
    } from './img'
  
  
  export const melee = 
 [
   //unusuall weapons
  {name:"sword", image:sword, category:'melee', value:"140 gc", group:"ordinary", power:"S", qualities:"defensive"},
  {name:"hammer", image:hammer, category:'melee', value:"70 gc", group:"ordinary", power:"S", qualities:"pummeling"},
  {name:"axe", image:axe, category:'melee', value:"60 gc", group:"ordinary", power:"S", qualities:"impact"},
  {name:"military pick", image:militaryPick, category:'melee', value:"90 gc", group:"ordinary", power:"S", qualities:"impact"},
  {name:"elven battle-axe", image:elvenBattleAxe, category:'melee', value:"priceless", group:"two-handed", power:"S+1", qualities:"armor piercing"},
  {name:"khopesh", image:khopesh, category:'melee', value:"10 gc", group:"ordinary", power:"S", qualities:"slow"},
  {name:"wood elf hunting spear", image:woodElfHuntingSpear, category:'melee', value:"priceless", group:"ordinary", power:"S+1", qualities:"fast"},
  {name:"tilean pike", image: tileanPike, category:'melee', value:"20 gc", group:"two-handed", power:"S", qualities:"fast"},
  {name:"claymore", image:claymore, category:'melee', value:"30 gc", group:"two-handed", power:"S", qualities:"slow / impact & slow"},
  {name:"white wolf hammer", image:whiteWolfHammer, category:'melee', value:"40 gc", group:"ordinary", power:"S+1", qualities:"tiring"},
  {name:"orc choppa", image:orcChoppa, category:'melee', value:"worthless", group:"orc choppa", power:"S", qualities:"special"},
  {name:"great axe", image:greatAxe, category:'melee', value:"120 gc", group:"two-handed", power:"S+1", qualities:"impact, slow, tiring"},
  {name:"great warhammer", image:greatWarhammer, value:"150 gc",category:'melee', group:"two-handed", power:"S", qualities:"impact, pummeling, slow"},
  {name:"great pick", image:greatPick, category:'melee', value:"200 gc", group:"two-handed", power:"S", qualities:"armor piercing, impact, slow"},
  {name:"great sword", image:greatSword, category:'melee', value:"350 gc", group:"two-handed", power:"S+1", qualities:"impact, slow"},

  //common weapons
  {name:"buckler",category:'melee', value:"2 gc", group:"parrying", power:"S-4", qualities:"balanced, defensive, pummeling"},
  {name:"dagger",category:'melee', value:"1 gc", group:"ordinary", power:"S-3", qualities:"none"},
  {name:"demilance",category:'melee', value:"20 gc", group:"cavalry", power:"S", qualities:"fast, impact, tiring"},
  {name:"flail",category:'melee', value:"15 gc", group:"flail", power:"S+1", qualities:"impact, tiring"},
  {name:"foil",category:'melee', value:"18 gc", group:"fencing", power:"S-2", qualities:"fast, precise"},
  {name:"gauntlet",category:'melee', value:"1 gc", group:"ordinary", power:"S-3", qualities:"pumelling"},
  {name:"halberd",category:'melee', value:"15 gc", group:"two-handed", power:"S", qualities:"special"},
  {name:"lance",category:'melee', value:"40 gc", group:"cavalry", power:"S+1", qualities:"fast, impact, tiring"},
  {name:"main gauche",category:'melee', value:"4 gc", group:"parrying", power:"S-3", qualities:"balanced, defensive"},
  {name:"morning star",category:'melee', value:"15 gc", group:"flail", power:"S", qualities:"impact tiring"},
  {name:"quaterstaff",category:'melee', value:"3 s", group:"ordinary", power:"S-2", qualities:"defensive, pummeling"},
  {name:"rapier",category:'melee', value:"18 gc", group:"fencing", power:"S-1", qualities:"fast"},
  {name:"shield",category:'melee', value:"10 gc", group:"ordinary", power:"S-2", qualities:"defensive, special"},
  {name:"spear",category:'melee', value:"10 gc", group:"flail", power:"S", qualities:"fast"},
  {name:"sword-breaker",category:'melee', value:"5 gc", group:"parrying", power:"S-3", qualities:"balanced, special"},

  //skaven mele weapons
  {name:"plague censer",category:'melee', value:"???", group:"flail", power:"S+1", qualities:"impact, special, tiring"},
  {name:"punch dagger",category:'melee', value:"???", group:"ordinary", power:"S-1", qualities:"balaced, defensive"},
  {name:"rat claws",category:'melee', value:"???", group:"ordinary", power:"S-3", qualities:"special"},
  {name:"tail blade",category:'melee', value:"???", group:"ordinary", power:"S-2", qualities:"fast, special"},
  {name:"things-catcher",category:'melee', value:"???", group:"two-handed", power:"S+1", qualities:"snare"},
 ]

  export const ranged = 
 [
  {name:"bola", category:'ranged',value:"7 s", group:"entangling", power:"1", range:"8/16", reload:"half", qualities:"snare"},
  {name:"bow",category:'ranged', value:"10 gc", group:"ordinary", power:"3", range:"24/48", reload:"half", qualities:"none"},
  {name:"crossbow",category:'ranged', value:"25 gc", group:"crossbow", power:"4", range:"30/60", reload:"full",qualities:"none"},
  {name:"crossbow pistol",category:'ranged', value:"35 g", group:"crossbow", power:"2", range:"8/16", reload:"full", qualities:"none"},
  {name:"elfbow",category:'ranged', value:"70 gc", group:"longbow", power:"3", range:"36/72", reload:"half", qualities:"armor piercing"},
  {name:"jevelin",category:'ranged', value:"25 s", group:"ordinary", power:"S-1", range:"8/16", reload:"half", qualities:"none"},
  {name:"lasso",category:'ranged', value:"1 gc", group:"entangling", power:"n/a", range:"8/-", reload:"half", qualities:"snare"},
  {name:"longbow",category:'ranged', value:"15 gc", group:"longbow", power:"3", range:"30/60", reload:"half", qualities:"armor piercing"},
  {name:"net",category:'ranged', value:"3 gc", group:"entagling", power:"n/a", range:"4/8", reload:"full", qualities:"snare"},
  {name:"repeter crossbow",category:'ranged', value:"100 gc", group:"crossbow", power:"2", range:"16/32", reload:"free", qualities:"special"},
  {name:"shortbow",category:'ranged', value:"7 gc", group:"ordinary", power:"3", range:"16/32", reload:"half", qualities:"none"},
  {name:"sling",category:'ranged', value:"4 gc", group:"sling", power:"3", range:"16/32", reload:"half", qualities:"none"},
  {name:"spear",category:'ranged', value:"10 gc", group:"ordinary", power:"S", range:"8/-", reload:"half", qualities:"none"},
  {name:"staff sling",category:'ranged', value:"6 gc", group:"sling", power:"4", range:"24/48", reload:"full", qualities:"none"},
  {name:"throwing axe",category:'ranged', value:"5 gc", group:"throwing", power:"S-2", range:"8/-", reload:"half", qualities:"none"},
  {name:"throwing hammer",category:'ranged', value:"5 gc", group:"throwing", power:"S-2", range:"8/-", reload:"half", qualities:"none"},
  {name:"throwing dagger",category:'ranged', value:"3 gc", group:"throwing", power:"S-3", range:"6/12", reload:"half", qualities:"none"},
  {name:"throwing star",category:'ranged', value:"3 gc", group:"throwing", power:"S-3", range:"6/12", reload:"half", qualities:"none"},

//gunpowder weapons
  {name:"blunderbuss",category:'ranged', value:"70 gc", group:"gunpowder", power:"3", range:"32/-", reload:"3 full", qualities:"shrapnel, unreliable"},
  {name:"bomb",category:'ranged', value:"75 gc", group:"explosive", power:"6", range:"4/20", reload:"are you serious?", qualities:"unreliable"},
  {name:"duck-foot",category:'ranged', value:"500 gc", group:"engineer", power:"3", range:"16/-", reload:"4 full", qualities:"special, experimental"},
  {name:"firearm",category:'ranged', value:"300 gc", group:"gunpowder", power:"4", range:"24/48", reload:"2 full", qualities:"impact, unreliable"},
  {name:"hochland long rifle",category:'ranged', value:"450 gc", group:"engineer", power:"4", range:"48/96", reload:"2 full", qualities:"impact, unreliable"},
  {name:"incendentary",category:'ranged', value:"5 gc", group:"explosive", power:"4", range:"4/10", reload:"full + half", qualities:"special"},
  {name:"jezzail",category:'ranged', value:"??? ", group:"gunpowder", power:"3", range:"24/72", reload:"2 full", qualities:"none"},
  {name:"pistol",category:'ranged', value:"200 gc", group:"gunpowder", power:"4", range:"8/16", reload:"2 full", qualities:"impact, unreliable"},
  {name:"repeater handgun",category:'ranged', value:"600 gc", group:"engineer", power:"4", range:"24/48", reload:"free", qualities:"experimental, special"},
  {name:"repeater pistol", category:'ranged',value:"400 gc", group:"engineer", power:"4", range:"8/16", reload:"2 full", qualities:"experimental, special"},

//siege weapons... yes really :v
  {name:"bellybow", category:'ranged',value:"150 gc", group:"ordinary", power:"5", range:"50/100", reload:"6 full", qualities:"none"},
  {name:"bolt thrower",category:'ranged', value:"200 gc", group:"ordinary", power:"12", range:"150/300", reload:"15 full", qualities:"armor piercing"},
  {name:"oxybels",category:'ranged', value:"600 gc", group:"ordinary", power:"10", range:"70/150", reload:"12 full", qualities:"none"},
  {name:"scorpion",category:'ranged', value:"400 gc", group:"ordinary", power:"8", range:"100/200", reload:"10 full", qualities:"none"},

//skaven ranged weapons yes yes
  {name:"blowgun", category:'ranged',value:"???", group:"blowgun", power:"0", range:"8/16", reload:"half", qualities:"none"},
  {name:"poisoned-wind globe", category:'ranged', value:"???", group:"throwing", power:"special", range:"4/10", reload:"full", qualities:"special"},
  {name:"ratling gun",category:'ranged', value:"???", group:"engineer", power:"3", range:"10/30", reload:"10 full", qualities:"experimental, shrapnel"},
  {name:"smoke bomb",category:'ranged', value:"???", group:"throwing", power:"n/a", range:"4/20", reload:"full", qualities:"special"},
  {name:"warpfire thrower",category:'ranged', value:"???", group:"engineer", power:"4", range:"10 full", reload:"experimental, special", qualities:"special"},
  {name:"warplock jezzail",category:'ranged', value:"???", group:"gunpowder", power:"5", range:"4/20", reload:"full", qualities:"armor piercing, unreliable"},
  {name:"warplock pistol",category:'ranged', value:"???", group:"gunpowder", power:"5", range:"4/20", reload:"2 full", qualities:"armor piercing, unreliable"}
 ]

  export const armor = 
 [
  {name:"leather skullcap", value:"3 gc", category:'armor', location:"head", armor:'1' },
  {name:"leather jerkin", value:"6 gc",category:'armor',  location:"body", armor:'1'},
  {name:"leather jack", value:"12 gc", category:'armor', location:"body, arms", armor:'1'},
  {name:"leather leggings", value:"10 gc", category:'armor', location:"legs", armor:'1'},
  {name:"full leather", value:"25 gc", category:'armor', location:"all", armor:'1'},

  {name:"studded skullcap", image:studdedSkullcap, value:"10 gc", category:'armor', location:"head", armor:'1'},
  {name:"studded jerkin", image:studdedJerkin, value:"20 gc",category:'armor',  location:"body", armor:'1'},
  {name:"studded jack", image:studdedJack, value:"30 gc",category:'armor',  location:"body, arms", armor:'1'},
  {name:"studded leggins", image:studdedLeggins, value:"120 gc",category:'armor',  location:"legs", armor:'1'},
  {name:"full studded leather", image: fullStuddedLeather, value:"90 gc",category:'armor',  location:"all", armor:'2'},

  {name:"mail coif", value:"20 gc",category:'armor',  location:"head", armor:'2'},
  {name:"mail shirt", value:"60 gc", category:'armor', location:"body", armor:'2'},
  {name:"sleved mail shirt", value:"95 gc", category:'armor', location:"body, arms", armor:'2'},
  {name:"mail coat", value:"75 gc", category:'armor', location:"body, legs", armor:'2'},
  {name:"sleeved mail coat", value:"130 gc",category:'armor',  location:"body, arms, legs", armor:'2'},
  {name:"mail leggings", value:"20 gc",category:'armor' , location:"legs", armor:'2'},
  {name:"full mail armor", value:"170 gc",category:'armor',  location:"all", armor:'3'},

  {name:"scale coif", value:"30 gc",category:'armor',  location:"head", armor:'3'},
  {name:"scale shirt", value:"150 gc",category:'armor',  location:"body", armor:'3'},
  {name:"sleeved scale shirt", value:"225 gc", category:'armor', location:"body, arms", armor:'3'},
  {name:"scale coat", value:"225 gc",category:'armor',  location:"body, legs", armor:'3'},
  {name:"sleeved scale coart", value:"300 gc", category:'armor', location:"body, arms, legs", armor:'3'},
  {name:"scale leggings", value:"75 gc",category:'armor',  location:"legs", armor:'3'},
  {name:"full scale armor", value:"360 gc",category:'armor',  location:"all", armor:'4'},

  {name:"plate helmet", value:"30 gc",category:'armor',  location:"head", armor:'2'},
  {name:"brestplate", value:"70 gc", category:'armor', location:"body", armor:'2'},
  {name:"plate bracers", value:"60 gc",category:'armor',  location:"arms", armor:'2'},
  {name:"plate leggings", value:"70 gc",category:'armor',  location:"legs", armor:'2'},
  {name:"full plate armor", value:"400 gc",category:'armor',  location:"armor", armor:'5'},

  {name:"ithilmar main coif", value:"???",category:'armor',  location:"head", armor:'3'},
  {name:"ithilmar mail shirt", value:"???",category:'armor',  location:"body", armor:'3'},
  {name:"ithilmar sleeved shirt", value:"???",category:'armor',  location:"body, arms", armor:'3'},
  {name:"ithilmar mail coat", value:"???",category:'armor',  location:"body, legs", armor:'3'},
  {name:"ithilmar sleeved mail coat", value:"???",category:'armor',  location:"body, arms, legs", armor:'3'},
  {name:"ithilmar mail leggings", value:"???", category:'armor', location:"body legs", armor:'3'},
  {name:"ithilmar full mail armor", value:"???",category:'armor',  location:"all", armor:'4'},

  {name:"gromril helmet", value:"???", category:'armor', location:"head", armor:'3'},
  {name:"gromril brestplate", value:"???",category:'armor',  location:"body", armor:'3'},
  {name:"gromril plate bracers", value:"???",category:'armor',  location:"arms", armor:'3'},
  {name:"gromril plate leggings", value:"???",category:'armor',  location:"legs", armor:'3'},
  {name:"gromril full plate", value:"???", category:'armor', location:"armor", armor:'6'},

  {name:"chaos armor", value:"???", category:'armor', location:"armor", armor:'5'},

 ]

 export const clothes = 
 [
  {name:"apron", category:'clothes', value:"5 p" },
  {name:"belt",category:'clothes', value:"3 s" },
  {name:"boots hip high",category:'clothes', value:"8 gc" },
  {name:"boots hobnailed",category:'clothes', value:"30 gc" },
  {name:"boots low",category:'clothes', value:"18 s" },
  {name:"boots riding", category:'clothes',value:"3 gc" },
  {name:"cannoncs",category:'clothes', value:"6 gc" },
  {name:"cap",category:'clothes', value:"10 s" },
  {name:"cape short", category:'clothes',value:"5 s" },
  {name:"cape long",category:'clothes', value:"9 s" },
  {name:"chemise",category:'clothes', value:"1 gc" },
  {name:"coat light",category:'clothes', value:"3 gc" },
  {name:"coat heavy",category:'clothes', value:"5 gc" },
  {name:"codpiece",category:'clothes', value:"4g c" },
  {name:"corset",category:'clothes', value:"3 gc" },
  {name:"costume",category:'clothes', value:"5g c" },
  {name:"doublet",category:'clothes', value:"10 s" },
  {name:"dress",category:'clothes', value:"1 gc" },
  {name:"girdled",category:'clothes', value:"4 gc" },
  {name:"gloves",category:'clothes', value:"3 gc" },
  {name:"handkerchief",category:'clothes', value:"6 p" },
  {name:"hat",category:'clothes', value:"1 gc" },
  {name:"hood",category:'clothes', value:"5 s" },
  {name:"jerkin",category:'clothes', value:"10 s" },
  {name:"kilt",category:'clothes', value:"12 s" },
  {name:"loincloth", category:'clothes',value:"4 s" },
  {name:"mask",category:'clothes', value:"10 s" },
  {name:"nightsirt",category:'clothes', value:"2 gc" },
  {name:"overcoat",category:'clothes', value:"10 gc" },
  {name:"priest vestments",category:'clothes', value:"13 gc" },
  {name:"rags",category:'clothes', value:"1 p" },
  {name:"robes",category:'clothes', value:"15 gc" },
  {name:"sandals",category:'clothes', value:"2s" },
  {name:"sash",category:'clothes', value:"30 p" },
  {name:"scarf", category:'clothes',value:"15 p" },
  {name:"socks", category:'clothes',value:"16 s" },
  {name:"shoes",category:'clothes', value:"26 s" },
 ]



