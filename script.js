const makeChange = (c) => {
  // your name here
	let result={
		"q":0,
		"d":0,
		"n":0,
		"p":0
	}
	while(c>0)
	{
		if(c>=25)
		{
			result.q++;
			c=c-25;
		}
		else
		if(c>=10)
		{
			result.d++;
			c=c-10;
		}
		else
		if(c>=5)
		{
			result.n++;
			c=c-5;
		}
		else
		if(c>=1)
		{
			result.p++;
			c=c-1;
		}
	}
	return result;
};

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
