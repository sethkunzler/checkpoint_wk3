export function generateColor() {
  const randomNumber = Math.ceil(Math.random()*7)
  let color = ''
  switch (randomNumber) {
    // yellow #FFF504
    case 1: color = 'yellow'
    break;
    // pink-light #FF42CA
    case 2: color = 'pink-light'
    break;
    // pink-dark #D642FF
    case 3: color = 'pink-dark'
    break;
    // green #8CFF04
    case 4: color = 'green'
    break;
    // orange-light #FFAA04
    case 5: color = 'orange-light'
    break;
    // orange-red #FF426B
    case 6: color = 'orange-red'
    break;
    // orange-dark #CC6254
    case 7: color = 'orange-dark'
    break;
  }
  return color
}