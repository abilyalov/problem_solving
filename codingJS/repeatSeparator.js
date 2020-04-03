function repeatSeparator(word, sep, count){
    let res = '';
    for (let i = 0; i < count; i++)
      if (count == i+1) 
        res += word;
      else 
        res += word + sep;
    return res;
}


