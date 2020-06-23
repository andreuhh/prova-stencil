class DataController {

    async getData() {
        try {
            //const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1`);
            const json = await response.json();

            console.log(response);
            console.log(json);
            console.log('ciao');
        } catch (err) {
            console.log(err);
        }

    }
}


export const DataService = new DataController;