const areAnagrams = (word1, word2) => {
    for(var i = 0; i < word1.length-1; i++){
        if(!word2.includes(word1[i])){
            return false
        }
    }
    return true
}