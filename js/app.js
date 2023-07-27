const htmlCode = document.getElementById("htmlCode")
const cssCode = document.getElementById("cssCode")
const jsCode = document.getElementById("jsCode")
htmlCode.value = localStorage.getItem('htmlCode')??"<div>\n\n</div>";
cssCode.value = localStorage.getItem('cssCode')??"<style>\n\n</style>";
jsCode.value = localStorage.getItem('jsCode')??"<script>\n\n</script>";
showPreview()

htmlCode.addEventListener('input', () => {
    localStorage.setItem('htmlCode', htmlCode.value)
    showPreview()
})
cssCode.addEventListener('input', () => {
    localStorage.setItem('cssCode', cssCode.value)
    showPreview()
})
jsCode.addEventListener('input', () => {
    localStorage.setItem('jsCode', jsCode.value)
    showPreview()
})

function showPreview() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = "" + document.getElementById("cssCode").value + "";
    const jsCode = "" + document.getElementById("jsCode").value + "";
    console.log(document.getElementById("preview-window").contentWindow.document);
    const frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
    frame.close();
}

function show(x) {
    document.getElementById("html").style.display = "none";
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById(x).style.display = "block";
}

function show_all() {
    if (window.innerWidth >= 992) {
        document.getElementById("html").style.display = "block";
        document.getElementById("css").style.display = "block";
        document.getElementById("js").style.display = "block";
        document.getElementById("result").style.display = "block";
    }
    if (window.innerWidth < 992 && document.getElementById("html").style.display == "block") {
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("result").style.display = "none";
    }
}

