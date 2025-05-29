/*
Write a function named letterFinder in JavaScript that takes two parameters: word and match. The function should search for all positions of the match letter within the word and log results as follows:

    If a match is found, log:
    Found the [match] at [index]

    If no match is found, log:
    ---No match found at [index]

Use a for loop that starts at index 0 and goes up to the end of the word. Inside the loop, use word[i] to compare each letter with match.



اكتب دالة باسم letterFinder في JavaScript تأخذ كلمتين كوسيطين: word و match. تقوم الدالة بالبحث عن جميع مواضع الحرف match داخل الكلمة word وتطبع النتائج على النحو التالي:

    إذا وُجد تطابق، اطبع:
    Found the [match] at [index]

    إذا لم يوجد تطابق، اطبع:
    ---No match found at [index]

استخدم حلقة for تبدأ من 0 وحتى نهاية الكلمة، وداخلها استخدم word[i] للمقارنة مع match.

*/
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")

/*
    output is 
    
    Found the t at 0
    ---No match found at 1
    ---No match found at 2
    Found the t at 3
*/