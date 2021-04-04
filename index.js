document.getElementById('btn').addEventListener('click', () => {
    var nameid = document.querySelector('#nameid').value;
    if (nameid === '') {
        alert('Please input Your Name')
    } else {

        alert(nameid)
        document.getElementById('imgchange').src = `//joeschmoe.io/api/v1/${nameid} `
    }
})