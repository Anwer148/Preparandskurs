let vip = true;
let age = 17;

/* 
if (vip == true) alert('welcome in my best VIP customer :)');
if (age >= 18 && vip == false)  alert('Acces granted');
if (age < 18 && vip == false) alert('Acces denied');
 */

if (vip == true) // du behöver inte semicolon
    alert('welcome in my best VIP customer :)')
else if (age >= 18) 
    alert('Acces granted')
else 
    alert('Acces denied')
