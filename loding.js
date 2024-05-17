// https://openapi.programming-hero.com/api/videos/category/1000
// const res = await fetch('https://jsonplaceholder.typicode.com/photos')
// const data = await res.json();

// fetch('https://openapi.programming-hero.com/api/videos/category/1000')
//     .then(res => res.json())
//     .then(data => console.log(data.data
//     ))
//     .catch(error => console.error('Error:', error));

// https://openapi.programming-hero.com/api/videos/categories
const ladingCategory = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
        const data = await res.json();
        const container = document.getElementById('menu-container');

        // Assuming `hg` should be a property of the element in `data.data`.
        data.data.forEach(element => {
            console.log(element);
            const div = document.createElement('div');
            // Use a property of `element` to replace `${hg}`. For example, if `element` has a `name` property:
            div.innerHTML = `<a class="bg-gray-600 text-white" href="#">${element.title}</a >
            <a class="bg-gray-600 text-white" href="#">${element.title}</a>
            <a class="bg-gray-600 text-white" href="#">${element.authors}</a>`;
            container.appendChild(div);
        });
    } catch (error) {
        // console.error('Error:', error);
    }
};

// Call the function
ladingCategory();
