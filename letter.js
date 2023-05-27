var i = 0;
var txt1 = `
Hiii Zakiii, >>

First things first, a huuuge sorry for whatever I have done today.> 
I have no clue why did I even say that when honestly this is my first>
time using it. I won't be justyfing anything. It was straight-up, bad. period.>
No matter who the other person is I shouldn't have used it.>>

You know, I kinda enjoy talking to you a little too much. I look forward> 
for your pings. And every time I get one, they are accompanied by a small>
cute dose of happiness. I enjoy it so much that I've actually started sharing my>
pictures, how i feel at times, my bucket lists, things i wanna do,>
feeling all excited like a kid. It's niceee talking about>
random stuff with someone. Who would've thought that two people from omegle>
can also be good friends. To the point that I've started using your words>
like 'uh huh' and 'kay' around my colleagues, lol. Discord now kinda became a >
must open app in my pc during the day along side slack, spotiy, editor and browser.>
You have a natural grace that is truly captivating and combined with your >
infectious humor, you are menacingly perfect, lol>>

When you said you'll be deleting your discord, that's when I realised how much>
I've started talking to you and how much I'm gonna miss you. Damn, the thought>
of it sucked, ughh. But when a person decides that a particular bond is>
not good for them, something would've hurt them or made them feel bad. I'm sure>
they had their own reasons which lead them take this decision. And when it really>
comes down to it, I respect the decision others take even though it potentially means>
ceasure of a bond which means a lot to me. I might not say anything that can make>
them change their mind at times like that... so.. saying it right now> 
Zakiiii I am sorry and I did not mean it(b*sh) literally. There are so many things>
I am learning and constantly trying to be better at. I might make mistakes in the>
process but I never had/have/will have an intention to hurt or disrespect you.>
If you ever feel that is not the case, let me know, I'll work on it for sure.>
Don't wanna be losing a friend like you.
`
var speed = 50;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {        
        if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
        else if(txt1.charAt(i)=='>')
            document.getElementById("text1").innerHTML += '</br>'
        else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
