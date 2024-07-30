/**
 * Mảng trong javascript-Array
 * 
 * 1. Tạo Mảng
 * - Cách Tạo
 * -Sử dụng cách nảo ? tại sao\
 * - kiểm tra data type?
 * 2. Truy xuất mảng
 * - Độ dài mảng 
 * - Lấy phần tử theo index
 */

/**
 * 1.To string
 * 2.join
 * 3.Pop
 * 4.push
 * 5.unshift
 * 6.shift
 * 7.splicing
 * 8.concat
 * 9.slicing
 */
var languages = [
    'javascript',
    'PHP',
    'Ruby',
    'Dark',
];

    // to stirng
        console.log(languages.toString());

    // join 
        console.log(languages.join(', '));

    //Pop
        console.log(languages.pop());// xóa phần tử cuối mảng và trả về phần tử đã xóa 

    // khi trong mảng k còn thì nó trả về undefined


    //push:  thêm phần từ ở cuối mảng 
        console.log(languages.push());

    // Shift: xoa phan tu dau mang vaf tra ve
        console.log(languages.shift());
        console.log(languages);

    //unshift : them dau mang
        console.log(languages.unshift('Dart','Java'));
        console.log(languages);
    
    // splice : xoa or them index splice(strat,end,(phantu insert))
    languages.splice(1,2);
    languages.splice(1,1,'JAVA','Python');
    console.log(languages);

    //concat: nôis 2 array
     var languages2=[
        'C++',
        'C#',
     ];
    console.log(languages.concat(languages2));

    //slice: cắt một vài value của mảng 
    console.log(languages.slice(1,2));

