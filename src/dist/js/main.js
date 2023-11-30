var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        document.body.innerHTML = this.responseText;
        onloaded();
    }
};
xhttp.open("GET", "components/SingUpForm.html", true);
xhttp.send();
var onloaded = function () {
    var script = document.createElement('script');
    script.src = "./dist/js/components/SingUpForm.js";
    script.type = 'module';
    document.body.append(script);
    var form = document.querySelector('form.SingUpForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var formData = new FormData(form);
        formData.append('author', 'Руденко Максим');
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: formData
        })
            .then(function (response) { return response.json(); })
            .then(function (json) { return console.log(json); });
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET"
        })
            .then(function (response) { return response.json(); })
            .then(function (json) { return console.log(json); });
    });
};
//# sourceMappingURL=main.js.map