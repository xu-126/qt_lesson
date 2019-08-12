// 140 likes
// 喜欢的人 [] "no one likes this"
// ["Peter"] "Peter likes this"
// ["Jacob","Alex"] "Jacob and Alex like this"
// ["Max","John","Mark"] "Max,John and Mark like this"
// ["Alex","Jacob","Mark","Max"] "Alex Jacob and two others like this"

// const likes = names => {
    // const len = names.length;
    // switch(len){
    //     case 0 : return 'no one likes this'
    //     case 1 : return names[0] + 'likes this'
    //     case 2 : return names[0] + 'and' + names[1] + 'like this'
    //     case 3 : return names[0] + ',' + names[1] + 'and' + names[2] + 'like this'
    //     default:return names[0]+names[1]+"and 2 other like this";

    // }
    // 顺序思维 数学思维
    // 4种可能 likes 的 模式？
    // phone number 1种模式的匹配 
// }

const likes = names => {
    const templates = [
        'no one likes this','{name} likes this','{name} and {name} like this','{name} , {name} and {name} like this','{name},{name} and {n} others like this'
    ];
    let idx = Math.min(names.length,4);//哪一个模式
    return templates[idx].replace(/{name}|{n}/g,function(val) {
        console.log(val);
        return val === '{name}' ? names.shift() : names.length;
    });
}
 console.log(likes(["Peter","Alex","Bob","Alice","Tom"]));