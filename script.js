
//Task 1 :

async function iterateWithAsyncAwait(array) {
    for (let value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve,1000));
    }
}
const array = [1,2,3,45,48,45,6,8,2,4];
console.log(iterateWithAsyncAwait(array));

//Task 2:

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({data: "Data fetched from API" });
        }, 2000);
    });
}
async function awaitCall() {
    const response = await fetchData();
    console.log(response.data);
}
awaitCall();

//Task 3.1:

async function fetchData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(new Error('this is an error'));
        }, 2000);
    });
}
async function awaitCall (){
    try {
        const data = await fetchData();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error fetching data");
    }
}
awaitCall();

//task 3.2:

async function asyncFunction1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Function 1 executed");
            resolve();
        }, 5000);
    });
}
async function asyncFunction2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Function 2 executed");
            resolve();
        }, 1000);
    });
}
async function asyncFunction3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Function 3 executed");
            resolve();
        }, 4000);
    });
}
async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}
chainedAsyncFunctions();

//task 4:

const fetchdata1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 1");
        }, 2000);
    });
}
const fetchdata2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 2");
        }, 2000);
    });
}
async function concurrentRequests() {
    try {
        const [data1, data2] = await Promise.all([fetchdata1(), fetchdata2()]);
        console.log("Data received :", data1, data2);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
concurrentRequests();

//task 5:

async function fetchData(url) {
    const response = await fetch(url);
    if (response.ok) {
        return response.json();
    }
    else throw new Error('Failed to fetch');
}
async function parallelCalls(urls) {
    try {
        const data = [];
        for(let i = 0;i<urls.length;i++){
            data.push(fetchData(urls[i]));
        }
        const results = await Promise.all(data);
        console.log("Data received :", results);
    } catch (error) {
        console.error("Error fetching data ");
    }
}
const urls = ['http://api.openweathermap.org/data/2.5/weather','https://newsapi.org/v2/top-headlines','https://api.coingecko.com/api/v3/coins/markets'];
parallelCalls(urls);
