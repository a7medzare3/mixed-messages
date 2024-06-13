const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
};

const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

const generateWisdom = () => {
    const sign = getRandomElement(collectiveWisdom.signInfo);
    const fortune = getRandomElement(collectiveWisdom.fortuneOutput);
    const advice = getRandomElement(collectiveWisdom.advice);

    return `Your sign is ${sign}. You are having a ${fortune}. You should ${advice}.`;
};

console.log(generateWisdom());