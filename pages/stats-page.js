const { I } = inject();

var statsPage = {
     buttomPermitir:'//*[@id="ncmp__tool"]/div/div/div[3]/div[1]/button[1]',
     leagueIcon:'//*[@id="topnavbar"]/nav/ul/li[1]/h1/a/img',
     veigarIcon:'//*[@id="fastStats"]/div[4]/div/table/tbody/tr[5]/td[1]/a/div/div[1]/img',
     championIcon:'//*[@id="championListBox"]/div[1]/a/img',
     graphPopularidade:'//*[@id="mainContent"]/div/div[1]/a[1]/div/div/div/div[1]/div[1]',
     buttomVejaMais:'//*[@id="mainContent"]/div/div[1]/a[1]/div/div/div/div[2]/div/button',
     graphDanoCausado:'//*[@id="mainContent"]/div[2]/div[2]/div[3]/div/div[1]/div[1]',
     cookies:cookies ,
     stats:stats,
     graphs:graphs,

};

 function cookies(){
    I.amOnPage('/');
    I.waitForVisible(statsPage.buttomPermitir,10);
    I.seeElement(statsPage.buttomPermitir);
    I.click(statsPage.buttomPermitir);
 };

 function stats(){
    I.seeElement(statsPage.leagueIcon,10);
    I.scrollTo(statsPage.veigarIcon);
    I.click(statsPage.championIcon);

 };

 function graphs() {
    I.scrollTo(statsPage.graphPopularidade,);
    I.click(statsPage.buttomVejaMais);
    I.scrollTo(statsPage.graphDanoCausado);
 }

module.exports = statsPage;