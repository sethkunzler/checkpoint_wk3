export function generateColor() {
  const randomNumber = Math.ceil(Math.random()*4)
  let color = ''
  switch (randomNumber) {
    // yellow #FFF504
    case 1: color = 'yellow'
    break;
    // pink #FF42CA
    case 2: color = 'pink'
    break;
    // bright orange #FFAA04
    case 3: color = 'orange-light'
    break;
    // dark orange #CC6254
    case 4: color = 'orange-dark'
    break;
  }
  return color
}