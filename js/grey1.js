let startX = 0
let startY = 0
let x = 0, y = 0,flag=0

function init() {
    let box = document.getElementById('pen')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/pen.png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if ((this.offsetLeft >= '65' && this.offsetLeft <= '485') && (this.offsetTop > '306' && this.offsetTop < '632')) {
            document.getElementById('content').style.display = 'block'
			document.getElementById('pen').style.display = 'none'
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/pen.png'
    })
}
function init1() {
    let box = document.getElementById('paint')
    box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
        box.src = '../imgs/paint.png'
    })
    box.addEventListener('touchmove', function (e) {
        let moveX = e.targetTouches[0].pageX - startX
        let moveY = e.targetTouches[0].pageY - startY
        this.style.left = x + moveX + 'px'
        this.style.top = y + moveY + 'px'
        console.log(this.offsetTop, this.offsetLeft)
        e.preventDefault()
        if ((this.offsetLeft >= '65' && this.offsetLeft <= '485') && (this.offsetTop > '306' && this.offsetTop < '632')) {
            document.getElementById('content').style.display = 'none'
			 document.getElementById('content1').style.display = 'block'
			document.getElementById('paint').style.display = 'none'
        }
    })
    box.addEventListener('touchend', function (e) {
        box.src = '../imgs/paint.png'
    })
}