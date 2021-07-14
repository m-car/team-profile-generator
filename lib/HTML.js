class HTML{
    render(name, employees){
        return `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${this.renderTitle(name)} Employee</title>
        
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
              integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
              crossorigin="anonymous"
            />
          </head>
          <body>
            <div class="container">
              <div class="jumbotron">
                <h1 class="display-4">${this.renderTitle(name)}</h1>
              </div>
              <div class="card" style="max-width: 20rem">
                <ul class="list-group list-group-flush">
                  ${todos.map((todo) => this.renderListItem(todo)).join("")}
                </ul>
              </div>
            </div>
          </body>
        </html>
        `;
    }
    renderTitle(name) {
        return `${name}'s Task List`;
      }
    renderEmployee(employee){
        return `<h2>${employee.name}</h2>
        <h2>${employee.role}</h2>
        <ul>
        <li>${employee.email}</li>
        </ul>`
        
    }
}
    
    module.exports = HTML;

