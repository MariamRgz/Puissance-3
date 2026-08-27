export function timeToMixJuice (juice) {
  switch (juice){
    case 'Pure Strawberry Joy':
      return (0.5);
      break;
    case 'Energizer' :
      return 1.5;
      break;
    case 'Green Garden' :
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default :
      return 2.5
  }
};

export function limesToCut (nob, tab){
  let i=0
  while (nob>0 && i <tab.length){
    switch(tab[i]){
      case 'small':
        nob-=6;
        i+=1;
        break;
      case 'medium':
        nob-=8;
        i+=1;
        break;
      case 'large':
        nob-=10;
        i+=1;
        break;
      
    }
  }
  return i
}

export function remainingOrders  (minutes, tab)  {
  let i=0
  while (minutes > 0 && i < tab.length){
    minutes-=timeToMixJuice(tab[i])
    i+=1
  }
  return tab.slice(i,tab.length)
}