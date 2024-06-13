const collectiveWisdom = {
    'signInfo': ['star', 'moon', 'sun', 'comet'],
    'fortuneOutput': ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    'advice': ['go out and eat', 'not read this', 'play more', 'trust no one']
  }
const getRandomNum = num => {
    return Math.floor(Math.random() * num)
}
let generatedWisdom = [];
for (prop in collectiveWisdom) {
    let randomIndex = getRandomNum(collectiveWisdom[prop].length)
    if (prop === 'signInfo') {
        generatedWisdom.push(`Your sign is ${collectiveWisdom[prop][randomIndex]}`)
    } else if(prop === 'fortuneOutput') {
        generatedWisdom.push(`You are having a ${collectiveWisdom[prop][randomIndex]}`)
    } else if(prop === 'advice') {
        generatedWisdom.push(`You should ${collectiveWisdom[prop][randomIndex]}`)
    } else {
        generatedWisdom.push('No enough info.')
    }
}
const joinedWisdom = wisdom => {
    return wisdom.join
}
console.log(joinedWisdom(generatedWisdom))