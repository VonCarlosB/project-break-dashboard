const addBtn = document.getElementById('addLink')
const links = document.getElementById('links')
const linkContainer = document.getElementById('linkContainer')
const linkForm = document.getElementById('linkForm')
const linkName = document.getElementById('linkName')
const linkRef = document.getElementById('reference')
const saveBtn = document.getElementById('saveLink')
const closeBtn = document.getElementById('closeButton')
/* TEMPLATE */
const linkTemplate = (name, reference) => {
    return `
    <div>
        <a href="https://${reference}" target="_blank">${name}</a>
        <button onclick="removeLink(this)">X</button>
    </div>
    `
}
let linkList = []

addBtn.addEventListener('click', newLink)
closeBtn.addEventListener('click', closeForm)
saveBtn.addEventListener('click', saveLink)

//localStorage.clear()

if(localStorage.getItem('links') == null){
    localStorage.setItem('links', '[]')
}else{
    linkList = JSON.parse(localStorage.getItem('links'))
    let ans = ''
    linkList.forEach(element => {
        ans += linkTemplate(element.name, element.href)
    });
    links.innerHTML = ans
}

function newLink() {
    linkContainer.style.display = 'block'
}

function closeForm() {
    linkContainer.style.display = 'none'
    linkName.value = ''
    linkRef.value = ''
}

function saveLink() {
    let name = linkName.value
    let ref = linkRef.value
    if(name != null && ref != null){
        links.innerHTML += linkTemplate(name, ref)
        let link = {
            name: name,
            href: ref
        }
        linkList.push(link)
        localStorage.setItem('links', JSON.stringify(linkList))
        closeForm()
    }
}

function removeLink(element) {
    let a = element.parentElement.children[0]
    let index = linkList.findIndex((data) => {
        return data.name === a.innerText
    })
    links.removeChild(element.parentElement)
    linkList.splice(index, 1)
    localStorage.setItem('links', JSON.stringify(linkList))
}
