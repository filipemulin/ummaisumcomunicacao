const html = document.querySelector("html")
const img = document.querySelector("html")

const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    inv: getStyle(html, "--inv")
}

const darkMode = {
    bg: "#0d0d0d",
    bgPanel: "#151515",
    colorHeadings: "turquoise",
    colorText: "whitesmoke",
    inv: "invert(100%)"
    
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
});

// teste

