console.log('person1: show ticket');
console.log('person2: show ticket');

const preMovie = async() => {
    const promiseWifeBringingTickets = new Promise((resolve,reject)=> {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));

    const getButter = new Promise((resolve,reject)=> resolve(`butter`));

    const getColdDrinks = new Promise((resolve,reject)=> resolve(`drinks`));

    let ticket = await promiseWifeBringingTickets;

    let [popcorn, butter, drinks] = await Promise.all([getPopcorn,getButter,getColdDrinks])

    console.log(`${popcorn}, ${butter}, ${drinks}`);

    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));