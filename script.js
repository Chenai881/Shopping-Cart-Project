var products = [];
var prices = [];
var images = [];
$(".add").click(function() {
    var product = $(".name").val();
    var price = $(".price").val();
    var image = $(".picture").val();
    images.push(image);
    products.push(product);
    prices.push(price);
    console.log(products, images, price);
    $(".images").append("<li>" + image + "</li>");
    $(".products").append("<li>" + product + "</li>");
    $(".prices").append("<li>" + prices + "</li>");
});

$(".done").click(function() {});