function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            resolve("Success");
        }, 1000);
    });
}

export default getResponseFromAPI;
