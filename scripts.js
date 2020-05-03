document.addEventListener("DOMContentLoaded", function () {
    // number of squares created (used for square ID)
    squareCount = 0;
    // create button element
    let addButton = document.createElement('button');
    // add HTML to button
    addButton.innerHTML = "Add Square";
    // attach classname to button (used to keep button on it's own line)
    addButton.className = "button"
    // add button to the body
    document.body.appendChild(addButton);

    // create container to hold boxes
    let container = document.createElement('div');

    // add container to body

    document.body.appendChild(container);

    //add event listener button click
    addButton.addEventListener("click", function () {
        // increase square count for square ID
        squareCount++
        // create square div
        let square = document.createElement('div')
        // add classname to square 
        square.className = "box"
        // add id to square using squarecount
        square.id = squareCount;
        // create ID test in square
        let id = document.createElement('p');
        let idText = document.createTextNode(squareCount);
        id.style.opacity = '0'
        id.appendChild(idText);
        square.appendChild(id);

        // check if mouse enters square and displays ID 
        square.addEventListener("mouseenter", function () {
            id.style.opacity = '1'
        })
        // check if mouse leaves square to stop displaying ID
        square.addEventListener("mouseleave", function () {
            id.style.opacity = '0'
        })
        // add event listener to change background color to a random color on a click

        square.onclick = event => {
            if (event.detail === 1) {
                // single click
                var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                square.style.backgroundColor = randomColor;
            } else if (event.detail === 2) {
                // double click
                if (square.id % 2 === 0) {
                    if (square.nextSibling != null) {
                        square.nextSibling.remove()
                    } else {
                        alert("There are no boxes to the right to remove")
                    }

                } else {
                    if (square.previousSibling != null) {
                        square.previousSibling.remove()
                    } else {
                        alert("There are no boxes to the left to remove")
                    }
                }
            }
        }

        // add square to body
        container.appendChild(square);
    })

})

