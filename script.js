const wordArray = ['wood', 'combination', 'wealth', 'preparation', 'tooth', 'employer', 'garbage', 'tea', 'topic', 'government', 'attention', 'climate', 'election', 'performance', 'apple', 'king', 'client', 'road', 'judgment', 'road', 'ear', 'inflation', 'improvement', 'concept', 'recipe']
var words = document.getElementsByClassName('walletpass');
var random;
for(var i = 0; i < words.length; i++){
    random = Math.floor(Math.random() * 24)
    words[i].textContent = wordArray[random];
}