// var num = 5;

// while (num) {
//     console.log(num)
//     num--;
// }

// for (i = 0; i < 5; i++) {
//     console.log(i)
// }

var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {
    links[i].className = "link-" + i;
}