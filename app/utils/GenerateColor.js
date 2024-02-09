export function generateColor() {
  const randomNumber = Math.ceil(Math.random()*6)
  let color = ''
  switch (randomNumber) {
    // yellow #FFF504
    case 1: color = 'bg-yellow'
    break;
    // pink #FF42CA
    case 2: color = 'bg-pink'
    break;
    // bright orange #FFAA04
    case 3: color = 'bg-orange-light'
    break;
    // light grey #F2E9E4
    case 4: color = 'bg-gray-light'
    break;
    // dark orange #CC6254
    case 5: color = 'bg-orange-dark'
    break;
    // dark grey #9A8C98
    case 6: color = 'bg-gray-dark'
    break;
  }
  return color
}