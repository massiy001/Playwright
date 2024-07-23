import {test, expect} from 'playwright/test'

test.only('Get the first listed Country that speak spanish', async({request})=>
{
    const response = await request.get('https://restcountries.com/v3.1/lang/spanish');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body[0].name.common).toBe("Colombia");

    console.log(body[0].name.common);
})


test.only('Get the capital of Australia', async({request})=>
    {
        const response = await request.get('https://restcountries.com/v3.1/name/australia');
    
        expect(response.status()).toBe(200);
    
        const body = await response.json();
    
        expect(body[0].capital).toBe("Canberra");
    })


test.only('Validate the number of official languages in SA is 11', async({request})=>
    {
        const response = await request.get('https://restcountries.com/v3.1/name/south%20africa');
    
        expect(response.status()).toBe(200);
    
        const body = await response.json();
        // console.log(typeof(body[0].languages));
        // console.log(Object.keys(body[0].languages));
        expect(Object.keys(body[0].languages).length).toEqual(11);
    })

test.only('Get and print the official languages spoken in South Africa', async({request})=>
    {
        const response = await request.get('https://restcountries.com/v3.1/name/south%20africa');
    
        expect(response.status()).toBe(200);
    
        const body = await response.json();

        expect(Object.values(body[0].languages));

        console.log(Object.values(body[0].languages));
    })

