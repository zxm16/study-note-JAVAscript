// 第三章

// 3.4数据类型

/* typeof操作符*/
let message = "some string";

console.log(typeof message);
console.log(typeof (message))
console.log(typeof 65)


/* undefined操作符*/
let message01;
console.log(message01 == undefined);

let message02 = undefined;
console.log(message02 == undefined);

let message03;
console.log(message03);
// console.log(age);

let message04;
console.log(typeof message04);
console.log(typeof age);

let message05;

if(message05)
{
    console.log('1')
}

if (! message05)
{
    console.log('2')
}

// if (age)
// {
//     console.log('3')
// }


/* Null类型*/
let message06 = null;
let age01;
console.log(typeof message06);
if (message06)
{
    console.log('1');
}
if (!message06)
{
    console.log('2')
}
if(!age01)
{
    console.log('3')
}


/* Boolean类型*/
let message07 = "hello world";

if (message07)
{
    console.log('4');
}

/* Number类型*/
let result = Number.MAX_VALUE + Number.MAX_VALUE;

console.log(isFinite(result))

console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN("10"));
console.log(isNaN('blue'));
console.log(isNaN(true));

///Number()函数

//将数字字符串或者bool值转化为数值
let num1 = Number('hello world')
let num2 = Number('10')
let num3 = Number('01001')
let num4 = Number(true)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)


//parseInt()只会提取字符串里的数字进行输出成数值
// 而且当时"123blue223"这种形式时只提取前面的字符后面的字符不会提取

let num5 = parseInt("123blue223");
let num6 = parseInt(" ");
let num7 = parseInt("0xA");
let num8 = parseInt("22.5");
let num9 = parseInt("70");
let num10 = parseInt("0xf");
console.log(num5);
console.log(num6);
console.log(num7);
console.log(num8);
console.log(num9);
console.log(num10);

//字符串第一值是0的话不解析
let num21 = parseInt("01112");
console.log(num21);

//可指定其为多少进制的数，就算省略进制符也可以转化为数值
//没有加上进制符也没有指定符解读的字符返回值是NaN
let num11 = parseInt('0xAF',16);
let num12 = parseInt("AF",16);
let num13 = parseInt("AF");
console.log(num11);
console.log(num12);
console.log(num13);

//通过第二位指定符可以将其进行进制转换
let num14 = parseInt("10",2);
let num15 = parseInt("10",8);
let num16 = parseInt("10",10);
let num17 = parseInt("10",16);
console.log(num14);
console.log(num15);
console.log(num16);
console.log(num17);

/// parseFloat()将字符串转化为数值

//解析字符串从第一位开始解析到第一个小数点开始到第二个小数点停止
let num18 = parseFloat("1.222zxc11.3");
let num19 = parseFloat("1.2224.123");
console.log(num18);
console.log(num19);

//字符串第一值是0的话不解析
let num20 = parseFloat("012.22");
console.log(num20);

let num23 = parseFloat('1234blue');
let num24 = parseFloat('0xA');
let num25 = parseFloat('22.5');
let num26 = parseFloat('22.34.5');
let num27 = parseFloat('0908.5');
let num28 = parseFloat('3.123e7');
console.log(num23);
console.log(num24);
console.log(num25);
console.log(num26);
console.log(num27);
console.log(num28);


///String类型

//可以将数值转换为字符串
// toString（）可将数值，布尔值，对象，字符串值
let age02 = 11;
let ageAsString = age02.toString();
console.log(ageAsString);
// 打印ageAsString
console.log(typeof ageAsString);
// 打印ageAsString的类型
let found = true;
let foundAsString = found.toString();
console.log(foundAsString);
// 打印foundAsString
console.log(typeof foundAsString);
// 打印foundAsString的类型

//可以在toString（）中指定值可以通过数值来指定
// 输出的是二进制字符串还是别的进制字符串
let num = 10;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));

//String()可以将展示值转化成字符串
let value01 = 10;
let value02 = null;
let value03 = true;
let value04;
console.log(String(value01));
console.log(String(value02));
console.log(String(value03));
console.log(String(value04));

//ES6新增使用模板字面量定义字符串
let myMultiLineString = 'first line\n second line';
let myMultiLineString01 = 'first linesecond line';
console.log(myMultiLineString);
console.log(myMultiLineString01);

//字符串插值
//1.用加号
let mail = 'I\'m coming';
let Email = 'ela'+ mail;
console.log(Email);
//2.用$来
let Email01 ='I\'m coming ${mail}';
console.log(Email01);
