const bt0 = document.getElementById('btn0')
const bt1 = document.getElementById('btn1')
const bt2 = document.getElementById('btn2')
const bt3 = document.getElementById('btn3')
const bt4 = document.getElementById('btn4')

btn0.addEventListener('click', function() {
    window.location.href = 'index.html'; // 跳转到首頁
});

bt1.addEventListener('click', function() {
    window.location.href = 'ability/ability.html'; // 跳转到能力特質页面
});


btn2.addEventListener('click', function() {
    window.location.href = 'work/work.html'; // 跳转到能力特質页面
});

btn3.addEventListener('click', function() {
    window.location.href = 'expect/expect.html'; // 跳转到工作經歷页面
});

btn4.addEventListener('click', function() {
    window.location.href = 'intro/intro.html'; // 跳转到未來展望页面
});

// btn4.addEventListener('click', function() {
//     window.location.href = 'implementation.html'; // 跳转到實作歷程页面
// });