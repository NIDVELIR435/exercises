function order(words){
    const splitWords = words.split(' ');
    splitWords.sort((a, b) => {
        const aOrder = Number(a.split('').find(Number));
        const bOrder = Number(b.split('').find(Number));

        return aOrder - bOrder;
    })

    return splitWords
}

console.log(order("is2 Thi1s T4est 3a"))
