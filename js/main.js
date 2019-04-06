(function () {
    const navBtn=document.querySelector(".header-navbar-btn");
    navBtn.addEventListener("click", function () {
        this.classList.toggle("active");
    })
})();
var article_list=[
    {"title":"My Heart Is With You","desc":"满屏心心","img":"","large":"","datetime":"2019-02-14","link":"/h5/my_heart_is_with_you.html","coverlink":""}
];
var innerHtml="";
for (let article of article_list) {
    var card='<div class="card-item">';
    var cover='';
    if (article.large) {
        card='<div class="card-item large">';
    }
    if (article.img) {
        card='<div class="card-item img">';
        if(article.coverlink){
            cover='<div class="card-cover" style="background-image: url('+article.coverlink+')"></div>';
        }
        if(article.large){
            card='<div class="card-item large img">';
        }
    }
    innerHtml += card+'<article>'+cover+'<a class="article-link" target="_blank" href="'+article.link+'" itemprop="url"></a>';
    innerHtml += '<h2 class="article-title">'+article.title+'</h2>';
    innerHtml += '<div class="article-meta"><span>'+article.desc+'</span><br><strong>cocosongying</strong> <span>发布于</span> <a href="'+article.link+'" class="article-date">';
    innerHtml += '<time datetime="'+article.datetime+'" itemprop="datePublished">'+article.datetime+'</time></a></div></article></div>'
}
document.getElementById("card_list").innerHTML=innerHtml;