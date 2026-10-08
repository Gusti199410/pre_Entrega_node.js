// Destructuring de arreglos y objetos
const [,, method, route, ...args] = process.argv;
const [resourse, id] = route.split("/");

const URL = "https://fakestoreapi.com";

const request = async (url, options) => {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
};

try {

    if (method === "GET") {

        if (id) {
            const data = await request(`${URL}/${resourse}/${id}`);
            console.log(data);
        } else {
            const data = await request(`${URL}/${resourse}`);
            console.log(data);
        }

    } else if (method === "POST") {

        const [title, price, category] = args;

        if (!title || !price || !category) {
            throw new Error(
                `Title, price, and category are required for creating a new ${resourse}`
            );
        }

        const data = await request(`${URL}/${resourse}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                price,
                category
            })
        });

        console.log(data);  

    } else if (method === "DELETE") {

        if (!id) {
            throw new Error(
                `ID is required for deleting a ${resourse}`
            );
        }

        const data = await request(`${URL}/${resourse}/${id}`, {
            method: "DELETE"
        });
        console.log("Se ha eliminado correctamente el recurso con ID:", id);
        console.log("--------------------------------------------------------------------------------");
        console.log(data);

    } else {

        console.log(`Method ${method} is not supported`);
    }

} catch (error) {

    console.log(error.message);
}