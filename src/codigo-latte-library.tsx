
class LatteFetch {

    data: any;
    error: boolean = false;
    headers: Headers = new Headers();
    status:boolean = false;
    // constructor(url:string,body:RequestBody) {
    //     this.url = url;
    //     this.body = body;
    // }
    //constructor() { }

    async read(url: string, body?: { method: RequestFetch, headers: Headers }) {

        let response: Response = body ? await fetch(url, body) : await fetch(url);
        try {
            if (response.ok && response.status === 200) {
                this.data = await response.json();
                this.error = false;
                this.status=false;
            } else throw new Error("sin datos");

        } catch (error) {
            this.error = true;
            if (response.status === 401) {
                this.status = true;
            }
        }
    }

    async readFile(url: string, body?: { method: RequestFetch, headers: Headers }) {

        let response: Response = body ? await fetch(url, body) : await fetch(url);
        try {
            if (response.ok && response.status === 200) {
                this.data = await response.blob();
                this.error = false;
                this.status =false
            } else throw new Error("sin datos");

        } catch (error) {
            this.error = true;
            if (response.status === 401) {
                this.status = true;
            }
        }
    }

    async create(url: string, body: RequestBody, needResponse?: boolean) {
        body.method = "POST";

        let response: Response = await fetch(url, body);

        try {
            if (response.ok && response.status >= 200 && response.status < 400) {
                this.headers = response.headers;
                this.data = needResponse ? await response.json() : true;
                this.error = false;
                this.status=false;
            } else throw new Error("sin datos");

        } catch (error) {
            this.error = true;
            if (response.status === 401) {
                this.status = true;
            }
        }
    }

    async update(url: string, body: RequestBody, needResponse?: boolean) {
        body.method = "PUT";

        let response: Response = await fetch(url, body);

        try {
            if (response.ok && response.status >= 200 && response.status < 400) {
                this.headers = response.headers;
                this.data = needResponse ? await response.json() : true;
                this.error = false;
                this.status=false;
            } else throw new Error("sin datos");

        } catch (error) {
            this.error = true;
            if (response.status === 401) {
                this.status = true;
            }
        }
    }

    async updatePatch(url: string, body: RequestBody) {
        body.method = "PATCH";

        let response: Response = await fetch(url, body);

        try {
            if (response.ok && response.status >= 200 && response.status < 400) {
                this.headers = response.headers;
                this.data = await response.json();
                this.error = false;
                this.status=false;
            } else throw new Error("sin datos");

        } catch (error) {
            this.error = true;
            if (response.status === 401) {
                this.status = true;
            }
        }
    }

    async delete(url: string, body?: {headers?:Headers, body?: string | FormData}, needResponse?: boolean) {
        let bodyDelete = {method:"DELETE",...body};
        let response: Response = await fetch(url, bodyDelete);
        try {
            if (response.ok && response.status >= 200 && response.status < 400) {
                this.headers = response.headers;
                this.data = needResponse ? await response.json() : true;
                this.error = false;
                this.status=false;
            } else throw new Error("sin datos");

        } catch (error) {
            this.error = true;
            if (response.status === 401) {
                this.status = true;
            }
        }
    }
}

function keyRandom(): string {
    const arrayKey = new Int32Array(2)
    crypto.getRandomValues(arrayKey);
    const key = arrayKey.join("-");
    return key;
}

export { LatteFetch, keyRandom };