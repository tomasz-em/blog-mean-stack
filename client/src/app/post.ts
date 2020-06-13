/* interface Post { // alb dopisać "I" lub "Interface" do ine.. albo odwołąć soię do type
    title: string,
    shortContent: string,
    longContent: string,
    id: string
} */

export type Post = { // alb dopisać "I" lub "Interface" do ine.. albo odwołąć soię do type
    title: string,
    shortContent: string,
    longContent: string,
    id: string
}

export const postData: Array<Post> = [ // dane startowe
    {
        title: 'Próbny tytuł początkowy',
        shortContent: 'Turkey kielbasa short ribs shank spare ribs alcatra tongue, jowl salami flank ground round.',
        longContent: 'Tongue corned beef flank chicken pork belly. Sirloin t-bone corned beef tri-tip meatball, chislic spare ribs tongue. Meatball short ribs prosciutto swine shankle boudin beef ribs tenderloin. Strip steak drumstick burgdoggen, turducken chislic bresaola corned beef kevin tail salami capicola andouille sausage. Short ribs tail turducken strip steak pork loin filet mignon drumstick ball tip hamburger chislic landjaeger fatback. Swine tail pork loin kielbasa ribeye pig chuck.',
        id: '1'
    },
    {
        title: 'Próbny tytuł numer 2',
        shortContent: 'Meatball short ribs prosciutto swine shankle boudin beef ribs tenderloin. Strip steak drumstick burgdoggen, turducken chislic bresaola corned beef kevin tail salami capicola andouille sausage.',
        longContent: 'Short loin landjaeger fatback pancetta, shankle pork belly pork chop bacon. Filet mignon tail drumstick turducken ham hock jerky bresaola bacon capicola pastrami pork corned beef tenderloin. Venison frankfurter biltong leberkas porchetta ham hock andouille salami shankle. Kevin ball tip meatball pig, burgdoggen tenderloin flank jerky. Fatback buffalo sausage shank pork belly turkey chislic shankle tenderloin sirloin jerky leberkas venison landjaeger. Tongue shankle cupim beef ribs swine landjaeger prosciutto doner ball tip filet mignon drumstick pork picanha shank brisket.',
        id: '2'
    },
    {
        title: 'Trzeci jakiś post (#3)',
        shortContent: 'Tongue shankle cupim beef ribs swine landjaeger prosciutto doner ball tip filet mignon drumstick pork picanha shank brisket.',
        longContent: 'Bacon ipsum dolor amet cupim spare ribs short ribs andouille jowl, porchetta tongue cow strip steak ground round shoulder pork loin t-bone biltong ribeye. Ham hock fatback tri-tip cupim shank boudin, andouille doner. Porchetta chicken venison landjaeger shank, doner tail hamburger spare ribs beef. Cupim tri-tip landjaeger, bacon capicola filet mignon meatball rump pig. Porchetta chicken pancetta, boudin rump jowl ground round ball tip. Tri-tip andouille corned beef salami drumstick.',
        id: '3'
    },
    {
        title: 'Czwarty tytuł dla nowosći',
        shortContent: 'Short ribs tail turducken strip steak pork loin filet mignon drumstick ball tip hamburger chislic landjaeger fatback.',
        longContent: 'Brisket shoulder ball tip, kevin porchetta venison fatback bacon cupim picanha shank meatloaf sausage ham pork chop. Meatball alcatra pork loin bresaola bacon chuck chislic salami andouille shoulder. Andouille bresaola tenderloin venison shank drumstick sausage jerky meatloaf. Shoulder swine ball tip pork loin, landjaeger tri-tip leberkas shankle pork belly pig bacon short loin rump meatloaf.',
        id: '4'
    },
];

// export { Post, postData };