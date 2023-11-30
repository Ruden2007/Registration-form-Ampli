const xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        document.body.innerHTML = this.responseText
        onloaded()
    }
}
xhttp.open("GET", "components/SingUpForm.html", true)
xhttp.send()

const onloaded = () => {
    const script = document.createElement('script')
    script.src = "./dist/js/components/SingUpForm.js"
    script.type = 'module'
    document.body.append(script)

    const form: HTMLFormElement = document.querySelector('form.SingUpForm')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const formData = new FormData(form)
        formData.append('author', 'Руденко Максим')

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(json => console.log("POST: " + json))

        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(json => console.log("GET: " + json))

    })
}
