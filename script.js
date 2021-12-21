var x = 50;
var expression1 = (x < 25);
var expression2 = (x > 50);


if ( expression2 )
{ console.log ('False ❌ True ✅')
}



if ( !expression1 && !expression2 ) 
{console.log ('False ❌ False ❌')
}


if ( expression1 && expression2 )
{ console.log ('True ✅ True ✅ ')
}



if ( expression1 ) 
{ console.log ('True ✅ False ❌ ')
}
