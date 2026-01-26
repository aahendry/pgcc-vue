<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h3>Bicentenary</h3>
        <h4>1827 - 2027</h4>
      </b-col>
    </b-row>
    <br/>
    <b-row>
      <b-col>
        <p>Port Glasgow Curling Club, one of the oldest clubs in Scotland in continuous existance, celebrates its bicentenary in 2027.</p>
        <p>Please take some time to explore our Virtual Museum, which features a growing collection of artefacts and information about the club and the sport of curling.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <a href="https://ehive.com/collections/206897/port-glasgow-curling-club" target="_blank" class="btn btn-primary">Virtual Museum</a>
      </b-col>
    </b-row>

    <br/>
    <hr/>

    <b-row>
      <b-col lg="4" md="12">
        <h3>Bicentenary Events</h3>
        <b-row>
          <b-col v-for="event in events" :key="event.id" sm="12">
            <b-card style="max-width: 40rem;" class="mb-2">
              <b-card-title title-tag="h5">{{event.what}}</b-card-title>
              <b-card-sub-title class="mb-2">{{event.when}}</b-card-sub-title>
              <b-card-text>
                <p>{{event.where}}</p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>

      <b-col lg="8" md="12">
        <h3>Club History</h3>
        <p>Prepared for the Club’s Heritage Celebrations</p>
        <hr/>
        <h5>Origins and Early Ponds (1827–1896)</h5>
        <p>Founded in <strong>1827</strong>, the Club quickly became a cornerstone of local sporting life. Recognition followed in <strong>1840</strong> with admission to the <strong>Royal Club</strong>, affirming its growing stature. <strong>1847</strong> was to be the <strong>stormiest in the club’s history</strong>. After a dispute over the choice of President a group of curlers left the club to form their own <strong>Port Glasgow and Newark Union</strong> club. This breakaway group only lasted for five years however, with some curlers returning in <strong>1852</strong>. The latter 19th century was marked by steady development and relocation of facilities: a move from <strong>Harelaw Pond to New Pond (1877)</strong>, the erection of a <strong>pond house (1883)</strong>, and <strong>fencing of the pond in 1885</strong>. Deciding that this pond was perhaps ‘too close’ to the town centre, by <strong>1896</strong> the Club relocated once more, this time to <strong>Slaemuir Pond</strong>, closing a formative chapter.</p>
        <br/>
        <h5>Growth, Challenge, and Change (1902–1937)</h5>
        <p>The early 20th century brought prominence and pressure. The Club took part in the <strong>Royal Club Bonspiel at Carsebreck (1902)</strong> near Stirling, while <strong>Crossmyloof (Glasgow) opened in 1907</strong>, offering new opportunities to play curling indoors. Not all ambitions succeeded—the Club’s own <strong>outdoor tarmac rink proposal failed in 1911</strong> due to construction costs—and <strong>Crossmyloof closed in 1918</strong>. Despite these challenges, the Club <strong>celebrated its Centenary in 1927</strong>. The <strong>reopening at Crossmyloof in 1928</strong> was followed by administrative and local challenges, including a <strong>farmers’ complaint</strong> and subsequent <strong>factors’ correspondence</strong> which asserted the club’s flooding of the farmer’s property. There were fears that the club could fold if they lost the use of their pond, but by <strong>1937</strong> the club had moved from <strong>Slaemuir</strong> pond to <strong>Devol</strong> (having lost their appeals to the factor and landlord).</p>
        <br/>
        <h5>Post-War Stability and Milestones (1953–1986)</h5>
        <p>Post-war years saw consolidation and memorable events. The <strong>old pond hut moved to Dougliehill (1953)</strong>. With milder winters now there were <strong>fewer opportunities for outdoor curling</strong> but there were still some outdoor <strong>Grand Matches</strong> (last on the <strong>Lake of Monteith in 1979</strong>). The club’s secretary was congratulated during this era on the <strong>“pleasing design of the club’s first badge”</strong> which was modelled on the Coat of Arms of Port Glasgow. <strong>Greenacres opened in 1975</strong> giving the club opportunities to play indoors closer to home. The club took some 10 sheets of ice there with a further 50 sheets at Crossmyloof and 6 at Irvine. The club celebrated it’s <strong>150th Anniversary in 1977</strong> and established <strong>social weekends at Forrest Hills (from 1984)</strong>. The Indoor facilities at <strong>Crossmyloof finally closed in 1986</strong>.</p>
        <br/>
        <h5>The Indoor Era and Modern Celebrations (1993–2027)</h5>
        <p>A new chapter began with the <strong>start of indoor curling’s ‘Golden Age’ in 1993</strong> across Scotland. The <strong>Waterfront opened in 1997</strong>, providing the club with an indoor venue on it’s doorstep. Nationally, <strong>Grand Matches (North vs South)</strong> were now played across Scotland in a number of the indoor Ice Venues on a nominated day (the South winning in 2000, 2005, 2010, 2015, and 2025). The Club’s Major anniversaries punctuated this period: <strong>175th (2002), 185th (2012), and 190th (2017)</strong>. The Club’s <strong>last weekend at Forrest Hills took place in 2004</strong>, before the venue’s closure in <strong>2006</strong>. The story reaches a landmark moment with the <strong>Club’s Bicentenary in 2027</strong>, celebrating two centuries of curling heritage, being marked by a number of commemorative events.</p>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'Bicentenary',
  data() {
    return {
      events: []
    };
  },
  created() {
    this.events = [
      { id: 1, what: 'Anniversary Curlers\' Court', when: 'Friday 23rd October 2026', where: '175 Club' },
      { id: 2, what: 'Civic Reception', when: 'w/c 25th January 2027', where: 'TBC' },
      { id: 3, what: 'Celebration Dinner', when: 'Friday 19th February 2027', where: 'Tontine Hotel' },
      { id: 4, what: 'Ye Olde Game of Curling Bonspiel', when: 'w/c 1st February 2027', where: 'TBC' },
      { id: 5, what: 'Invitational Bonspiel', when: 'Saturday 9th October 2027', where: 'Waterfront' },
      { id: 6, what: 'Ceilidh', when: 'Saturday 27th November 2027', where: 'Tontine Hotel' }
    ];
  }
};
</script>
